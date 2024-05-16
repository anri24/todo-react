import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo as deleteTodoApi } from "../services/useTodos";

export function useDeleteTodo(){
    const queryClient = useQueryClient();

    const {isLoading: isDeleting, mutate: deleteTodo} = useMutation({
        mutationFn: (id) => deleteTodoApi(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        }
    })

    return {isDeleting, deleteTodo}
}