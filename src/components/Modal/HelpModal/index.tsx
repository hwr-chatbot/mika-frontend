import ModalWindow from "../ModalWindow";
import Content from "./Content";

const HelpModal = () => {
    return <ModalWindow content={<Content />} symbol="❓" />;
};

export default HelpModal;
