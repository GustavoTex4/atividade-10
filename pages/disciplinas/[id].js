
import Pagina from '@/compinents/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'

const form = () => {
  const [cursos, setCursos] = useState([])
     useEffect(() => {
    setCursos(getAll)
  },[])
  function getAll(){
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }
  const {push, query} = useRouter()
  const {register, handleSubmit, setValue} = useForm ()

  useEffect(()=> {
    if(query.id){
      const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas'))
      const disciplina = disciplinas[query.id]
      for(let atributo in disciplina){
        setValue(atributo,disciplina[atributo])
      }
    }
  }, [query.id])

  function salvar(dados){
    const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
    disciplinas.splice(query.id, 1, dados)
    window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    push('/disciplinas')
  }
  return (
    <>
       <Pagina titulo='Disciplina'>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Disciplina</Form.Label>
          <Form.Control {...register('disciplinas')} id="Disciplina" placeholder="Disciplina" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Curso</Form.Label>
          <Form.Select {...register('curso')} id="curso">
            {cursos.map(item=>(
                <option>{item.nome}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="success" onClick={handleSubmit(salvar)}>< AiOutlineCheck className='me-1'/>Salvar</Button>
        <Link href={'/disciplinas'} className='ms-2 btn btn-danger'><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
        </Form>
      </Pagina>
    </>
  )
}

export default form