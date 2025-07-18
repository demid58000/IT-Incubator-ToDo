type Props = {
    title: string
    tasks: Array<Task>
}

export type Task = {
    id: number
    title: string
    isDone: boolean
}


export function TodolistItem({title, tasks}: Props) {
    // const title = props.title
    // const tasks = props.tasks
    // const {title, tasks} = props

    const tasksList = tasks.length === 0 ? <span>Task list is empty</span> : <ul>{tasks.map(t => {
        return (
            <li>
                <input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
            </li>
        )
    })}</ul>


    return (
        <div className="app">
            <div>
                <h3>{title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {tasksList}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}