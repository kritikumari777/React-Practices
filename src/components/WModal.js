import { createPortal } from "react-dom"
export default function Modal() {

    return createPortal(
        <div>
            Modal
        </div>,
        document.getElementById('modal')
    )
}