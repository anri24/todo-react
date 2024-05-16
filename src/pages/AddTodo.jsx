import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTodo } from "../services/useTodos"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"


function AddTodo() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()

    const mutation = useMutation({
        mutationFn: createTodo,
        onSuccess: () => {
            queryClient.invalidateQueries('todos'),
            console.log('created')
            // navigate('/')
        },
        onError: () => {
            console.log('error')
        }
    })

    return (
        <div className="flex justify-center">
            <form onSubmit={(e) => {
                e.preventDefault();
                mutation.mutate(JSON.stringify({title:'test store', description: 'dsads'}))
            }} className="flex flex-col mt-5">
                <div className="flex flex-col">
                    <label>Title</label>
                    <input className="border-2 border-stone-500" {...register('title')}/>
                </div>
                <div className="flex flex-col  mt-2">
                    <label>Description</label>
                    <textarea  className="border-2 border-stone-500" {...register('description')}></textarea>
                </div>
                <button type="submit" className="mt-5 bg-blue-500 rounded-lg p-2">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo
