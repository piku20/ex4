import {
    Dimensions,
    Image,
    Platform,
    ScrollView,
    Slider,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {FC, useState} from 'react';

import CustomSlider from '../components/slider2';
import Rating from '../components/rating';
import RatingIcon from '../components/ratingIcon';

//import Slider from 'react-native-simple-slider';

//import Slider from 'react-native-slider';


interface Props{}

const RateScreen:FC<Props> = ({})=>{
    
    const [sliderValue, setSliderValue] = useState<number>(5);

    const onSlide = (x:number)=>{
        setSliderValue(x);        
    }
    
    return(
        <ScrollView style= {styles.container}>
            <View style = {styles.innerContainer}>

                <View style = {styles.beerContainer}>
                    <Image
                        style = {styles.img}
                        source = {require('../assets/images/i1.png')}
                    />
                    <Text style = {styles.title}>BATMAN BEER</Text>
                </View>
                <View style = {styles.userInfoContainer}>
                    {//<View style = {styles.avatar}></View>}
}
                    <TouchableOpacity style={styles.avatarBtn}>
                        <Image 
                            style = {styles.avatar}
                            source = {require('../assets/images/users/u5.png')}
                        />
                        <View>
                            <Text>Bruce Wayne</Text>
                            <Text>Favorite Beer: Corona</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.ratingContainer}>

                    <Text style ={styles.heading1}>Rate this Beer !</Text>
                    <Text>You've rated: {sliderValue}/10</Text>
                    
                    { (Platform.OS === 'android' || Platform.OS === 'ios' ||
                        Platform.OS == 'macos' || Platform.OS === 'windows') &&
                    /*<Slider
                        minimumValue = {0}
                        maximumValue = {10}
                        value = {sliderValue}
                        step = {1}
                        style = {styles.slide}
                        onValueChange = {onSlide}
                    />
                    */                    
                    <Slider
                        minimumValue = {0}
                        maximumValue = {10}
                        value = {sliderValue}
                        step = {1}
                        style = {styles.slide}
                        onValueChange = {onSlide}
                        thumbImage = {require('../assets/images/b4.png')}
                    />
                    
                   
                    }

                    {Platform.OS === 'web' &&
                        <Rating 
                            value = {sliderValue}
                            maximumRating = {10}
                            color = "rgba(242,142,28,1.00)"
                            size = {50}
                            onRate = {onSlide}
                        />
                    }

                    
                </View>

                <View style = {styles.details}>
                    <View style = {styles.ingredients}>
                        <Text>Wheat: 10%</Text>
                        <Text>Marley: 10%</Text>
                        <Text>Hop: 10%</Text>
                    </View>    
                </View>                
            </View>
        </ScrollView>
    );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flex: 1,
        ...Platform.select({
          ios: {
            width: "100%"
          },
          android: {
            width: "100%"
          },
          web: {
            width: "80%"
          }
        })
      },
    innerContainer:{
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    beerContainer:{
        flex: 1,
        width: width,
        height: height * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center'
    },
    img:{
        height: '80%',
         resizeMode: 'contain',
    },
    userInfoContainer:{
        borderWidth: 3,
        borderRadius: 3,
        //flexDirection: 'row',
        //alignContent: 'space-around',
        flex: 1,
    },
    avatarBtn:{
        borderRadius: 50,
        flexDirection: 'row',
    },
    avatar:{        
        height: 60,
        width: 60,
        //resizeMode: 'contain',
        borderRadius: 50,
    },
    ratingContainer:{
        alignItems: 'center',
    },
    heading1: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#b95860',
    },
    slide:{
        color: 'blue',
        width: '95%',
        marginVertical: 10,
        resizeMode: 'contain',
    },
    details:{
        justifyContent: 'center',
    },
    ingredients:{
        justifyContent: 'center',
    },
});

export default RateScreen;