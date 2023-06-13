

import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'

const form = () => {
  const {push, query} = useRouter()
  const {register, handleSubmit, setValue} = useForm ()

  useEffect(()=> {
    if(query.id){
      const semestres = JSON.parse(window.localStorage.getItem('semestres'))
      const semestre = semestres[query.id]
      for(let atributo in semestre){
        setValue(atributo,semestre[atributo])
      }
    }
  }, [query.id])

  function salvar(dados){
    const semestres= JSON.parse(window.localStorage.getItem('semestres')) || []
    semestres.splice(query.id, 1, dados)
    window.localStorage.setItem('semestres', JSON.stringify(semestres))
    push('/semestres')
  }
  return (
    <>
      <Pagina titulo='Semestres'>
      <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control {...register('nome')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="data_inicio">
            <Form.Label>Data de início:</Form.Label>
            <Form.Control {...register('data_inicio')}  type="text" />
            <Form.Group className="mb-3" controlId="data_fim">
              <Form.Label>Data do fim:</Form.Label>
              <Form.Control {...register('data_fim')}  type="text" />
            </Form.Group>
          </Form.Group>
          <div className='text-center'>

          <Button variant="success" onClick={handleSubmit(salvar)}>
         < AiOutlineCheck className='me-1'/> Salvar
          </Button>
          <Link href={'/semestres'} className='ms-2 btn btn-danger' ><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
          </div>

        </Form>
      </Pagina>
    </>
  )
}

export default form