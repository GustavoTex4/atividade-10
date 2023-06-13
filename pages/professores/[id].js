
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
      const professores = JSON.parse(window.localStorage.getItem('professores'))
      const professor = professores[query.id]
      for(let atributo in professor){
        setValue(atributo,professor[atributo])
      }
    }
  }, [query.id])

  function salvar(dados){
    const professores = JSON.parse(window.localStorage.getItem('professores')) || []
    professores.splice(query.id, 1, dados)
    window.localStorage.setItem('professores', JSON.stringify(professores))
    push('/professores')
  }
  return (
    <>
      <Pagina titulo='Professores'>
      <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control {...register('nome')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>CPF:</Form.Label>
            <Form.Control {...register('cpf')}  type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="matricula">
              <Form.Label>Matícula:</Form.Label>
              <Form.Control {...register('matricula')}  type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="salario">
              <Form.Label>Salario:</Form.Label>
              <Form.Control {...register('salario')}  type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control {...register('email')}  type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefone">
              <Form.Label>Telefone:</Form.Label>
              <Form.Control {...register('telefone')}  type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cep">
              <Form.Label>CEP:</Form.Label>
              <Form.Control {...register('cep')}  type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="logradouro">
              <Form.Label>Logradouro:</Form.Label>
              <Form.Control {...register('logradouro')}  type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="complemento">
              <Form.Label>Complemento:</Form.Label>
              <Form.Control {...register('complemento')}  type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="numero">
              <Form.Label>Número:</Form.Label>
              <Form.Control {...register('numero')}  type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bairro">
              <Form.Label>Bairro:</Form.Label>
              <Form.Control {...register('bairro')}  type="text" />
            </Form.Group>
        
          <div className='text-center'>

          <Button variant="success" onClick={handleSubmit(salvar)}>
         < AiOutlineCheck className='me-1'/> Salvar
          </Button>
          <Link href={'/cursos'} className='ms-2 btn btn-danger' ><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
          </div>

        </Form>
      </Pagina>
    </>
  )
}

export default form