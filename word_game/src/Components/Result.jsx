import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {ArrowLeftIcon } from '@chakra-ui/icons'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const Result = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonserver-her-mock5.herokuapp.com/word_game')
        .then((res)=> setData(res.data))
    },[])

    console.log(data,"Data   aaaa")
  return (
    <Box>
        <Box h={14} fontSize='19px' paddingTop="8px" fontWeight='700' color="white" marginBottom="10px"  bgGradient='linear(to-l, #7928CA, #FF0080)'>
            <NavLink to="/" > <ArrowLeftIcon/> Go To Homepage</NavLink>
        </Box>
        <Box fontSize='22px' marginBottom="20px">List of Players</Box>
        <TableContainer>
            <Table variant='striped' colorScheme='teal' width={'60%'} margin={"auto"}fontSize={16} border="1px solid black" >
                <Thead fontSize={80}>
                <Tr fontSize={20}>
                    <Th fontSize={15}>Name</Th>
                    <Th fontSize={15}>Level</Th>
                    <Th fontSize={15}>Score</Th>
                </Tr>
                </Thead>
                <Tbody>
                {
                    data?.map((el)=>(
                    <Tr key={el.id}>
                        <Td>{el.name}</Td>
                        <Td>{el.level}</Td>
                        <Td>{el.score}</Td>
    
                    </Tr>
                    ))
                }
                </Tbody>
            </Table>
        </TableContainer>
    </Box>
  )
}
