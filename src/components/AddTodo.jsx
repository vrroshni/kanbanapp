import { taskstore } from '../store/taskstore'
import { useState } from 'react'

const AddTodo = () => {
    const [todo, settodo] = useState('');
    const taskstate = taskstore(store => store.taskstate)
    const addtask = taskstore(store => store.addtask)
    return (
        <div className='mx-auto text-center content-center'>
            <input type="text" className="input input-success rounded-l-full w-full max-w-xs m-5" placeholder={`ADD A NEW ${taskstate} TASK`} value={todo} onChange={(e) => settodo(e.target.value)} />
            <button className='btn btn-success rounded-r-full' onClick={() => {
                addtask(todo, taskstate)
                settodo('')
            }
            }   >
                ADD TODO
            </button>
        </div>
    )
}

export default AddTodo