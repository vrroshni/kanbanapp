import  { useState } from 'react'
import Groupedtasks from './groupedtasks';

function FilterTodo() {
    const [filter, setFilter] = useState('PLANNED');
  return (
    <>
    <div className='text-center space-x-4 my-3'>
            <button className={filter === 'PLANNED' 
                  ? 'btn btn-outline btn-primary btn-active rounded-l-full'
                  :  'btn btn-outline btn-primary rounded-l-full'} 
            onClick={() => setFilter('PLANNED')}>PLANNED</button>

            <button className={filter === 'active' 
                  ? 'btn btn-outline btn-accent btn-active rounded-none'
                  :  'btn btn-outline btn-accent rounded-none'}  
            onClick={() => setFilter('ONGOING')}>ONGOING</button>
            
            <button className={filter === 'DONE' 
                  ? 'btn btn-outline btn-secondary btn-active rounded-r-full'
                  :  'btn btn-outline btn-secondary rounded-r-full'}  
            onClick={() => setFilter('DONE')}>DONE</button>
        </div>
        <Groupedtasks state={filter}/>
</>
  )
}

export default FilterTodo