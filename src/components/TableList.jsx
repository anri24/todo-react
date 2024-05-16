import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { useDeleteTodo } from "../features/useDeleteTodo";

function TableList({data, setIsOpenModal}) {
    const {id, title, description} = data;
    const {isDeleting, deleteTodo} = useDeleteTodo();

    return (
        <>
        <div className="w-100 border-2 border-black rounded-xl">
            <div className="flex justify-around">
                <Link to={`edit/todo/${id}`} className="bg-blue-500 p-2 rounded-lg">Edit</Link>
                <button onClick={() => deleteTodo(id)} className="bg-red-500 p-2 rounded-lg">Delete</button>
            </div>
                <div className="pt-2 px-20 border-b-2">{title}</div>
                {/* <div className="px-2 pb-5">{description.length > 25 ? description.substring(0,25)+'...': description}</div> */}
                <div className="px-2 pb-5">{description}</div>
            </div>
        </>
    )
}

export default TableList
