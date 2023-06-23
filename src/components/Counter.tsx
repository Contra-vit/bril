"use client"

import React, { useEffect, useState } from 'react';
import { socket } from "@/utils/websocket";
import { WebsocketEnum } from "@/utils/websocket.enum";

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
        socket.emit(WebsocketEnum.Update, { totalValue })
   }
   useEffect(  () => {
       socketInit()
   },[])
   const socketInit  = async () => {
        socket.on(WebsocketEnum.NewIncomingMessage,  (msg) => {
            setTotalValue(msg.message)
        })
   }
    return (
        <div className='text-center'>
            <div className='p-2'>
                <Button title="Update" handleClick={updateCounter}/>
            </div>
            <div className='p-2'>
                <TotalValue value={totalValue}/>
            </div>

        </div>
    );

}
function Button(props: ButtonProp) {

    return (
        <button onClick={props.handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            {props.title}
        </button>
    );

}
function TotalValue(props: TotalValueProp) {

    return (
        <span
            className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {props.value}
        </span>
    );

}
export default Counter;
