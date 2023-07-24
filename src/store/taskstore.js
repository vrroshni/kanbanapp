import { create } from "zustand"
import { devtools,persist } from "zustand/middleware"
import toast from 'react-hot-toast';
// not ideal way
// const tasksLocalStorageKey = "Tasks";

// const handleTasks = (newTasks) => {
//     if (newTasks) {
//         // Save tasks to localStorage
//         localStorage.setItem(tasksLocalStorageKey, JSON.stringify(newTasks));
//     } else {
//         // Retrieve tasks from localStorage
//         const storedTasks = localStorage.getItem(tasksLocalStorageKey);
//         return storedTasks ? JSON.parse(storedTasks) : [];
//     }
// };

const store = (set) => ({
    // tasks: [{ title: "brush teeth", state: "ONGOING" }],
    // tasks: handleTasks(),
    tasks: [],
    taskstate: "PLANNED",
    draggedTask: null,

    addtask: (title, state) =>
        // set((store) =>
        //     ({ tasks: [...store.tasks, { title, state }] })
        set((store) => {
            const updatedTasks = [...store.tasks, { title, state }];
            // handleTasks(updatedTasks); 
            // Call handleTasks to update localStorage
            return { tasks: updatedTasks };
        },
        false,
        "addtask"
        ),

    setDraggedTask: (title) =>
        set(() =>
            ({ draggedTask: title }),
            false,
            "setDraggedTask"
        ),

    deletetask: (title) =>
        set((store) => {
            const updatedTasks = store.tasks.filter((task) => task.title !== title);
           
            // handleTasks(updatedTasks); 
            // Call handleTasks to update localStorage
            return { tasks: updatedTasks };
        } ,
            false,
            "deletetask"),

    updatetask: (title, state) =>
        set((store) => {
            const updatedTasks = store.tasks.map((task) =>
                task.title === title ? { title, state } : task
            );
            toast.success(`Moved to  ${state} tasks`)
            // handleTasks(updatedTasks); 
            // Call handleTasks to update localStorage
            return { tasks: updatedTasks };
        },
        false,
        "updatetask"
        ),

    settaskstate: (state) =>
        set(() =>
            ({ taskstate: state }),
            false,
            "settaskstate"
        ),
})


// custom middlewrae
const log=(config)=>(set,get,api)=>config(
    (...args)=>{console.log("dispatch",...args)
    set(...args)
},
  get,
  api  
)
export const taskstore = create(log(persist(devtools(store),{name:"store"})))