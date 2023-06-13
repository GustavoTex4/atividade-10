

import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'
import salaValidator from '@/validators/sala.Validator'

const form = () => {
  const {push} = useRouter()
  const {register, handleSubmit,formState:{errors}} = useForm ()
  function salvar(dados){
    const salas = JSON.parse(window.localStorage.getItem('salas')) || []
    salas.push(dados)
    window.localStorage.setItem('salas', JSON.stringify(salas))
    push('/salas')
  }
  return (
    <>
      <Pagina titulo='Salas'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control isInvalid={true} {...register('nome',salaValidator.nome)} type="text" />
            {
          errors.nome &&
          <small>{errors.nome.message}</small>
        }

          </Form.Group>
          <Form.Group className="mb-3" controlId="capacidade">
            <Form.Label>Capacidade:</Form.Label>
            <Form.Control isInvalid={true} {...register('capacidade',salaValidator.capacidade)}  type="text" />
            {
          errors.capacidade &&
          <small>{errors.capacidade.message}</small>
        }
            <Form.Group className="mb-3" controlId="tipo">
              <Form.Label>Tipo:</Form.Label>
              <Form.Control isInvalid={true} {...register('tipo',salaValidator.tipo)}  type="text" />
              {
          errors.tipo &&
          <small>{errors.tipo.message}</small>
        }
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