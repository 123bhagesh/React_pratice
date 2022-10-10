import { Box, Button, Flex, Input ,Text, useToast} from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { json, useNavigate } from 'react-router-dom';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import "./index.css";



const Word = () => {
    
    let levelTime = JSON.parse(localStorage.getItem("wordLevel"))
    const [input, setInput] = useState("");
    const [layout, setLayout] = useState("default");
    const keyboard = useRef();
    const [timer,setTimer] = useState(levelTime)
    const [word,setWord] =useState('')
    const [sum, setSum ] = useState(0)
    const toast = useToast()
    const navigate = useNavigate()
    

    const getWord=()=>{
      fetch('https://api.api-ninjas.com/v1/randomword')
      .then((res)=> res.json())
      .then((res)=> setWord(res.word))
    }

    useEffect(()=>{
      getWord()
    },[])

    const handelNext =()=>{
      getWord()
      setTimer(levelTime)
      if(word==input){
        toast({
          title: `Word Is Correct`,
          status: "success",
          duration: 2000,
          isClosable: true,
          position:"top"
      }) 
      setSum(sum + word.length)
      }
      else{
        setSum(sum - word.length)
      }

    }

    useEffect(()=>{
    let id = setInterval(()=>{
      if(timer==0){
        clearInterval(id)
          if(word==input){
            toast({
              title: `Word Is Correct`,
              status: "success",
              duration: 2000,
              isClosable: true,
              position:"top"
          }) 
            setSum(sum + word.length)
          }
          else{
            setSum(sum - word.length)
          }
        setInput("")
        handelNext()
      }
      else{
        setTimer(timer-1)
        
      }

    },1000)
    return ()=>{
      clearInterval(id)

    }
  },[timer,0])

    // -----------------Keyboard Functions---------->
    const onChange = input => {
      setInput(input);
      console.log("Input changed", input);
    };
  
    const handleShift = () => {
      const newLayoutName = layout === "default" ? "shift" : "default";
      setLayout(newLayoutName);
    };
  
    const onKeyPress = button => {
      console.log("Button pressed", button);
      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (button === "{shift}" || button === "{lock}") handleShift();
    };
  
    const onChangeInput = event => {
      const input = event.target.value;
      setInput(input);
      keyboard.current.setInput(input);
    };
    let name = JSON.parse(localStorage.getItem('wordName'))
    let level = JSON.parse(localStorage.getItem("wordLevel11"))
    const handleEndGame=()=>{
      let payload ={
        name:name,
        level:level,
        score:sum
      }
      // console.log(payload)
      axios.post('https://jsonserver-her-mock5.herokuapp.com/word_game',payload)
      .then(()=> window.location.reload())
      navigate('/result')
    }


  return (
    <>
    <Box fontSize={24} fontWeight={700}>
      <Flex justifyContent={'center'} gap={3}>
      <Text>WORD : </Text>
      <Text color={"red"}>{word}</Text>
      </Flex>
      
      <Text> Time: {timer}</Text>
      <Text>Score: {sum}</Text>
      
    </Box>
    <Box m="auto" justifyItems='center' >
        <Input type="text"
            value={input}
            placeholder={"Tap on the virtual keyboard to start"}
            onChange={onChangeInput}
            w="80%"
            fontSize={"22px"}
        />
    
        <Keyboard
            keyboardRef={r => (keyboard.current = r)}
            layoutName={layout}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    </Box>

    <Flex justifyContent={"center"} gap="20px">
      <Button colorScheme='green' size='lg' onClick={handelNext}>Next Word</Button>
      <Button colorScheme='red' size='lg' onClick={handleEndGame}>End Game</Button>
    </Flex>
    
    </>
  )
}

export default Word
