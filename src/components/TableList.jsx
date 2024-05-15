import { useState } from "react";
import Button from "../ui/Button";
import Modal from "./Modal";
import FindTodo from "./FindTodo";

function TableList({data}) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const {id, title, description} = data;


    return (
        <>
        {isOpenModal && <Modal  onCloseModal={() => setIsOpenModal(false)}><FindTodo data={data}  /></Modal>}
        <div className="w-100 border-2 border-black rounded-xl">
            <div className="flex justify-around">
            <Button type='primary' onOpenModal={() => setIsOpenModal(true)}>Show</Button>
            </div>
            <div className="pt-2 px-20 border-b-2">{title}</div>
            <div className="px-2 pb-5">{description.length > 25 ? description.substring(0,25)+'...': description}</div>
            </div>
        </>
    )
}

export default TableList
