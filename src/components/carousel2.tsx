import {
    Dimensions,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, {FC} from 'react';

interface Props{}

const Carousel2:FC<Props> = ({})=>{
    
    const alphabets: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]

    const renderItem = ({item}: any) => (
        <View style = {styles.item}>
            <ImageBackground 
                source = {require('../assets/images/backgrounds/wall.jpg')}
                style = {styles.img}
            >
                {item}
            </ImageBackground>
        </View>
    );

    return(
        <View>
            <Text>Window Area: {wWidth} X {wHeight}</Text>
            <Text>Screen Area: {sWidth} X {sHeight}</Text>
            <FlatList
                horizontal = {true}
                data = {alphabets}
                renderItem = {renderItem}
            />
        </View>
    );
};

const wWidth = Dimensions.get('window').width;
const sWidth = Dimensions.get('screen').width;
const wHeight = Dimensions.get('window').height;
const sHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    item: {
        //backgroundColor: 'pink',
        height: wHeight,
        width: wWidth,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        //flex: 1,
    },
    img:{
        //flex: 1,
        resizeMode: 'center' ,
        width: '100%',
        height: '100%',
    },
});

export default Carousel2;