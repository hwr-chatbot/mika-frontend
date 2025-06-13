import React, { useState } from "react";
import { ChatManager } from "../../ChatManager";
import "./ChatBubble.css";
import { questions } from "../../assets/questions";

type Props = {
    message: string;
    chatManager: ChatManager;
};

const questionsLocal = Array.from(questions);

const ChatBubble: React.FC<Props> = (props) => {
    const [question, setQuestion] = useState(props.message);

    const handleClick = () => {
        props.chatManager.sendMessage(question);

        let newQuestion = "";
        do {
            // Rotate the questions
            questionsLocal.push(questionsLocal.shift() as (typeof questionsLocal)[number]);
            newQuestion = questionsLocal[0];
        } while (newQuestion === question);

        setQuestion(newQuestion);
    };

    return (
        <div className="chatBubble" onClick={handleClick}>
            {question}
        </div>
    );
};

export default ChatBubble;
