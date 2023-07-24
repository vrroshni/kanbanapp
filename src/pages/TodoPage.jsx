import AddTodo from '../components/AddTodo'
import FilterTodo from '../components/FilterTodo'

const TodoPage = () => {
    return (
        <div className='container mx-auto p-[25px] w-[60%]  bg-base-200 rounded-[25px] h-auto mt-[10px]' >
            <AddTodo />
            <FilterTodo />
        </div>
    )
}

export default TodoPage