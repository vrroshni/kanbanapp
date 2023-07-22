
const Tasks = ({ title }) => {
    return (
        <>
            <ul className='p-1 space-y-2 '>
                <li className='flex px-3 py-2 my-2 bg-base-100 rounded-lg justify-between'
                    key={title} >{title} </li>
            </ul>
        </>
    )
}

export default Tasks