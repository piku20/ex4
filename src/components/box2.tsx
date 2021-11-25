import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {FC} from 'react';

interface Props{
    //title:string;
    //image:string;
    multiplier: number;
    numba: number;
    marginTop: number;
}

const Box2:FC<Props> = ({
    //title,    
    multiplier,
    numba,
    marginTop,
})=>{
    
    
    const grow = (h: number)=>{
        return h*(1 + (multiplier/10));
    }
    
    
    return(
        <View style={[styles.mainContainer, {marginTop: marginTop}]}>
            <TouchableOpacity>
                <View style = {[styles.innerCan, {width: grow(50), height: grow(100)} ]}>
                    <Text style={styles.numba}>{numba}</Text>
                    <ImageBackground
                        source = {require('../assets/images/b2.png')}
                        style = {styles.img}                        
                    ></ImageBackground>
                </View>
            </TouchableOpacity>
            <View>
                <ImageBackground
                    source = {require('../assets/images/backgrounds/shelf.png')}
                    //resizeMode = "cover"
                    style={styles.shelf}
                ></ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        backgroundColor: 'rgba(242,142, 28, 1.00)',
        width: 100,
        height: 200,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center',
    },

    mainContainer: {
        //backgroundColor: 'pink',
        //width: 100,
        height: 200,
        marginHorizontal: 0.5,
        //marginVertical: 10, //get rid
        justifyContent: 'flex-end',
    },
    innerCan:{
        //backgroundColor: 'orange',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    numba:{
        fontWeight: 'bold',
        color: 'limegreen',
    },
    shelf:{
        height: 20,
        width: '400%',
        resizeMode: 'cover',
        //backgroundColor: 'brown',
    },
    img: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
});

export default Box2;