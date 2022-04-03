import React, { useState } from "react";
import style from './List.module.scss';
import Item from "./item";

function List() {
//state, with default state
//returns  an array[ state, functionToAlterState]
    const  [tasks, setTasks] = useState([{
        task: 'React',
        time: '02:00:00'
    },
    {
        task: 'Java Script',
        time: '01:00:00'
    }]);
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTasks([...tasks, { task: "Estudar Estado", time: "05:00:00" }])
            }}>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside >
    )
}

export default List;