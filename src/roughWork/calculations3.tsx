import React, {FC, useEffect, useState} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';

interface Props{}

const Calculation3:FC<Props> = ({})=>{
    
    const [arrayA, setArrayA] = useState([]);
    const [arrayB, setArrayB] = useState([]);
    const [arrayN, setArrayN] = useState([]);
    
    
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
    const sliceArray = (array: number[], numberOfItems: number) => {
        return array.slice(0,numberOfItems);
    };

    //Remanent Array
    const remainingArray = (array: number[], numberOfItems: number) => {
        return array.slice(numberOfItems, array.length);
    }

    //Here starts Automation

    let a:any = new Set();
    let n: any = new Set();
    let b:any = new Set();

    const magicFn = (array: number[], requiredSum:number) => {       

       b.add(array);       
        
        for(var i=0; i<3; i++){
            n.add(findNumberOfSlice(b[i], requiredSum));
            a.add(sliceArray(b[i], n[i]));
            b.add(remainingArray(b[i], n[i]));
        }
    };

    const m = magicFn(b50, 500);

    useEffect(()=>{
        m;
    },[]);

    console.log(a);
    
    return(
        <ScrollView>
            <Text>Array1 = {a[0]}</Text>                                   
        </ScrollView>    
    );
};

const styles = StyleSheet.create({});

export default Calculation3;