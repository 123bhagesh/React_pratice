import React from 'react'

const Debounceing = () => {
    let count=0
    let args;
    const getData=(args)=>{
        console.log("API call...")
        fetch(`https://jsonserver-her-mock5.herokuapp.com/userdata?q=${args}`)
        .then((res)=> res.json())
        .then((res)=> console.log(res, count++))
    }

    const debouncr= (fn,delay)=>{
        let timer;
        return function(e){
            // console.log(e.target.value)
        args = e.target.value

        clearTimeout(timer)
        timer = setTimeout(()=>{
          getData(args)          
        },delay)
        
       }
    }
    const handelDebou= debouncr(getData,2000)


  return (
    <div>
        <h1>Debouncing</h1>
        <input type="text" onKeyUp={handelDebou} />
      
    </div>
  )

}

export default Debounceing;