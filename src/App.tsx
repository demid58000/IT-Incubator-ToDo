import './App.css'
import {Task, TodolistItem} from "./Todolistitem.tsx";

function App() {
    const todolistTitle_1 = "What to learn"
    const todolistTitle_2 = "What to buy"
    const tasks_1: Task[] = [
        {id: 1,title: "HTML", isDone: true},
        {id: 2,title: "CSS", isDone: true},
        {id: 3,title: "JSid: ,", isDone: true}
    ]
    const tasks_2: Task[] = [
        // {id: 4,title: "cola", isDone: true},
        // {id: 5,title: "chips", isDone: true},
        // {id: 6,title: "sweets: ,", isDone: true}
    ]



    return (
        <div className="app">
            <TodolistItem title={todolistTitle_1} tasks={tasks_1}/>
            <TodolistItem title={todolistTitle_2} tasks={tasks_2}/>
        </div
        >
    )
}

export default App
