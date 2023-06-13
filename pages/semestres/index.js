

import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'

const index = () => {
  const [semestres, setSemestres] = useState([])

  useEffect(() => {
    setSemestres(getAll)
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('semestres')) || []
  }

  function excluir(id){
    if(confirm('Deseja realmente excluir ?')){
      const semestres = getAll()
     semestres.splice(id,1)
      window.localStorage.setItem('semestres', JSON.stringify(semestres))
      setSemestres(semestres)
    }
  }
  return (
    <>
        <Pagina titulo='Semestres'>
        <Link href={'/semestres/form'} className='btn btn-primary mb-2' >Novo</Link>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Data de início</th>
          <th>Data do fim</th>
        </tr>
      </thead>
      <tbody> 
        {semestres.map((item, i) =>(
          <tr key={i}>
          <td >
            <Link href={'/semestres/'+i}><AiFillEdit className='me-2' /></Link>
            
            <AiOutlineDelete onClick={()=>excluir(i)}/>
            </td>
          <td>{item.nome}</td>
          <td>{item.data_inicio}</td>
          <td>{item.data_fim}</td>
        </tr>
          ))}
        
      </tbody>
    </Table>
        </Pagina>
    </>
  )
}

export default index