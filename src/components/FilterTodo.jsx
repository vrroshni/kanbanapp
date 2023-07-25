import { taskstore } from '../store/taskstore';
import Groupedtasks from './Groupedtasks';

function FilterTodo() {
   const settaskstate=taskstore(store=>store.settaskstate)
   const taskstate=taskstore(store=>store.taskstate)
  return (
    <>
    <div className='text-center sm:space-x-4 mt-3'>
            <button className={taskstate === 'PLANNED' 
                  ? 'btn mb-2  btn-outline btn-primary btn-active rounded-3xl sm:rounded-l-full sm:w-auto w-full'
                  :  'btn mb-2 btn-outline btn-primary rounded-3xl sm:rounded-l-full sm:w-auto w-full'} 
            onClick={() => settaskstate('PLANNED')}>PLANNED</button>

            <button className={taskstate === 'ONGOING' 
                  ? 'btn mb-2 btn-outline btn-accent btn-active rounded-3xl sm:rounded-none sm:w-auto w-full'
                  :  'btn mb-2 btn-outline btn-accent rounded-3xl sm:rounded-none sm:w-auto w-full'}  
            onClick={() => settaskstate('ONGOING')}>ONGOING</button>
            
            <button className={taskstate === 'COMPLETED' 
                  ? 'btn  btn-outline btn-secondary btn-active rounded-3xl sm:rounded-r-full sm:w-auto w-full'
                  :  'btn  btn-outline btn-secondary rounded-3xl sm:rounded-r-full sm:w-auto w-full'}  
            onClick={() => settaskstate('COMPLETED')}>COMPLETED</button>
        </div>
        <div className='flex flex-col lg:flex-row space-x-4 my-3 items-center justify-center '>
        <Groupedtasks state={'PLANNED'}/>
        <Groupedtasks state={'ONGOING'}/>
        <Groupedtasks state={'COMPLETED'}/>

        </div>
</>
  )
}

export default FilterTodo