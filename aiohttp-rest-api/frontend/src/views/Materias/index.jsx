import React, { useState, useEffect } from 'react'
import './style.css'
import Modal from '../Modal'
import api from '../../services/api'

export const Materias = () => {
  const [dados, setDados] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/materias')
      setDados(data)
    })()

  }, [])

  const handleDelete = (id, index) => {
    const confirm = window.confirm(`Deseja realmente deletar a matéria ${dados[index].name}?`);
    if (confirm) {
      api.delete(`/materias/${id}`).then(
        dados.splice(index, 1),
        setDados([...dados]),
        alert(
          "Matéria deletada com sucesso!"
        )
      )
    }
  }

  const onSubmit = (create, edit) => {
    if (edit) {
      const index = dados.findIndex(({ id }) => id === edit.id)
      const updateDados = [...dados]
      updateDados[index] = edit
      api.put(`/materias/${edit.id}`, edit).then(
        setDados(updateDados)
      )
    }
    else {
      api.post('/materias', create).then(
        setDados([...dados, create])
      )
    }
  }

  return (
    <div className='materias-wrapper'>

      <div className='table'>

        <div className='header-table'>
          <h2>Lista de matérias</h2>
          <Modal buttonName='Criar nova' type={1} onSubmit={onSubmit} />
        </div>

        <table>
          <tr className='title'>
            <th>Nome</th>
            <th>Carga horária</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
          {
            dados.map(({ id, name, cargaHoraria, description }, index) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{cargaHoraria}</td>
                <td>{description}</td>
                <td>

                  <Modal type={0} buttonName='Editar matéria' card={dados[index]} onSubmit={onSubmit} />
                  <button className='actions' onClick={() => handleDelete(id, index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                      </path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"
                      ></line></svg>
                  </button>
                </td>
              </tr>
            ))
          }

        </table>

      </div>

    </div>
  )
}
