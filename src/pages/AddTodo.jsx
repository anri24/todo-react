import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useCreateTodo } from "../features/useCreateTodo"


function AddTodo() {
    const {isCreating, todoMutation} = useCreateTodo();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    function onSubmit(data){
        todoMutation(JSON.stringify(data) ,{
            onSuccess: () => {
                navigate('/')
            },
            onError: () => {
                console.log('error')
            }
        }) 
    }

    function onError(err){
        console.log(err)
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col w-96 mt-5">
                <div className="flex flex-col py-5">
                    <label className="uppercase">Title</label>
                    <input disabled={isCreating} className="p-2 border-2 border-stone-500" {...register('title',{required: 'this field is required'})} />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="uppercase">Description</label>
                    <textarea disabled={isCreating}  className="p-2 border-2 border-stone-500 h-96" {...register('description')}></textarea>
                </div>
                <button type="submit" className="mt-5 bg-blue-500 rounded-lg p-2">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo
