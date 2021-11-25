import {
    Animated,
    PanResponder,
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

interface Props{};

const Slider5:FC<Props> = ({}) => {

    const [length, setLength] = useState(0);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [tintWidth, setTintWidth] = useState();
    

    const [value, setValue] = useState(200);
    
    const pan = useRef(new Animated.Value(value)).current;

    const panResponder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: ()=>true,
        onPanResponderGrant: ()=>{
            pan.setOffset(pan._value);
        },
        onPanResponderMove: (evt, {dx, moveX})=>{
            if(moveX<1000 && moveX>0){
                pan.setValue(dx);
                //setValue(dx);
            }
        },
        onPanResponderRelease: ()=>{
            pan.flattenOffset();
            setValue(pan._value);
            setTintWidth(pan._value);
        },
    })).current;
    
    return(
        <View style={styles.container}>
            <Text>Value is {value}</Text>
            <View style={styles.sliderContainer}>
                <View 
                    style={styles.slider}
                    onLayout={(evt)=>{
                        const {width, x} = evt.nativeEvent.layout;
                        setLength(width);
                        setLeft(x);
                        setRight(x+width);
                    }}
                >
                    <Animated.View 
                        style={[styles.beerPart, {width: tintWidth}]}
                    ></Animated.View>
                    <Animated.View 
                        {...panResponder.panHandlers}
                        style={[styles.thumb,
                            {transform:[{translateX: pan}]},                            
                        ]}
                    ></Animated.View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderContainer:{
        backgroundColor: 'grey',
        width: 1000,
    },
    slider:{
        backgroundColor: 'lightcoral',
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        height: 30,
        //width: 1000,
        borderRadius: 25,
    },
    beerPart:{
        backgroundColor: 'orange',
        height: '100%',        
        borderRadius: 25,
        //width: '100%',
    },
    thumb:{
        backgroundColor: 'purple',
        borderRadius: 50,
        height: '110%',
        width: 32,
        marginLeft: -10,
    },
});

export default Slider5;