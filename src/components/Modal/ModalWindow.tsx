import { useEffect, useRef, useState } from "react";
import "./ModalWindow.css";

export default function ModalWindow(props: any) {
    const [show, setShow] = useState<boolean>(false);

    function useOutsideAlerter(ref: { current: any }) {
        useEffect(() => {
            function handleClickOutside(event: { target: any }) {
                if (show && ref.current && !ref.current.contains(event.target)) {
                    setShow(() => false);
                    let modal = document.getElementById("modal");
                    if (modal != undefined) {
                        modal.scrollTop = 0;
                    }
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref, show]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <>
            {show ? <div id="page-mask"></div> : <></>}
            <div ref={wrapperRef}>
                <button className="showButton" onClick={() => setShow((show) => !show)}>
                    {props.symbol ? props.symbol : "?"}
                </button>
                {show ? (
                    <div id="modal" className="modal">
                        <div onClick={() => setShow((show) => false)} className="closeButton">
                            ✖
                        </div>

                        {props.content}
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </>
    );
}
