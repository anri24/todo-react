import { QueryCache, useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getTodo } from "../services/useTodos"
import { useForm } from "react-hook-form"
import { useUpdateTodo } from "../features/useUpdateTodo"

function EditTodo() {
    const {todoId} = useParams()
    const query = useQuery({queryKey: ['todo'], queryFn: () => getTodo(todoId)})
 
    const {isUpdating, updateTodoMutation} = useUpdateTodo();
    const {register, handleSubmit} = useForm();

    function onSubmit(data){
        updateTodoMutation({newTodoData: JSON.stringify(data), id: todoId}, {
            onSuccess: () => {
                console.log('updated')
            }
        })
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-5">
                <div className="flex flex-col">
                    <label>Title</label>
                    <input className="border-2 border-stone-500" {...register('title')} defaultValue={query.data?.data.title}/>
                </div>
                <div className="flex flex-col  mt-2">
                    <label>Description</label>
                    <textarea  className="border-2 border-stone-500 h-96" {...register('description')} defaultValue={query.data?.data.description}></textarea>
                </div>
                <button className="mt-5 bg-blue-500 rounded-lg p-2">Submit</button>
            </form>
        </div>
    )
}

export default EditTodo
