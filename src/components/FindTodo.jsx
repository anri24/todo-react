function FindTodo({data,onCloseModal}) {
    const {title,description} = data;


    return (
        <>
            <div className="flex justify-around">
                <button className="bg-blue-500 p-2 rounded-lg">Edit</button>
                <button className="bg-red-500 p-2 rounded-lg">Delete</button>
            </div>
            <div className="mt-5">
                <div>{title}</div>
                <div className="mt-2">{description}</div>
            </div>
        </>
    )
}

export default FindTodo
