import { useState } from "react";
import { ChatMessage } from "./types/ChatMessage";

type ChatHistory = {
    history: ChatMessage[];
};

const requestOptions: RequestInit = {
    method: "POST",
    mode: "cors",
};

type RasaApiResponse = {
    text: string;
    image: string;
    recipient: string;
};

const delay = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export class ChatManager {
    private chatHistory;
    private setChatHistory;

    constructor(firstMessage: ChatMessage) {
        const [chatState, setChatState] = useState<ChatHistory>({
            history: [firstMessage],
        });
        this.chatHistory = chatState;
        this.setChatHistory = setChatState;
    }

    getHistory() {
        return this.chatHistory.history;
    }

    sendMessage(message: string) {
        let message_id: number;
        this.chatHistory.history.push({ text: message, fromBot: false });
        this.setChatHistory({
            history: this.chatHistory.history,
        });

        console.log(this.chatHistory);

        delay(350).then(() => {
            this.chatHistory.history.push({ text: "...", fromBot: true });
            this.setChatHistory({
                history: this.chatHistory.history,
            });
            message_id = this.chatHistory.history.length - 1;
        });

        fetch("http://0.0.0.0:5005/webhooks/rest/webhook", {
            ...requestOptions,
            body: JSON.stringify({
                sender: "lucas",
                message: message,
            }),
        })
            .then((raw) => raw.json())
            .then((data: any[]) => {
                let response: string = data
                    .map((response: any) => {
                        if (response.text !== undefined) return response.text;
                        if (response.image !== undefined) return response.image;
                    })
                    .join("\r\n");

                delay(750).then(() => {
                    this.chatHistory.history[message_id] = { text: response, fromBot: true };
                    this.setChatHistory({
                        history: this.chatHistory.history,
                    });
                });
            })
            .catch(function (error) {
                console.log("Error while fetching!\n" + error);
            });
    }
}
