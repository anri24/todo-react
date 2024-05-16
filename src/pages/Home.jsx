import { useQuery } from "@tanstack/react-query"
import { getTodos } from "../services/useTodos"
import TableList from "../components/TableList"
import { Link } from "react-router-dom"

function Home() {
    const query = useQuery({queryKey: ['todos'], queryFn: getTodos})
    console.log(query)


    return (
        <div>
            <Link to='add/todo' className="p-2 fixed right-5 top-20 bg-blue-500 rounded-lg">Add Todo</Link>

            <div className="mt-28 flex gap-5 flex-wrap justify-center">
            {query.data?.data?.map(item => <TableList data={item} key={item.id} />)}
        </div>
        </div>
    )
}

export default Home
