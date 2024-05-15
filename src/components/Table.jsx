import { useQuery } from "@tanstack/react-query"
import { getTodos } from "../services/useTodos"
import TableList from "./TableList"
import TodoForm from "./TodoForm"


function Table() {
    const query = useQuery({queryKey: ['todos'], queryFn: getTodos})

    return (
        <>
        <button onClick='' className="p-2 fixed right-5 bg-blue-500 rounded-lg mt-5">Add Todo</button>
        <div className="mt-28 flex gap-5 flex-wrap justify-center">
            {query.data?.data?.map(item => <TableList data={item} key={item.id} />)}
        </div>
        <TodoForm />
        </>
    )
}

export default Table
