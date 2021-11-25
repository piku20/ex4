import React, {FC, useState} from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface Props{
    text:any;
};

const Box3:FC<Props> = ({
    text,
}) => {

return(
    <View>
        <TouchableOpacity>
            <Text style={styles.box}>{text}</Text>
        </TouchableOpacity>
    </View>
);   

};

const styles = StyleSheet.create({
    box:{
        width: 50,
        height: 50,
        backgroundColor: 'pink',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        alignContent: 'center',
    },
});

export default Box3;