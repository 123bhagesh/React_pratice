import React from 'react'

const Throttling = () => {
    let count=1
    let getData=()=>{
        console.log("Throttling",count++)
    }
    let throttle=(getData,d)=>{
        // let time
        return function(...args){
        //    clearInterval(time)
           setTimeout(()=>{
                getData()                
           },d)
        }
        ///// console.log("Bhagesh",count++)
    }

    const handleThrottling= throttle(getData,5000)
  return (
    <div>
        <h1>Throttling</h1>
        <input type="text" onInput={handleThrottling} />

        <h4></h4>

      
    </div>
  )
}

export default Throttling;
