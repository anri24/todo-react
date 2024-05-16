import { useQuery } from "@tanstack/react-query"
import { getTodos } from "../services/useTodos"
import TableList from "../components/TableList"
import { Link } from "react-router-dom"

function Home() {
    const query = useQuery({queryKey: ['todos'], queryFn: getTodos})

    return (
        <div>
            <Link to='add/todo' className="p-2 absolute right-5 top-20 bg-blue-500 rounded-lg ">Add Todo</Link>


            <div className='my-10 mt-28 flex gap-5 flex-wrap justify-start'>
            {query.data?.data?.map(item => <TableList data={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default Home
