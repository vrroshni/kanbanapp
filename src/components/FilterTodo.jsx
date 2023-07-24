import { taskstore } from '../store/taskstore';
import Groupedtasks from './Groupedtasks';

function FilterTodo() {
   const settaskstate=taskstore(store=>store.settaskstate)
   const taskstate=taskstore(store=>store.taskstate)
  return (
    <>
    <div className='text-center space-x-4 my-3'>
            <button className={taskstate === 'PLANNED' 
                  ? 'btn btn-outline btn-primary btn-active rounded-l-full'
                  :  'btn btn-outline btn-primary rounded-l-full'} 
            onClick={() => settaskstate('PLANNED')}>PLANNED</button>

            <button className={taskstate === 'ONGOING' 
                  ? 'btn btn-outline btn-accent btn-active rounded-none'
                  :  'btn btn-outline btn-accent rounded-none'}  
            onClick={() => settaskstate('ONGOING')}>ONGOING</button>
            
            <button className={taskstate === 'COMPLETED' 
                  ? 'btn btn-outline btn-secondary btn-active rounded-r-full'
                  :  'btn btn-outline btn-secondary rounded-r-full'}  
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