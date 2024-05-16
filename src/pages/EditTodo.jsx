import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getTodo } from "../services/useTodos"

function EditTodo() {
    const {todoId} = useParams()
    const query = useQuery({queryKey: ['todo'], queryFn: () => getTodo(todoId)})

    return (
        <div className="flex justify-center">
            <form className="flex flex-col mt-5">
                <div className="flex flex-col">
                    <label>Title</label>
                    <input className="border-2 border-stone-500" defaultValue={query.data?.data.title}/>
                </div>
                <div className="flex flex-col  mt-2">
                    <label>Description</label>
                    <textarea  className="border-2 border-stone-500 h-96" defaultValue={query.data?.data.description}></textarea>
                </div>
                <button className="mt-5 bg-blue-500 rounded-lg p-2">Submit</button>
            </form>
        </div>
    )
}

export default EditTodo
