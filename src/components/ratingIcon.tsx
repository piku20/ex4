import {
    Ionicons,
    MaterialCommunityIcons,
} from '@expo/vector-icons';
import React, {FC} from 'react';

import {
    StyleSheet,
} from 'react-native';

interface Props{
    filled: boolean;
    color: string;
    size: number;
}

const RatingIcon:FC<Props> = ({
    filled,
    color,
    size,
})=>{   
    return(
        <Ionicons
            name = {filled === true ? "md-beer" : "md-beer-outline"}
            size = {size}
            color = {color}
            style = {styles.icon}
        />
    );
};

const styles = StyleSheet.create({
    icon:{
        marginHorizontal: 10,
    },
});

export default RatingIcon;