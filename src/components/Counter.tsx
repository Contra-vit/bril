"use client"

import React, {useEffect, useState} from 'react';
interface TotalValueProp {
    value: number;
}
interface ButtonProp {
    title: string;
    handleClick: any;
}
function Counter() {
    const [totalValue, setTotalValue] = useState(0)
   const updateCounter =  async () => {

   }
   const socketInit  = () => {

   }
    return (
        <div>
            <Button title="Update" handleClick={updateCounter}/>
            <TotalValue value={totalValue} />
        </div>
    );

}
function Button(props: ButtonProp) {

    return (
        <div></div>
    );

}
function TotalValue(props: TotalValueProp) {

    return (
        <div>
            {props.value}
        </div>
    );

}
export default Counter;
