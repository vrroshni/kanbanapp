import { RiDeleteBin5Line } from 'react-icons/ri'
import { VscDebugStart } from 'react-icons/vsc'
import { TiTickOutline } from 'react-icons/ti'
import { taskstore } from '../store/taskstore'



const TaskActions = ({ state, title }) => {
    const deletetask = taskstore(store => store.deletetask)
    const updatetask = taskstore(store => store.updatetask)
    return (

        <div className='flex'>

            {
                state === 'PLANNED' ?
                    <div className='btn text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  btn-circle mr-[10px]'>
                        <VscDebugStart size="30" className=' text-white rounded cursor-pointer  p-[3px]'
                            onClick={() => updatetask(title,'ONGOING')} />
                    </div>
                    :
                    state === 'ONGOING' ?
                        <div className='btn text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80  btn-circle mr-[10px]'>

                            <TiTickOutline size="30" className=' text-white rounded cursor-pointer  p-[3px]'
                                onClick={() => updatetask(title,'COMPLETED')} />
                        </div>
                        :
                        null

            }

            <div className='btn text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  btn-circle mr-[10px]'>
                <RiDeleteBin5Line size="30" className=' text-white rounded cursor-pointer  p-[3px]'
                    onClick={() => deletetask(title)} />
            </div>


        </div>

    )
}

export default TaskActions