import classNames from "classnames"
import Tasks from "./Tasks"



const Groupedtasks = ({state}) => {
  return (
    <>
    <ul className='p-1 space-y-2 '>
    <div className={classNames("state",state)}>{state}</div> 
    <Tasks title={"brush"}/>
    </ul>
    </>
  )
}

export default Groupedtasks