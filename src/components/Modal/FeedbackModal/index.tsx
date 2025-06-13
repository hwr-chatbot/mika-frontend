import ModalWindow from "../ModalWindow";
import Content from "./Content";

const FeedbackModal = () => {
    return <ModalWindow content={<Content />} symbol="📣" />;
};

export default FeedbackModal;
