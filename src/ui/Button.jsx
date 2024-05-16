import { Link } from "react-router-dom"

function Button({children, onClick, to, className}) {
    const classList = `p-2 min-w-[100px] text-center text-stone-200 rounded-lg min-w-30 transition-all mx-1 ${className}`

    if(to) return <Link to={to} className={classList}>{children}</Link>

    return (
        <button onClick={onClick} className={classList}>
            {children} 
        </button>
    )
}

export default Button
