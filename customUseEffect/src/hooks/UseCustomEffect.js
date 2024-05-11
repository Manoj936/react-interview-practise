import React, { useRef } from 'react'

export default function UseCustomEffect(effect ,  dependencies) {
const initialDeeps = useRef([]);
const isInitial = useRef(true);

if(isInitial.current){
    isInitial.current = false;
    console.log(0)
    effect()
    return;
}

const isDependecyChanged = dependencies ? JSON.stringify(dependencies) !== JSON.stringify(initialDeeps.current)  : true


if(isDependecyChanged){

    console.log(1)
    effect();
    initialDeeps.current = dependencies || []
}


}
