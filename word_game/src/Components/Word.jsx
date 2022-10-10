import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import "./index.css";



const Word = () => {

    const [input, setInput] = useState("");
    const [layout, setLayout] = useState("default");
    const keyboard = useRef();

  
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
  return (
    <>
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
      <Button colorScheme='green' size='lg'>Next Word</Button>
      <Button colorScheme='red' size='lg'>End Game</Button>
    </Flex>
    
    </>
  )
}

export default Word
