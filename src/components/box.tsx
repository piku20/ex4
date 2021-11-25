import React, {FC} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

interface Props{
    title:string;
    //image:string;
    //multiplier: number;
}

const Box:FC<Props> = ({
    title,    
    //multiplier,
})=>{
    
    /*
    const grow = (h: number)=>{
        return h*(1 + (multiplier/10));
    }
    */
    
    return(
        <TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    title:{
        backgroundColor: 'rgba(242,142, 28, 1.00)',
        width: 50,
        height: 150,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center',
    },
});

export default Box;