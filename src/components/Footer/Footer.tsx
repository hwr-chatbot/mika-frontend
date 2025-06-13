const Footer = () => {
    return (
        <div className="max-w-[1440px] ml-auto mr-auto h-auto">
            <footer>
                <div className="flex justify-center items-center pt-6 pb-6 bg-[#D50C2F] text-white">
                    <nav className="flex items-center">
                        <span className="text-sm text-white font-bold pr-32">© HWR Berlin 2025</span>
                        <a href="https://www.hwr-berlin.de/" className="text-sm text-white hover:text-gray-300">
                            Hochschule für Wirtschaft und Recht Berlin
                        </a>
                        <a
                            href="#"
                            className="text-sm text-white border-l-[1px] border-l-[#c4c5c7] ml-4 pl-4 hover:text-gray-300"
                        >
                            Data Security
                        </a>
                        <a
                            href="#"
                            className="text-sm text-white border-l-[1px] border-l-[#c4c5c7] ml-4 pl-4 hover:text-gray-300"
                        >
                            Imprint
                        </a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
