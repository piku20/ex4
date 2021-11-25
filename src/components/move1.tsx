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

const Move1:FC<Props> = ({}) => {
    
    const translateX = useRef(new Animated.Value(0)).current;

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponderCapture: ()=> true,
        onMoveShouldSetPanResponder: ()=>true,        
        onPanResponderMove: Animated.event([null, {dx: translateX}]),        
        onPanResponderRelease: (e, {vx, dx})=>{
            if(vx > 1000 || vx < 0){
                translateX.setValue(vx);
            }            
        },        
    });
    
    return(
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <View style = {styles.slider}>
                    <Animated.View 
                        style={[
                            styles.thumb,
                            {transform:[{translateX: translateX}]}
                        ]}
                        {...panResponder.panHandlers}
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

export default Move1;