
import Pagina from '@/componentes/Pagina'
import disciplinaValidator from '@/validators/disciplinas.Validator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'

const form = () => { 
    const [cursos, setCursos] = useState([])
    const {push} = useRouter()
  const {register, handleSubmit,formState:{errors}} = useForm ()
 
  useEffect(() => {
    setCursos(getAll)
  },[]
  )

  function getAll(){
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }

  function salvar(dados){
    const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
    disciplinas.push(dados)
    window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    push('/disciplinas')
  }
  return (
    <>
       <Pagina titulo='Disciplina'>
      <Card>
        <Card.Body>
         <Form>
        <Form.Group className="mb-3">
          <Form.Label>Disciplina</Form.Label>
          <Form.Control isInvalid={true} {...register('disciplinas',disciplinaValidator.disciplina)} id="Disciplina" placeholder="Disciplina" />
          {
          errors.nome &&
          <small>{errors.nome.message}</small>
        }
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Curso</Form.Label>
          <Form.Select isInvalid={true} {...register('curso',disciplinaValidator.curso)} id="curso">
            {cursos.map(item=>(
                <option>{item.nome}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="success" onClick={handleSubmit(salvar)}>< AiOutlineCheck className='me-1'/>Salvar</Button>
        <Link href={'/disciplinas'} className='ms-2 btn btn-danger'><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
    </Form>
        </Card.Body>
      </Card>
      </Pagina>
    </>
  )
}

export default form