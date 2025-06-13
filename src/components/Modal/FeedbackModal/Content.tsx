import "./Content.css";
import React, { useRef } from "react";

export default function Content() {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formRef.current) {
            formRef.current.submit();
        }
    };

    return (
        <>
            <div className="content">
                <h2>Feedback MIKA</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" />
                    </div>
                    <button type="submit" className="submit-btn">
                        Send
                    </button>
                </form>
            </div>
        </>
    );
}
