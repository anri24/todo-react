function Button({children,type, onOpenModal}) {
    const colorType = {primary: 'bg-blue-500',danger: 'bg-red-500'}

    return (
        <button onClick={onOpenModal} className={`${colorType[type]} px-10 py-2 rounded-xl w-full`}>
           {children} 
        </button>
    )
}

export default Button
