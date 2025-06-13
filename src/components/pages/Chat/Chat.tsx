import ChatInput from "../../ChatInput/ChatInput";
import ChatView from "../../ChatView/ChatView";
import { ChatMessage } from "../../../types/ChatMessage";
import "./Chat.css";
import { ChatManager } from "../../../ChatManager";
import ChatBubble from "../../ChatBubble/ChatBubble";
import { questions } from "../../../assets/questions";
import MikaHeader from "../../../assets/mika_header.jpg";
import Downloader from "../../Downloader/Downloader";

type ChatProps = {
    host: string;
    port: number;
    useHttps: boolean;
};

export default function Chat({}: ChatProps) {
    const firstMessage: ChatMessage = {
        fromBot: true,
        text: "Hi, my name is MIKA. Im a chatbot and I can help you get more information about the master programs for international students at the HWR. Please write a new message for each request, keep them simple and don't provide any personal data.",
    };
    const chatManager = new ChatManager(firstMessage);
    const fileName = "mika_chat_" + new Date().toISOString().slice(0, -8);

    return (
        <div className="max-w-[1440px] ml-auto mr-auto h-auto">
            <div className="w-full h-[200px]">
                <img src={MikaHeader} alt="Berlin School of Economics and Law Logo" className="h-auto w-full -mt-6" />
            </div>
            <div className="bg-white pl-40 pr-16 pb-16 grid grid-cols-3 gap-4">
                <div className="col-span-2 pr-8">
                    <div className="bg-white pl-0 p-8 text-left">
                        <div className="flex items-center gap-3">
                            <h1 className="text-[#202020] text-5xl font-bold tracking-tight">Chat with MIKA</h1>
                            <span className="bg-gray-600 text-white text-sm font-semibold px-3 mt-1 py-1 rounded-full">
                                BETA
                            </span>
                        </div>
                    </div>
                    <div className="chat-container relative text-md text-white h-[600px] pb-4 overflow-hidden rounded-md border-4 bg-white flex justify-items-end justify-end flex-col">
                        <Downloader data={".chatview-history"} fileName={fileName} />
                        <div className="chatview-container p-4 overflow-y-auto h-[90%]">
                            <ChatView history={chatManager.getHistory()} />
                        </div>
                        <div className="chatbubble-container">
                            <ChatBubble chatManager={chatManager} message={questions[0]} />
                            <ChatBubble chatManager={chatManager} message={questions[1]} />
                            <ChatBubble chatManager={chatManager} message={questions[2]} />
                        </div>
                        <div className="chatinput-container w-full h-[50px] text-black">
                            <ChatInput chatManager={chatManager} />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 mt-12">
                    <div className="bg-gray-100 p-12 text-left">
                        <p className="font-bold text-red-700">WARNING:</p>
                        <br></br>
                        <p>
                            Dear visitor, this chatbot is a work-in-progress. Please do not rely on the information
                            provided by MIKA. We thank you for your understanding.
                        </p>
                        <br></br>
                        <br></br>
                        <p className="font-bold">How to use MIKA:</p>
                        <br></br>
                        <p>
                            Ask MIKA simple, short questions with key words about your enquiry. MIKA will do its best to
                            find an answer for you. MIKA does not save or remember any previous information, so it can
                            not recall any previous exchanges it has had. Please remember to always seek advice directly
                            via email, telephone or in-person consultation with the Student Advisory staff. Feedback can
                            be sent to{" "}
                            <a href="mailto:studienberatung@hwr-berlin.de" className="text-blue-600 hover:underline">
                                studienberatung@hwr-berlin.de
                            </a>
                            .
                        </p>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    );
}
