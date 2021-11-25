import React, {FC, useEffect, useState} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';

interface Props{}

const Calculation2:FC<Props> = ({})=>{   
    
    // A number array from 1 to 50
    const a:number[] = Array.from({length:50}).map((value=0, index) => value = index+1);
    //Sort array a in descending order
    const b: number[] = [...a].sort((a)=>a);

    //n is the number of items needed to be in an array
    let n:number = 0;
    let targetSum = 0;
    let requiredSum = 500;

    //Step 1 : Find number of slices
    const findNumberOfSlice = (arrayX: number[], requiredSum: number) => {

        var tempSum = 0;
        var n=0;

        for(var i:number = 0; i<arrayX.length; i++){
            tempSum += arrayX[i];
            if(tempSum <= requiredSum){
                n++;
            }
        }
        return n;
    }

    const n1:number = findNumberOfSlice(b, requiredSum)
    
    //Step2: Write Array1. Array1 fills in Wall 1
    const sliceArray = (array: number[], numberOfItems: number) => {
        return array.slice(0, numberOfItems);
    };

    const array1: number[] = sliceArray(b, n1);

    //Step 3: Remaining of Array1
    const remainingArray = (array: number[], numberOfItems: number)=>{
        return array.slice(numberOfItems, array.length)
    }

    const b1: number[] = remainingArray(b, n1);

    //Step4: Take b1 as the new array and repeat all the steps from 1 to 3 until no items remain

    const n2:number = findNumberOfSlice(b1, requiredSum);
    const array2: number[] = sliceArray(b1, n2);
    const b2: number[] = remainingArray(b1, n2);
    
    //Step 5: Take b2 as the new array

    const n3:number = findNumberOfSlice(b2, requiredSum);
    const array3: number[] = sliceArray(b2, n3);
    const b3: number[] = remainingArray(b2, n3);

    //Step 6: Take b3 as the new array

    const n4:number = findNumberOfSlice(b3, requiredSum);
    const array4: number[] = sliceArray(b3, n4);
    const b4: number[] = remainingArray(b3, n4);

    //If array's sum is less than target sum, Stop

    const n5:number = findNumberOfSlice(b4, requiredSum);
    const array5: number[] = sliceArray(b4, n5);
    const b5: number[] = remainingArray(b4, n5);



    
    
    //Automation

    const createVariables = () => {
        
        
    };



    
    
    return(
        <ScrollView>
            <Text>Original Array: {a}</Text>
            <Text>Sorted Array: {b}</Text>
            <Text>First Slice number n1: {n1}</Text>
            <Text>Array1: {array1}</Text>
            <Text>Remaining Array B1: {b1}</Text>
            <Text></Text>
            <Text>Second Slice number n2: {n2}</Text>
            <Text>Array2: {array2}</Text>
            <Text>Remaining Array B2: {b2}</Text> 
            <Text></Text>
            <Text>Third Slice number n3: {n3}</Text>
            <Text>Array3: {array3}</Text>
            <Text>Remaining Array B3: {b3}</Text>
            <Text></Text>
            <Text>Fourth Slice number n4: {n4}</Text>
            <Text>Array4: {array4}</Text>
            <Text>Remaining Array B4: {b4}</Text>
            <Text></Text>
            <Text>Fourth Slice number n5: {n5}</Text>
            <Text>Array5: {array5}</Text>
            <Text>Remaining Array B5: {b5}</Text>
            <Text></Text>
            
        </ScrollView>    
    );
};

const styles = StyleSheet.create({});

export default Calculation2;