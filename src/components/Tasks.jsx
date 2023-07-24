import { taskstore } from "../store/taskstore"
import TaskActions from "./TaskActions"

const Tasks = ({ task }) => {
    const setDraggedTask = taskstore(store => store.setDraggedTask)
    return (
        <>
            <ul className='p-1 space-y-2 cursor-move' draggable onDragStart={()=>setDraggedTask(task.title)}>
                <li className='flex px-3 py-2 my-2 bg-base-100 rounded-lg justify-between'
                    key={task.title} >
                    <span className="flex items-center justify-center font-medium text-base"> {task.title}</span>
                    <TaskActions state={task.state} title={task.title} />
                </li>
            </ul>
        </>
    )
}

export default Tasks