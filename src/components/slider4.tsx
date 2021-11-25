import {
    Animated,
    PanResponder,
    StyleSheet,
    View,
} from 'react-native';
import React, {
    FC,
    useEffect,
    useRef,
    useState,
} from 'react';

interface Props{};

const Slider4:FC<Props> = ({}) => {

    const [width, setWidth] = useState(500);
    const [maxWidth, setMaxWidth] = useState(0);
    const [minWidth, setMinWidth] = useState(1000);

    const thumbAnim = useRef(new Animated.Value(0)).current;
    const fillAnim = useRef(new Animated.Value(0)).current;
    
    const thumbResponder = PanResponder.create({
        onStartShouldSetPanResponder: ()=> true,    
        //onMoveShouldSetPanResponder: ()=> true,
        onPanResponderGrant: ()=>{
            thumbAnim.setOffset(thumbAnim._value);
            fillAnim.setOffset(fillAnim._value);
        },
        onPanResponderMove: (evt, {dx, moveX})=>{
            if(moveX > maxWidth && moveX < minWidth){
                thumbAnim.setValue(dx);
                fillAnim.setValue(-dx)
            }
        },
        onPanResponderRelease: ()=>{
            thumbAnim.flattenOffset();
            fillAnim.flattenOffset();
        },       
    });
    
    return(
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <View 
                    style={styles.slider}
                    onLayout={(evt)=>{
                        const {width, x} = evt.nativeEvent.layout;
                        setWidth(width);
                        setMaxWidth(x+width);
                        setMinWidth(x);
                    }}
                >
                    <Animated.View 
                        style={[styles.beerPart]}
                    ></Animated.View>
                    <Animated.View 
                        {...thumbResponder.panHandlers}
                        style={[styles.thumb,
                            {transform:[{translateX: thumbAnim}]}
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
        //width: 1000,
    },
    slider:{
        backgroundColor: 'lightcoral',
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        height: 30,
        width: 1000,
        borderRadius: 25,
    },
    beerPart:{
        backgroundColor: 'orange',
        height: '100%',        
        borderRadius: 25,
    },
    thumb:{
        backgroundColor: 'purple',
        borderRadius: 50,
        height: '110%',
        width: 32,
        marginLeft: -10,
    },
});

export default Slider4;