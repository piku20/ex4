import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, {FC, useState} from "react";

import Box3 from "./box3";
import Carousel from 'react-native-snap-carousel';

interface Props{};

const Boxes3:FC<Props> = ({}) => {
const array1: any[][] = [[1,2,3], [4,5,6,7], [8,9], [10, 11,12,13,14] ];
//const array1: any[] = [1,2,3,4];



return(
    <View style={styles.container}>
        <View style={styles.wall}>
            {/*
                array1.map((value, index)=>(
                    value.map((value2, index2)=>(
                        <Box3
                            text={value2}
                        />
                    ))
                ))
                    */}

            <FlatList
                horizontal = {true}
                style={styles.flats}
                data={array1}
                renderItem = {({item}) =>(
                    <View style={styles.wood}>
                        {                            
                            item.map((value, index)=>(
                                //value.map((value2, index2) => (
                                    <Box3
                                        text={value}
                                    />
                                //))
                            ))
                        }
                    </View>
                )}
            />
{/*
            <Carousel
                //horizontal = {true}
                //style={styles.flats}
                data={array1}
                renderItem = {({item}) =>(
                    <View style={styles.wood}>
                        {                            
                            item.map((value, index)=>(
                                //value.map((value2, index2) => (
                                    <Box3
                                        text={value}
                                    />
                                //))
                            ))
                        }
                    </View>
                )}
            />
                    */}
            
        </View>
    </View>
);

};

const styles = StyleSheet.create({
    container:{
        flex:1,        
    },
    wall:{
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    flats:{
        backgroundColor: 'blue',
    },
    wood:{
        backgroundColor: 'brown',
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        flexDirection:'row',
        flexWrap: 'wrap',
    },
});

export default Boxes3;