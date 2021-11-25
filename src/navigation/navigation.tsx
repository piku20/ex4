import React, {FC} from 'react';

import Beer from '../components/beer';
import Beers from '../components/beers';
import Boxes from '../components/boxes2';
import Boxes2 from '../components/boxes2';
import Boxes3 from '../components/boxes3';
import Calculation from '../roughWork/calculations';
import Calculation2 from '../roughWork/calculations2';
import Calculation3 from '../roughWork/calculations3';
import Calculation4 from '../roughWork/calculations4';
import Carousel from '../components/Carousel';
import Carousel2 from '../components/carousel2';
import DashboardScreen from '../screens/dashboard';
import Move1 from '../components/move1';
import Move2 from '../components/move2';
import Move3 from '../components/move3';
import { NavigationContainer } from '@react-navigation/native';
import RateScreen from '../screens/rate';
import Slider3 from '../components/slider3';
import Slider4 from '../components/slider4';
import Slider5 from '../components/slider5';
import Slider6 from '../components/slider6';
import {
    StyleSheet,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

interface Props{}

const Drawer = createDrawerNavigator();

const Navigation:FC<Props> = ({})=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName = "Boxes3"
            >
                <Drawer.Screen 
                    name = "Boxes3"
                    component = {Boxes3}
                />                
                <Drawer.Screen 
                    name = "Slider6"
                    component = {Slider6}
                />
                <Drawer.Screen 
                    name = "Dashboard"
                    component = {DashboardScreen}
                />
                <Drawer.Screen 
                    name = "One Beer"
                    component = {Beer}
                />
                <Drawer.Screen 
                    name = "Drawer"
                    component = {Beers}
                />
                <Drawer.Screen 
                    name = "User Rating"
                    component = {RateScreen}
                />                              
                <Drawer.Screen 
                    name = "Boxes"
                    component = {Boxes}
                />
                <Drawer.Screen 
                    name = "Carousel2"
                    component = {Carousel2}
                />
                <Drawer.Screen 
                    name = "Boxes2"
                    component = {Boxes2}
                />
                <Drawer.Screen 
                    name = "Calculation2"
                    component = {Calculation2}
                />
                <Drawer.Screen 
                    name = "Calculation3"
                    component = {Calculation3}
                />
                <Drawer.Screen 
                    name = "Calculation4"
                    component = {Calculation4}
                />
                <Drawer.Screen 
                    name = "Slider3"
                    component = {Slider3}
                />
                <Drawer.Screen 
                    name = "Slider4"
                    component = {Slider4}
                />
                <Drawer.Screen 
                    name = "Move1"
                    component = {Move1}
                />
                <Drawer.Screen 
                    name = "Move2"
                    component = {Move2}
                />
                <Drawer.Screen 
                    name = "Move3"
                    component = {Move3}
                />
                <Drawer.Screen 
                    name = "Slider5"
                    component = {Slider5}
                />                      
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default Navigation;