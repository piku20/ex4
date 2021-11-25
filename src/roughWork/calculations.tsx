import React, {FC, useEffect, useState} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';

interface Props{}

const Calculation:FC<Props> = ({})=>{   
    
    
    //Original Array
    const a:number[] = Array.from({length:50}).map((value=0, index)=> value=index+1);
    //Sort array in decreasing order
    const sortedA = [...a].sort((a)=>a);
    //This is the number count of items in array whose sum = 100
    var n: number = 0;
    var tempSum = 0;
    //Sum has to be equal to 50

    //Finds out number of array items in that sum


    const a1: number[] = [...sortedA].slice(0, n);
    const remainingArray2:number[] = [...sortedA].slice(n, [...sortedA].length+1);

    
    //This Function finds out length of array slice size
    const findNumberOfSlice = (arrayX: number[], requiredSum:number ) => {
        
        var tempSum = 0;
        var n = 0;
        
        for(var i=0; i<=arrayX.length; i++){
            tempSum += sortedA[i];
            if(tempSum<=requiredSum){
                n++;
            }
        }
        console.log(n);
        return n;
    }

    const findNextIndex = (arrayX: number[], requiredSum:number, startIndex: number ) => {
        
        var tempSum = 0;
        var n = 0;
        
        for(var i=0; i<=arrayX.length; i++){
            if (i >= startIndex) {
                tempSum += sortedA[i];
                if(tempSum<=requiredSum){
                    n++;
                }
            } else if(tempSum<=requiredSum){
                n++;
            }
        }
        console.log(n);
        return n;
    }

    //This function returns the needed slice
    const slicedArray = (array:number[], numberOfItems: number)=>{
        return array.slice(0,numberOfItems);
    };

    //This function returns the remaining array after slicing
    const remainingArray = (array: number[], numberOfItems: number) => {
        return array.slice(numberOfItems, array.length+1);
    }


    let wallLength = 1000;

    console.log("start of wall 1:");
    console.log("0")
    console.log("end of wall 1:");
    let wall1Index = findNextIndex(sortedA, wallLength, 0);
    console.log("start of wall 2");
    console.log(wall1Index);
    console.log("end of wall 2:");
    let wall2Index = findNextIndex(sortedA, wallLength, wall1Index)
    console.log("start of wall 3");
    console.log(wall2Index);
    console.log("end of wall 3:");
    let wall3Index = findNextIndex(sortedA, wallLength, wall2Index)
    console.log("start of wall 4");
    console.log(wall3Index);
    console.log("end of wall 4:");
    let wall4Index = findNextIndex(sortedA, wallLength, wall3Index)
    console.log("start of wall 5");
    console.log(wall4Index);
    console.log("end of wall 5:");
    let wall5Index = findNextIndex(sortedA, wallLength, wall4Index)
    console.log("start of wall 6");
    console.log(wall5Index);
    console.log("start of wall 6:");
    let wall6Index = findNextIndex(sortedA, wallLength, wall5Index)

    
    let numberThatFit = findNumberOfSlice(sortedA, 100)
    return(
        <ScrollView>
            <Text>Original Array: {a}</Text>
            <Text>Sorted Array: {sortedA}</Text>
            <Text>Number of 1st array items: {numberThatFit}</Text>
            <Text>Array 1: {slicedArray(sortedA, numberThatFit)}</Text>
            <Text>Remaining Array1: {remainingArray(sortedA, numberThatFit)}</Text>
            <Text>Array 2: {a1}</Text>
            <Text>Remaining Array2: {remainingArray2}</Text>
        </ScrollView>    
    );
};

const styles = StyleSheet.create({});

export default Calculation;