import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "../services/useTodos";

export function useUpdateTodo(){
    const quryClient = useQueryClient();

    const {isLoading: isUpdating, mutate: updateTodoMutation} = useMutation({
        mutationFn: ({newTodoData, id}) => updateTodo(newTodoData, id),
        onSuccess: () => {
            quryClient.invalidateQueries({
                queryKey: ['todos', 'todo'],
            })
        }
    })

    return {isUpdating, updateTodoMutation}
}