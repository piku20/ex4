import { Dimensions } from "react-native";

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const numberOfBeers = (w:number, h: number) => {
    var n = (winWidth * winHeight) / (w*h);
    return n;
};

export default numberOfBeers;