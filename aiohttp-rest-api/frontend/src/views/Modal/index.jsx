import React, { useState } from "react";
import "./style.css";

export default function Modal({ buttonName, card, type, onSubmit }) {
    const [modal, setModal] = useState(false);
    const [input, setInput] = useState({
        nome: "", cargahoraria: 0,
        descricao: "", planodecurso: ""
    });

    const toggleModal = () => {
        setModal(!modal);
    };


    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            {type ?
                (<button onClick={toggleModal} className="btn">
                    {buttonName}
                </button>)
                :
                (
                    <button onClick={toggleModal} className='actions'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                            </path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                )

            }


            {modal && (
                <div className="CardModalModal">
                    <div onClick={toggleModal} className="CardModalOverlay"></div>
                    <div className="CardModalModalContent">
                        <h2>{buttonName}</h2>

                        <label htmlFor="nameNewDeck">Nome da matéria</label>
                        <input type="text" name="frontNewCard" id="frontNewCard" placeholder="Insira o nome"
                            defaultValue={card ? card.name : ""}
                            onChange={(r) => { setInput({ ...input, name: r.target.value }) }}
                            onBlur={(r) => { if (card) { card.name = r.target.value } }} />

                        <label htmlFor="nameNewDeck">Carga horária</label>
                        <input type="text" name="backNewCard" id="backNewCard" placeholder="Insira a carga horária"
                            defaultValue={card ? card.cargaHoraria : ""}
                            onChange={(r) => { setInput({ ...input, cargaHoraria: r.target.value }) }}
                            onBlur={(r) => { if (card) { card.cargaHoraria = r.target.value } }} />

                        <label htmlFor="nameNewDeck">Descrição</label>
                        <input type="text" name="backNewCard" id="backNewCard" placeholder="Insira a descrição"
                            defaultValue={card ? card.description : ""}
                            onChange={(r) => { setInput({ ...input, description: r.target.value }) }}
                            onBlur={(r) => { if (card) { card.description = r.target.value } }} />

                        <button className="btn btn-submit"
                            onClick={() => onSubmit(input, card)}>{buttonName}</button>

                        <button className="CardModalCloseModal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
