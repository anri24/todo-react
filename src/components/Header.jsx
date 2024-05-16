import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="flex justify-center p-3 bg-blue-500 w-full ">
            <Link to='/'>TODO APP</Link>
        </header>
    )
}

export default Header
