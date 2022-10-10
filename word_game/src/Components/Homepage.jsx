import React, { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select,
    useToast,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const [name,setName] = useState('')
    const [level,setLevel] = useState('')
    let navigate = useNavigate()
    const toast = useToast()

    const handleAdd=(e)=>{
        e.preventDefault()
        console.log(name,level)
        if(name.length > 0 && level.length==2){
        localStorage.setItem('wordName',JSON.stringify(name))
        localStorage.setItem('wordLevel',JSON.stringify(level))
        if(level==15){
            let level11 = "High Level"
            localStorage.setItem('wordLevel11',JSON.stringify(level11))
        }
        else if(level==30){
            let level11 = "Medium Level"
            localStorage.setItem('wordLevel11',JSON.stringify(level11))
        }
        else if(level==40){
            let level11 = "Low Level"
            localStorage.setItem('wordLevel11',JSON.stringify(level11))
        }
            toast({
                title: `Adding Sucess`,
                status: "success",
                duration: 2000,
                isClosable: true,
                position:"top"
            })  
            navigate('/word')
        }
        else{       
            toast({
                title: 'An error occurred.',
                description: 'Fill Detail Correct.',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position:"top"
            })
        }
    }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Masai Word Game</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name" >
              <FormLabel>Enter Name</FormLabel>
              <Input type="text" onChange={(e)=> setName(e.target.value)}/>
            </FormControl>
            <Select placeholder='Select Level' onChange={(e)=>setLevel(e.target.value)}>
                <option value='15'>High Level</option>
                <option value='30'>Medium Level</option>
                <option value='40'>Low Level</option>
            </Select>
            <Stack spacing={10}>

              <Button
              onClick={handleAdd}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  
  )
}

export default Homepage
