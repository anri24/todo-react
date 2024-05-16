import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatus } from "../services/useTodos";

export function useUpdateStatus(){
    const queryClient = useQueryClient();
    
    const {isLoading: isUpdatingStatus, mutate} = useMutation({
        mutationFn: updateStatus,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        }
    })

    return {isUpdatingStatus, mutate}
}