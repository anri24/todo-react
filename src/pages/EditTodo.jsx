import { useNavigate, useParams } from "react-router-dom"
import { getTodo } from "../services/useTodos"
import { useForm } from "react-hook-form"
import { useUpdateTodo } from "../features/useUpdateTodo"
import { useQueryClient } from "@tanstack/react-query"

function EditTodo() {
    const {todoId} = useParams() 
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const {isUpdating, updateTodoMutation} = useUpdateTodo();
    const {register, handleSubmit} = useForm({
        defaultValues: async () => {
            let data = await getTodo(todoId)
            return data.data
        }
    });

    function onSubmit(data){
        updateTodoMutation({newTodoData: JSON.stringify(data), id: todoId}, {
            onSuccess: () => {
                navigate('/')
                queryClient.invalidateQueries({
                    queryKey: ['todos']
                })
            }
        })
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-96 mt-5">
                <div className="flex flex-col py-5">
                    <label className="my-1">Title</label>
                    <input className="p-2 border-2 border-stone-500" {...register('title')}/>
                </div>
                <div className="flex flex-col mt-2">
                    <label className="my-1">Description</label>
                    <textarea className="p-2 border-2 border-stone-500 h-96" {...register('description')}></textarea>
                </div>
                <button className="mt-5 bg-blue-500 rounded-lg p-2 text-white">Submit</button>
            </form>
        </div>
    )
}

export default EditTodo
