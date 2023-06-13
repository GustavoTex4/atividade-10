

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
      const salas = JSON.parse(window.localStorage.getItem('salas'))
      const sala = salas[query.id]
      for(let atributo in sala){
        setValue(atributo,sala[atributo])
      }
    }
  }, [query.id])

  function salvar(dados){
    const salas= JSON.parse(window.localStorage.getItem('salas')) || []
   salas.splice(query.id, 1, dados)
    window.localStorage.setItem('salas', JSON.stringify(salas))
    push('/salas')
  }
  return (
    <>
      <Pagina titulo='Salas'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control {...register('nome')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="capacidade">
            <Form.Label>Capacidade:</Form.Label>
            <Form.Control {...register('capacidade')}  type="text" />
            <Form.Group className="mb-3" controlId="tipo">
              <Form.Label>Tipo:</Form.Label>
              <Form.Control {...register('tipo')}  type="text" />
            </Form.Group>
          </Form.Group>
          <div className='text-center'>

          <Button variant="success" onClick={handleSubmit(salvar)}>
         < AiOutlineCheck className='me-1'/> Salvar
          </Button>
          <Link href={'/salas'} className='ms-2 btn btn-danger' ><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
          </div>

        </Form>
      </Pagina>
    </>
  )
}

export default form