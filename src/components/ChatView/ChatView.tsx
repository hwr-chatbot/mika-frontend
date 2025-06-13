import "./ChatView.css";
import { ChatMessage } from "../../types/ChatMessage";
import mika from "../../assets/mika_profilepicture.png";
import { useLayoutEffect, useRef } from "react";

type ChatViewProps = {
    history: ChatMessage[];
};

export default function ChatView(props: ChatViewProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const firstUpdate = useRef(true);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        scrollToBottom();
    });

    function urlify(text: string) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.split(urlRegex).map((part) => {
            if (part.match(urlRegex)) {
                return (
                    <a
                        key={Math.random().toString()}
                        className={"url break-all"}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {part}
                    </a>
                );
            }
            return part;
        });
    }

    return (
        <ul className="chatview-history">
            {props.history.map((element: ChatMessage, index: number) => (
                <li key={index} className={element.fromBot ? "chatview-bot-message" : "chatview-me-message"}>
                    <span className="chatview-chatbubble">
                        {element.fromBot ? <img className="w-[45px] h-[45px]" src={mika} alt="Mika-Bot" /> : ""}
                        <span>
                            {" "}
                            {element.text === "..." ? (
                                <span className="flex h-full ml-2">
                                    <div className="h-2 w-2 m-auto mr-1 float-left bg-slate-200 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                                    <div className="h-2 w-2 m-auto mr-1 float-left bg-slate-200 rounded-full animate-bounce [animation-delay:-0.1s]"></div>
                                    <div className="h-2 w-2 m-auto mr-3 float-left bg-slate-200 rounded-full animate-bounce"></div>
                                </span>
                            ) : (
                                urlify(element.text)
                            )}{" "}
                        </span>
                    </span>
                </li>
            ))}
            <li>
                <div ref={messagesEndRef}></div>
            </li>
        </ul>
    );
}
