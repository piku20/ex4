import {
    Animated,
    Easing,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';

import RatingIcon from './ratingIcon';

interface Props{
    value: number;
    maximumRating: number;
    color: string;
    size: number;
    onRate?: (n: number)=> void;
    readonly?: boolean;
}

const Rating:FC<Props> = ({
    value,
    maximumRating,
    color,
    size,
    onRate,
    readonly,
})=>{   
        
    const [animation, setAnimation] = useState(new Animated.Value(1));
    const [newRating, setNewRating] = useState(5);

    const animate = () => {
        Animated.timing(animation, {
            toValue: 2.5,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => {
            animation.setValue(1);
        });
    };

    let icons: any = [];

    const animateScale = animation.interpolate({
        inputRange: [1,1.5,2],
        outputRange: [1,1.4,1],
    });
    
    const animateOpacity = animation.interpolate({
        inputRange: [1,1.2,2],
        outputRange: [1,0.5,1],
    });

    const animateWobble = animation.interpolate({
        inputRange:[1,1.25,1.75, 2],
        outputRange: ["0deg", "-30deg", "30deg", "0deg"],
    });

    const animationStyle = {
        transform: [{scale: animateScale}, {rotate: animateWobble}],
        opacity: animateOpacity,
    };

    useEffect(()=>{
        setNewRating(value);
    }, [value]);

    for(let x=1; x<=maximumRating; x++){
        if(readonly){
            icons.push(
                <RatingIcon
                    key = {x}
                    size = {size}
                    filled = {x <= newRating ? true : false}
                    color = {color}
                />
            );
        }else{
            icons.push(
                <TouchableWithoutFeedback
                    key = {x}
                    onPress = {() => {
                        if(onRate){
                            onRate(x)
                        }
                        setNewRating(x);
                        animate();
                    }}
                >
                    <Animated.View
                        style = {x <= newRating ? animationStyle : null}
                    >
                        <RatingIcon
                            size  = {size}
                            filled = {x <= newRating ? true: false}
                            color = {color}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>
            );
        }
    }
    
    return(
        <View style={styles.ratingContainer}>
            {icons}
        </View>
    );
};

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
    },
});

export default Rating;