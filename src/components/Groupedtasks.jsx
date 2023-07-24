import classNames from "classnames"
import Tasks from "./Tasks"
import { taskstore } from "../store/taskstore"
import { shallow } from 'zustand/shallow';
import { useMemo, useState } from "react";

const Groupedtasks = ({ state }) => {
  const [message, setmessage] = useState(null)
  const tasks = taskstore(store => store.tasks.filter((task) => task.state === state),
    shallow
    //check content of array are SVGMaskElement(every time rerenders)
  )
  const setDraggedTask = taskstore(store => store.setDraggedTask)
  const draggedTask = taskstore(store => store.draggedTask)
  const updatetask = taskstore(store => store.updatetask)
  const taskstate = taskstore(store => store.taskstate)
  const settaskstate = taskstore(store => store.settaskstate)


   // Set the message based on the state prop
   useMemo(() => {
    switch (state) {
      case "PLANNED":
        setmessage("Schedule your day wisely");
        break;
      case "ONGOING":
        setmessage("No ongoing tasks available");
        break;
      case "COMPLETED":
        setmessage("hurry burry complete tasks!");
        break;
      // Add more cases for other states as needed
      default:
        setmessage(null); // No message for other states
        break;
    }
  }, [state]);



  return (
    <>
      <hr className='mt-5' />
      <ul className={classNames('p-1 space-y-2 min-h-[450px] min-w-[31%] bg-zinc-900 rounded-lg', { "border-dashed border-2 border-x-white": taskstate === state })}
        onDragOver={e => {
          settaskstate(state)
          e.preventDefault()
        }
        }

        onDragLeave={
          e => {
            settaskstate(null)
            e.preventDefault()
          }
        }

        onDrop={() => {
          updatetask(draggedTask, state)
          settaskstate(state)
          setDraggedTask(null)

        }}
      >
        <div className={classNames("text-center font-semibold state mt-5", state)}> {state} TASKS</div>
        {tasks.length === 0 ? (
          <div className="text-center text-gray-400 mt-5 p-5 font-bold text-lg">{message}</div>
        ) : (
          tasks.map((task) => (
            <Tasks key={task.title} task={task} />
          )))
        }

      </ul>
    </>
  )
}

export default Groupedtasks