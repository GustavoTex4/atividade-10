import Pagina from '@/componentes/Pagina'
import alunoValidator from '@/validators/aluno.Validator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'
import { mask } from 'remask'


const form = () => {
  const {push} = useRouter()
  const {register, handleSubmit,setValue,formState:{errors}} = useForm ()
  function salvar(dados){
    const alunos= JSON.parse(window.localStorage.getItem('alunos')) || []
    alunos.push(dados)
    window.localStorage.setItem('alunos', JSON.stringify(alunos))
    push('/alunos')
  }
  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name , mask(value,mascara))
  }


  return (
    <>
      <Pagina titulo='Alunos'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control isInvalid={true} {...register('nome',alunoValidator.nome)} type="text" />
            {
          errors.nome &&
          <small>{errors.nome.message}</small>
        }
          </Form.Group>
          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>CPF:</Form.Label>
            <Form.Control isInvalid={true} mask="999.999.999-99"
            {...register('cpf', alunoValidator.cpf)}  type="text" 
            onChange={handleChange }/>
            {
          errors.cpf &&
          <small>{errors.cpf.message}</small>
        }
            </Form.Group>
            <Form.Group className="mb-3" controlId="matricula">
              <Form.Label>Matícula:</Form.Label>
              <Form.Control isInvalid={true} mask="99999999999"
               {...register('matricula',alunoValidator.matricula)}  type="text"
               onChange={handleChange } />
              {
          errors.matricula &&
          <small>{errors.matricula.message}</small>
        }
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control isInvalid={true} {...register('email',alunoValidator.email)}  type="text" />
              {
          errors.email &&
          <small>{errors.email.message}</small>
        }
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefone">
              <Form.Label>Telefone:</Form.Label>
              <Form.Control isInvalid={true} mask="(99) 9 9999-9999"
              {...register('telefone',alunoValidator.telefone)}  type="text"
              onChange={handleChange } />
              {
          errors.telefone &&
          <small>{errors.telefone.message}</small>
        }
            </Form.Group>
            <Form.Group className="mb-3" controlId="cep">
              <Form.Label>CEP:</Form.Label>
              <Form.Control isInvalid={true} mask="99.999-999"
               {...register('cep',alunoValidator.cep)}  type="text"
               onChange={handleChange }/>
              {
          errors.cep &&
          <small>{errors.cep.message}</small>
        }
            </Form.Group>
            <Form.Group className="mb-3" controlId="logradouro">
              <Form.Label>Logradouro:</Form.Label>
              <Form.Control isInvalid={true} {...register('logradouro',alunoValidator.logradouro)}  type="text" />
              {
          errors.logradouro &&
          <small>{errors.logradouro.message}</small>
        }
            </Form.Group>
            <Form.Group className="mb-3" controlId="complemento">
              <Form.Label>Complemento:</Form.Label>
              <Form.Control isInvalid={true} {...register('complemento',alunoValidator.complemento)}  type="text" />
              {
          errors.complemento &&
          <small>{errors.complemento.message}</small>
        }
            </Form.Group>
            <Form.Group className="mb-3" controlId="numero">
              <Form.Label>Número:</Form.Label>
              <Form.Control isInvalid={true} {...register('numero',alunoValidator.numero)}  type="text" />
              {
          errors.numero &&
          <small>{errors.numero.message}</small>
        }
            </Form.Group>
            <Form.Group className="mb-3" controlId="bairro">
              <Form.Label>Bairro:</Form.Label>
              <Form.Control isInvalid={true} {...register('bairro',alunoValidator.bairro)}  type="text" />
              {
          errors.bairro &&
          <small>{errors.bairro.message}</small>
        }
            </Form.Group>
      
          <div className='text-center'>

          <Button variant="success" onClick={handleSubmit(salvar)}>
         < AiOutlineCheck className='me-1'/> Salvar
          </Button>
          <Link href={'/alunos'} className='ms-2 btn btn-danger' ><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
          </div>

        </Form>
      </Pagina>
    </>
  )
}

export default form