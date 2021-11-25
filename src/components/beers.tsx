import React, {FC} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Beer from './beer';
import beers from './../assets/data/beersData';

interface Props{}

const Beers:FC<Props> = ({})=>{
    return(
        <View style = {styles.container}>
            <View style = {styles.beersContainer}>        
                {
                    beers.map((value, index)=>(
                        <Beer
                            key = {index}
                            title = {beers[index].name}
                            image = {beers[index].image}
                            multiplier = {beers[index].rating}
                        />
                    ))
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    beersContainer:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
});

export default Beers;