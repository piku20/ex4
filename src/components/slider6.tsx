import {
    Animated,
    Easing,
    GestureResponderEvent,
    PanResponder,
    PanResponderGestureState,
    PanResponderInstance,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, {
    FC,
    useEffect,
    useRef,
    useState,
} from 'react';

import slider6Styles from './../assets/data/slider6Data';

interface Props{
    value?:number;
    disabled?: boolean;
    min: number;
    max: number;
    onChange: (value:number)=>void;
    onComplete: (value:number)=>void;
    width: number;
    height: number;
    borderRadius?:number;
    maximumTrackTintColor?:string;
    minimumTrackTintColor?:string;
    showBallIndicator?:boolean;
    step?:number;
    ballIndicatorColor?:string;
    ballIndicatorWidth?:number;
    ballIndicatorHeight?:number;
    ballIndicatorPosition?:number;
    ballIndicatorTextColor?: string;
    animationDuration?:number;
    showBackgroundShadow?:boolean;
    shadowProps?:{
        shadowOffsetWidth?:number;
        shadowOffsetHeight?:number;
        shadowOpacity?:number;
        shadowRadius?:number;
        elevation:number;
        shadowColor?:string;
    };
    renderIndicator?:(value:number)=>JSX.Element;
};

/*
let disabled:boolean = true;
let min:number = 0;
let max:number = 10;
let step:number = 1;
let height: number = 30;
*/


const Slider6:FC<Props> = ({
    value,
    disabled,
    step,
    min,
    max,
    onChange,
    onComplete,
    animationDuration = 500,
    width=350,
    height=30,
    borderRadius=5,
    maximumTrackTintColor="#3F2DA5",
    minimumTrackTintColor="#77ADE6",
    showBallIndicator=true,
    ballIndicatorColor="#ECECEC",
    ballIndicatorWidth = 48,
    ballIndicatorHeight=48,
    ballIndicatorPosition=-60,
    ballIndicatorTextColor="#000000",
    showBackgroundShadow=true,
    shadowProps={
        shadowOffsetWidth:0,
        shadowOffsetHeight:1,
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation:3,
        shadowColor: "#000",
    },
    renderIndicator=null,    
}) => {
    const [slideValue, setValue] = useState<number>(value || min);
    const [sliderHeight, setSliderHeight] = useState<Animated.Value>(new Animated.Value(0));
    const [ballHeight, setBallHeight] = useState<Animated.Value>(new Animated.Value(0));
    //const [panResponder, setPanResponder] = useState<PanResponderInstance>();

    let moveStartValue: number = 0;

    let panResponder = PanResponder.create({
        onStartShouldSetPanResponder: ()=>true,
        onMoveShouldSetPanResponder: ()=>false,
        onPanResponderGrant: ()=>{
            let moveStartValue = value;
        },
        onPanResponderMove: (
            _event: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        )=>{
            if(disabled){
                return;
            }
            const value = fetchNewValueFromGesture(gestureState);
            changeState(value);
            if(onComplete){
                onComplete(value);
            }
        },
    });

    const fetchNewValueFromGesture = (gestureState:any):number =>{
        const ratio = -gestureState.dy/height;
        const diff = max - min;
        if(step){
            return Math.max(min,Math.min(max,moveStartValue+Math.round((ratio*diff)/step)*step));
        }
        let value = Math.max(min, moveStartValue+ratio*diff);
        return Math.floor(value*100)/100;
    };

    const getSliderHeight = (value:number):number=>{
        return ((value-min)*height)/(max-min);
    };

    const changeState = (value:number):void=>{
        const sliderHeight2 = getSliderHeight(value);
        let ballPosition = sliderHeight2;
        const ballHeight2 = renderIndicator ? ballIndicatorHeight : ballIndicatorWidth;
        if(ballPosition + ballHeight2 >= height){
            ballPosition = height - ballHeight2;
        }else if(ballPosition - ballHeight2 <= 0){
            ballPosition = 0;
        }else{
            ballPosition = ballPosition - ballHeight2/2;
        }

        Animated.parallel([
            Animated.timing(sliderHeight,{
                toValue: sliderHeight2,
                easing: Easing.linear,
                duration: animationDuration || 0,
                useNativeDriver: false,
            }),
            Animated.timing(ballHeight,{
                toValue: ballPosition,
                easing: Easing.linear,
                duration: animationDuration || 0,
                useNativeDriver: false,
            }),
        ]).start();
        setValue(value);

    };

    useEffect(()=>{
        if (value){
            changeState(value)
        }
    },[value]);

    const shadowStyles = {
        shadowColor: shadowProps.shadowColor,
        shadowOffset: {
            width: shadowProps.shadowOffsetWidth,
            height: shadowProps.shadowOffsetHeight,
        },
        shadowOpacity: shadowProps.shadowOpacity,
        shadowRadius: shadowProps.shadowRadius,
        elevation: shadowProps.elevation,
    };

    return(
        <View style={[styles.container, {
            height: height,
            width: width,
            borderRadius: borderRadius,
            backgroundColor: maximumTrackTintColor,
        } ]}
        {...panResponder?.panHandlers}
        >
            <Animated.View
                style={[styles.ball,
                    //showBackgroundShadow? shadowStyles : {}]},
                    {
                        height: height,
                        width: width,
                        
                    }
                ]}
            ></Animated.View>
        </View>
    );
    
    
};

const styles = StyleSheet.create({
    container:{
        overflow: 'hidden',
    },
    ball:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent:'center',
    },
    
});



export default Slider6;