import LaptopHeader from "../../../assets/mohammad-rahmani-8qEB0fTe9Vw-unsplash.jpg";

const About = () => {
    return (
        <div className="max-w-[1440px] ml-auto mr-auto h-auto">
            <div className="w-full h-[200px]">
                <img src={LaptopHeader} alt="Berlin School of Economics and Law Logo" className="h-auto w-full -mt-6" />
            </div>
            <div className="bg-white pl-40 pr-16 pb-16  grid grid-cols-3 gap-4">
                <div className="col-span-2 pr-8">
                    <div className="bg-white pl-0 p-8 text-left">
                        <h1 className="text-[#202020] text-5xl font-bold tracking-tight">About the project</h1>
                    </div>
                    <div className="max-w-[800px] h-auto text-black py-6 maintext text-left">
                        <p className="font-bold">Why are we developing a chatbot for the HWR Berlin?</p>
                        <br></br>
                        <p>
                            Artificial intelligence (AI) has developed significantly in recent years and has become
                            accessible to a wider range of people. Chatbots in particular have established themselves as
                            important tools in various areas. Chatbots offer the potential to optimize work processes
                            and facilitate access to information.
                        </p>
                        <br></br>
                        <p>
                            The ability to understand and respond to natural language is a key success factor for modern
                            chatbots. The progress that natural language processing (NLP) has made in recent years has
                            been largely made possible by large amounts of data and powerful algorithms such as neural
                            networks.
                        </p>
                        <br></br>
                        <p>
                            In order to reduce the workload of the study program service at the HWR Berlin, the
                            advantages of chatbots are also to be used at the university and therefore one will be
                            implemented to answer inquiries from international prospective students. The aim is to
                            significantly reduce the number of email inquiries to the study program service and at the
                            same time create an efficient and user-friendly source of information for prospective
                            students.
                        </p>
                        <br></br>
                        <p>
                            The implementation of this project was placed in the hands of students as part of study
                            projects. As a result, the project team involved changes every one or two semesters.
                        </p>
                    </div>
                </div>
                <div className="col-span-1 mt-12">
                    <div className="bg-gray-100 p-12 text-left">
                        <p className="font-bold">List of contributors:</p>
                        <br></br>
                        <p>
                            Arian Härtl <br></br>
                            Dimitar Dimitrov <br></br>
                            Fabian Rother <br></br>
                            Pascal Heyn <br></br>
                            Corinne Kessler<br></br>
                            Luca Dommel <br></br>
                            Marc Andresen<br></br>
                            Lucas Brüning<br></br>
                            Nadine Schatz<br></br>
                            Florian Winkler<br></br>
                        </p>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
