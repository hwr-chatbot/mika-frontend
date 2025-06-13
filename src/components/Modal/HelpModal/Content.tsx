import "./Content.css";
import { questions } from "../../../assets/questions";

export default function Content() {
    return (
        <>
            <div className="content">
                <h2>About MIKA</h2>
                <span>
                    This chatbot was created as part of several student research projects by students of the HWR Berlin.
                    It can answer questions on various topics related to the HWR.
                    <br /> <br />
                    Here are some questions you can ask Mika:
                    <ul className="questions">
                        {questions.map((question) => (
                            <li>{question}</li>
                        ))}
                    </ul>
                </span>
            </div>
        </>
    );
}
