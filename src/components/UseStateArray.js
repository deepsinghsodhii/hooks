import React from 'react'
import "../css/UseStateArray.css"

const UseStateArray = () => {
    const bioData =[
         {id:0,myname : " Deep" ,Marks  :98},
         {id:1,myname : " Priti" ,Marks  :75},
         {id:1,myname : " Manmohan" ,Marks  :73},
         {id:1,myname : " Salim" ,Marks  :66},
         {id:1,myname : " Anshu" ,Marks  :79},
         {id:1,myname : " Anshu" ,Marks  :74},
         {id:1,myname : "Deepika" ,Marks  :85},
         {id:1,myname : "faizan" ,Marks  :95},

    ]
    console.log(bioData)
    const [myArray, setmyArray] = React.useState(bioData);  
    const clearArray=()=>{
        // bioData=[];
        setmyArray([]);
    }
    return (
        <>
            {/* <h4 className='h4style'>usestate array</h4> */}
            {
                myArray.map((curElm)=>{
                        return  <h4 className='h4style'> key={curElm.id} Name:{curElm.myname} Marks:{curElm.Marks}</h4>
                })
            }
                 <button className='btn ' onClick={clearArray}> clear</button>
        </>
    )
}

export default UseStateArray
