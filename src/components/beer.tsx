import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {FC} from 'react';

interface Props{
    title:string;
    image:string;
    multiplier: number;
}

const Beer:FC<Props> = ({
    title,
    image,
    multiplier,
})=>{
    
    const grow = (h: number)=>{
        return h*(1 + (multiplier/10));
    }
    
    return(
        <View style = {styles.container}>
            <TouchableOpacity>
                <View style = {styles.innerContainer}>
                    <Image 
                        style = {[styles.img, {height: grow(100), width: grow(50)}]}
                        source = {require('../assets/images/b1.png')}
                        //source = {require(`${image}`)}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent: 'flex-end',
        alignItems: 'baseline',
        flex: 1,
        backgroundColor: 'yellow',
        width: 100,
    },
    innerContainer:{
        backgroundColor: 'aqua',
        justifyContent: 'flex-end',
        marginHorizontal: 5,
    },
    img:{
        //height: 100,
        //resizeMode: 'contain',
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Beer;