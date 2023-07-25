import { taskstore } from '../store/taskstore'
import { useState } from 'react'

const AddTodo = () => {
    const [todo, settodo] = useState('');
    const taskstate = taskstore(store => store.taskstate)
    const addtask = taskstore(store => store.addtask)
    return (
        <div className='mx-auto text-center items-center justify-center content-center flex flex-col sm:flex-row '>
            <input type="text" className="input input-success sm:rounded-l-full rounded-full   w-full max-w-xs m-5 min-w-fit" placeholder={ taskstate ? `ADD A NEW ${taskstate} TASK` : "CHOOSE TYPE OF TASK"} value={todo} onChange={(e) => settodo(e.target.value)} disabled={taskstate ?false : true} />
            <button className='btn btn-success  sm:rounded-r-full  sm:w-auto w-full rounded-full ' 
            onClick={() => {
                if (todo.trim()) {
                    addtask(todo, taskstate);
                    settodo('');
                  }

            }
            } 
            disabled={!todo.trim() || !taskstate}
              >
                ADD TODO
            </button>
        </div>
    )
}

export default AddTodo