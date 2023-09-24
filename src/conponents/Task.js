import { FaTimes } from "react-icons/fa"

const Task = ({task}) => {
  return (
    <div className="task">
        <h3>{task}<FaTimes style={{color: 'red'}}/></h3>
    </div>
  )
}

export default Task