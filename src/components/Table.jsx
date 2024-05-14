import { useQuery } from "@tanstack/react-query"
import { getTodos } from "../services/useTodos"
import TableList from "./TableList"


function Table() {
    const query = useQuery({queryKey: ['todos'], queryFn: getTodos})

    return (
        <div className="mt-20 flex gap-5 flex-wrap justify-center">
            {query.data?.data?.map(item => <TableList data={item} key={item.id} />)}
        </div>
    )
}

export default Table
