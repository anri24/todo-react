function Modal({onCloseModal,children}) {
    return (
        // overlay
        <div className="fixed top-0 left-0 w-full h-dvh backdrop-blur-sm transition-all z-50">
            {/* modal  */}
            <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-100 px-[3.2rem] pt-[1rem] pb-[4rem] transition-all shadow-sm w-[300px]">
                    {children}
                    <div className="mt-5 fixed right-2 bottom-2">
                    <button onClick={onCloseModal} className="border-2 border-stone-500 p-2 rounded-lg">Cancel</button>
                    </div>

            </div>
        </div>
    )
}

export default Modal
