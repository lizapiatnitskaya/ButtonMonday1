import React from 'react';
import './App.css';
import {Button} from './components/Button'

function App() {
 /*    const myFirstsubscriber =()=>{
         console.log('Hello! I am Ivan!');
    } */

    const onClickHandler=(name:string)=>{
        console.log(name);  
    }

    const ButtonFirst=(subscriber:string,age:number,adress:string)=>{
        console.log(subscriber,age,adress);
    }

    return(
        <div>
        <button onClick={()=>onClickHandler("Ivan")}>MyYoutubeChannel</button>

        <Button name={'MySecondChannel'} callBack={()=>ButtonFirst("Im Igor!",21,"Minsk")}/>
        </div>
    )
   
}

export default App;









