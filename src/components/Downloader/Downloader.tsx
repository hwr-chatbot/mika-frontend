const Downloader = ({ data, fileName }: { data: any; fileName: any }) => {
    const Downloader = () => {
        const list_wrap = document.querySelector(data) as HTMLElement;
        const list = Array.from(list_wrap.getElementsByTagName("li"));

        type exportData = {
            [key: string]: string;
        };

        let export_data: exportData = {};
        let msg_number = 0;

        list.forEach((element) => {
            if (element.classList.contains("chatview-bot-message")) {
                export_data["mika_msg_" + msg_number] = element.innerText.replace(/"/g, "'");
                msg_number++;
            } else if (element.classList.contains("chatview-me-message")) {
                export_data["user_msg_" + msg_number] = element.innerText.replace(/"/g, "'");
                msg_number++;
            }
        });

        const jsonData = new Blob([JSON.stringify(export_data, null, "\t")], { type: "application/json" });
        const jsonURL = URL.createObjectURL(jsonData);
        const link = document.createElement("a");
        link.href = jsonURL;
        link.download = `${fileName}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return <button className="absolute w-2 h-2 top-0 left-0 bg-slate-200" onClick={Downloader}></button>;
};

export default Downloader;
