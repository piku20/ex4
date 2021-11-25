import {
    Dimensions,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, {FC, useState} from 'react';

import Beer from './beer';
import Box from './box';
import Box2 from './box2';
import beers2 from '../assets/data/beersData2';

interface Props{}

const Boxes2:FC<Props> = ({})=>{
    
    //const titles: string[] = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];

    const [widthArray, setWidthArray] = useState<number[]>([]);

    const [winHeight, setWinHeight] = useState<number>(Dimensions.get('window').height);
    
    //const winHeight: number = Dimensions.get('window').height;    
    const componentHeight: number = 200+20;    //max beer height + surface thickness
    const rows: number = Math.floor(winHeight / componentHeight);
    const marginTop: number = (winHeight - (componentHeight * rows))/ (1+ rows);   

    
    console.log(`No. of rows = ${rows}`);
    console.log(`Window Height = ${winHeight}`);
    console.log(`margin = ${marginTop}`);

    console.log(`window height = ${Dimensions.get('window').height}`);
    console.log(`Layout Height = ${winHeight}`);
     

    const grow = (h: number, rate: number)=>{
        return h*(1 + (rate/10));
    }

    //setWidthArray(Array.map((index: number, value: number)=>(beers2[index].rating)));



    return(
        <View style = {styles.container}>
            <ImageBackground
                source = {require('../assets/images/backgrounds/wood.jpg')} 
                style = {styles.img}              
                //resizeMode = "cover"
                onLayout = {(evt)=>{
                    setWinHeight(evt.nativeEvent.layout.height);
                }}
            >
                <View style = {styles.boxContainer}>        
                    {
                        beers2.map((value, index)=>(
                            <Box2
                                key = {index}
                                numba = {index+1}
                                //title = {value}
                                //image = {beers[index].image}
                                multiplier = {beers2[index].rating}
                                marginTop = {marginTop}
                            />
                        ))
                    }
                </View>
            </ImageBackground>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    boxContainer:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    img:{
        resizeMode: 'cover',
        flex: 1, 
        justifyContent: 'center',
    },
});

export default Boxes2;