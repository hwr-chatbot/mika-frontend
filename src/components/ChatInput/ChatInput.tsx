import { ChatManager } from "../../ChatManager";
import "./ChatInput.css";

type ChatInputProps = {
    chatManager: ChatManager;
};

export default function ChatInput(props: ChatInputProps) {
    return (
        <form className="mb-4">
            <input
                id="chat_input"
                type="text"
                enterKeyHint="enter"
                placeholder="Message"
                className="ml-[2.5%] w-[77.5%] rounded-md border-4 border-gray-400 p-2 focus:border-[#4979a6] focus:ring-0 focus:outline-none"
                onKeyDown={(e) => {
                    if (e.key == "Enter" && e.currentTarget.value !== "") {
                        props.chatManager.sendMessage(e.currentTarget.value);
                        e.currentTarget.value = "";
                    }
                }}
            />
            <button
                className="ml-[1%] mr-[2.5%] w-[16.5%] h-[48px] text-white text-lg font-bold bg-[#D50C2F] hover:bg-[#771323] rounded-md"
                onClick={(e) => {
                    if (document.getElementById("chat_input") !== null) {
                        const message = document.getElementById("chat_input") as HTMLInputElement;
                        if (message.value !== "") {
                            props.chatManager.sendMessage(message.value);
                            message.value = "";
                        }
                    }
                    e.preventDefault();
                }}
            >
                Send
            </button>
        </form>
    );
}
