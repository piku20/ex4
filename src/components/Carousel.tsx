import {
    Animated,
    Dimensions,
    ImageStore,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import useInterval from './useInterval';

interface Props{}

const MAX_WIDTH = Dimensions.get('screen').width;

const Carousel:FC<Props> = ({})=>{
    
    const images: string[] = [];
    
    const animation = useRef(new Animated.Value(0));
    const [currentImage, setCurrentImage] = useState(0);

    useInterval(()=> handleAnimation(), 5000);

    const handleAnimation = ()=> {
        let newCurrentImage = currentImage + 1;

        if(newCurrentImage >= ImageStore.length)
    }

    return(
        <View
            style = {{flex:1, alignItems: 'center'}}
        >
            <View style={{paddingTop: 20}}>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Carousel;