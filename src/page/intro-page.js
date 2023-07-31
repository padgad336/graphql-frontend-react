
import { Box } from '@mui/material'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import {useQuery,gql,useMutation} from '@apollo/client'
import { useState } from 'react'
// import MenuIcon from "@mui/icons-material/Menu";
export const IntroPage = () => {
  const [name,setName]=useState('')

  const books= gql`query Query {
    books {
      name
      author {
        firstname
        lastname
        penedname
      }
    }
  }
  `
  const createBook=gql`
  mutation CreateBook($record: CreateOneBookInput!) {
    createBook(record: $record) {
      recordId
    }
  }
  `
  const {data,error,refetch}=useQuery(books)
  const [setBook]=useMutation(createBook)
  console.log(data?.books?.map((row)=>(row?.name)));

  const handleAddBook=async(e)=>{
    e.preventDefault()
    await setBook({
      variables: {
        
          record: {
            name: name
          }
        
      }
    })
    setName('')
    refetch()
  }
  return (
    <Box>
      {data?.books?.map((row)=>{
        return(
          <>
         
          <h6>
            {`name: ${row?.name}`}
          </h6>
          <h6>
            {`ผู้เขียน: ${row?.author?.firstname}`}
          </h6>
          </>
        )
      })}


      <form onSubmit={handleAddBook}>
      <label for="lname">name:</label>
  <input 
  type="text" 
  id="lname" 
  name="lname"
  onChange={(e)=>{
    setName(e.target.value)
    }} 
  />
  <button type='submit'>
เพิ่ม
  </button>
      </form>

    </Box>

  )
}
