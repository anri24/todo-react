import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../services/useTodos";

export function useCreateTodo(){
    const queryClient = useQueryClient();

    const {isLoading: isCreating, mutate: todoMutation} = useMutation({
        mutationFn: createTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        }
    })

    return {isCreating, todoMutation}
}