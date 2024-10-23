import React ,{useState,useEffeft, useEffect} from "react"
import { io } from "socket.io-client"
import { message } from "statuses"


export const SocketConnection = ()=>{

const socket =  io("http://localhost:5001")

const [api,setApi]= useState("")

useEffect(()=>{

socket.on("hello",(message)=>{
    setApi(message)
})

},[])

    return (

        <div>
          <h1>{api}</h1>
         
        </div>

    )
}