import React, {FC, useEffect, useState} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';

interface Props{}

const Calculation4:FC<Props> = ({})=>{
    
    const [a, setA] = useState<any>([]);
    const [b, setB] = useState<any>([]);
    const [n, setN] = useState<any>([]);
    
    
    //A number array from 1 to 50
    const a50:number[] = Array.from({length:50}).map((value, index) => value=index+1);
    //Sort array a in descending order
    const b50: number[] = [...a50].sort((a)=>a);
   

    //function to find  number of slices
    const findNumberOfSlice = (array: any[], requiredSum: number) => {

        var tempSum = 0;
        var n=0;

        for(var i: number = 0; i<array.length; i++){
            tempSum += array[i];
            if(tempSum <= requiredSum){
                n++;
            }
        }
        return n;
    }

    //Function to get wall items
    const sliceArray = (array: any[], numberOfItems: number) => {
        return array.slice(0,numberOfItems);
    };

    //Remanent Array
    const remainingArray = (array: any[], numberOfItems: number) => {
        return array.slice(numberOfItems, array.length);
    }

    //Here starts Automation
    
    const magicFn = (array: any[], requiredSum:number) => {       

        setB([...b,array]);       
        
        for(var i=0; i<3; i++){
            setN([...n,findNumberOfSlice(b, requiredSum)]);
            setA([...a, sliceArray(b[i], n[i])]);
            setB([...b,remainingArray(b[i], n[i])]);
            
        }
    };

    const m = magicFn(b50, 500);

    useEffect(()=>{
        m;
    },[]);

    console.log(a);
    
    return(
        <ScrollView>
                                               
        </ScrollView>    
    );
};

const styles = StyleSheet.create({});

export default Calculation4;