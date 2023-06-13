import React, { useState } from "react";
import style from './List.module.scss'
import Item from "./Item";

export default function List() {
    const [tasks, setTasks] = useState(
        [
            {
                task: 'React',
                time: '02:00:00'
            },
            {
                task: 'Javascript',
                time: '01:00:00'
            },
            {
                task: 'Typescript',
                time: '03:00:00'
            }
        ]//array de objetos
    );
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTasks = ([...tasks, { task: "Study states", time: "05:00:00"}])
            }}>
                Studies of the day
            </h2>
            <ul>
                {tasks.map((item, index)=>(
                    <Item
                        key={index}
                        {...item} //Dessa forma, conseguimos utilizar todos os atributos que existem dentro daquele objeto como prop para esse componente
                        // tarefa={item.task}
                        // tarefa={item.time}
                    />
                ))}
            </ul>
        </aside>
    )
                {/* <li>
                    <h3>React</h3>               
                    <span>
                        02:00:00
                    </span>
                </li>
                <li>
                    <h3>Javascript</h3>          
                    <span>
                        01:00:00
                    </span>
                </li> */}

}