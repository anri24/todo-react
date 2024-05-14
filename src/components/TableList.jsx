import Button from "../ui/Button";

function TableList({data}) {
    const {title, description} = data;
    console.log(data)

    return (
        <div className="w-100 border-2 border-black rounded-xl">
            <div className="flex justify-around">
            <Button type='primary'>Show</Button>
            {/* <Button type="danger">Delete</Button> */}
            </div>
            <div className="pt-2 px-20 border-b-2">{title}</div>
            <div className="px-2 pb-5">{description}</div>
            </div>
    )
}

export default TableList
