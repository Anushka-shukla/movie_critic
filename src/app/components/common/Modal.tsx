import { ReactNode, useState } from "react";
import { X } from "react-feather";

interface Children {
    children: ReactNode,
    isModalOpen: boolean,
    onClose: () => void

}

const Modal = ({ children, isModalOpen, onClose }: Children) => {
    
    return (

        isModalOpen &&

        <div>
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-black/40">

                <div className="fixed z-1 top-[33%] left-[33%] bg-white border-2 border-indigo-200 w-80 p-6 rounded-md">

                    <button className="absolute top-1 right-[-5%]" onClick={onClose}>
                        <X className="absolute text-black-300 top-2 right-7" />
                    </button>

                    {children}

                </div>
            </div>
        </div>
    )


}

export default Modal;