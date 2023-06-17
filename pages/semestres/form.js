import { mask } from 'remask'
import Pagina from '@/componentes/Pagina'
import semestreValidator from '@/validators/semestre.Validator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'

const form = () => {
  const {push} = useRouter()
  const {register, handleSubmit,setValue,formState:{errors}} = useForm ()
  function salvar(dados){
    const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
    semestres.push(dados)
    window.localStorage.setItem('semestres', JSON.stringify(semestres))
    push('/semestres')
  }
  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name , mask(value,mascara))
  }
  return (
    <>
      <Pagina titulo='Semestres'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control isInvalid={true} {...register('nome',semestreValidator.nome)} type="text" />
            {
          errors.nome &&
          <small>{errors.nome.message}</small>
        }
          </Form.Group>
          <Form.Group className="mb-3" controlId="data_inicio">
            <Form.Label>Data de início:</Form.Label>
            <Form.Control isInvalid={true} mask="99/99/9999"
             {...register('data_inicio',semestreValidator.data_inicio)}  type="text"
             onChange={handleChange } />
            {
          errors.data_inicio &&
          <small>{errors.data_inicio.message}</small>
        }
            <Form.Group className="mb-3" controlId="data_fim">
              <Form.Label>Data do fim:</Form.Label>
              <Form.Control isInvalid={true} mask="99/99/9999"
               {...register('data_fim',semestreValidator.data_fim)}  type="text" 
               onChange={handleChange }/>
              {
          errors.data_fim &&
          <small>{errors.data_fim.message}</small>
        }
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