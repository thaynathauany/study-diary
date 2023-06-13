import React from "react";
import style from './Form.module.scss'
import Button  from "../Button";

export default class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa"> {/* //Se selecionarmos o label, queremos que o input seja focado, o htmlFor serve para isso */}
                    Add a new study
                    </label>
                    <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    >
                    </input>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">  
                        Time
                    </label>
                    <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    >
                    </input>
                    
                </div>
                <Button>
                    Adicionar
                </Button>

            </form>
        )
    }
}