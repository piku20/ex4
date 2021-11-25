import { useEffect, useRef } from "react";

const useInterval = (
    callback: ()=>void,
    delay: number | null,
)=> {
    const savedCallback = useRef<()=>void|null>();

    useEffect(()=>{
        const tick = ()=>{
            if(typeof savedCallback?.current !== 'undefined'){
                savedCallback?.current();
            }
        }
        if(delay !== null){
            const id = setInterval(tick, delay);
            return ()=> clearInterval(id);
        }
    }, [delay]);
};

export default useInterval;