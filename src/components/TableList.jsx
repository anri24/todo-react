import Button from "../ui/Button";
import { useDeleteTodo } from "../features/useDeleteTodo";
import { useUpdateStatus } from "../features/useUpdateStatus";

function TableList({data, setIsOpenModal}) {
    const {id, title, description} = data;
    const {isDeleting, deleteTodo} = useDeleteTodo();
    const {isUpdatingStatus, mutate} = useUpdateStatus();

    return (
        <>
        <div className={`ml-3 text-white w-[350px] border-2 border-black rounded-xl  ${data.status ? 'bg-stone-300' : 'bg-black'}`}>
            <div className="flex justify-between p-2 pt-5 px-3">
                <Button to={`edit/todo/${id}`} className="bg-blue-500 border-2 border-blue-500 hover:bg-transparent">Edit</Button>
                <Button onClick={() => mutate(id)} className="bg-green-500 border-2 border-green-500 hover:bg-transparent">{data.status ? 'Undone' : 'Done'}</Button>
                <Button onClick={() => deleteTodo(id)} className='bg-red-500 border-2 border-red-500 hover:bg-red-500'>Delete</Button>
            </div>
            <div className="flex flex-col justify-start">
                <div className={`pb-2 pt-5 px-5 text-xl border-b-2 ${data.status && 'line-through'}`}>{title}</div>
                {/* <div className="px-2 pb-5">{description && description.length > 25 ? description.substring(0,25)+'...': description}</div> */}
                <div className={`mt-2 px-5 pb-5 ${data.status && 'line-through'}`}>{description}</div>
            </div>
            </div>
        </>
    )
}

export default TableList
