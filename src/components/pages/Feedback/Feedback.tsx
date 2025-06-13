import CodeHeader from "../../../assets/thomas-tastet-hSODeSbvzE0-unsplash.jpg";

const Feedback = () => {
    return (
        <div className="max-w-[1440px] ml-auto mr-auto h-auto">
            <div className="w-full h-[200px]">
                <img src={CodeHeader} alt="Berlin School of Economics and Law Logo" className="h-auto w-full -mt-6" />
            </div>
            <div className="bg-white pl-40 pr-16 pb-16 grid grid-cols-3 gap-4">
                <div className="col-span-2 pr-8">
                    <div className="bg-white pl-0 p-8 text-left">
                        <h1 className="text-[#202020] text-5xl font-bold tracking-tight">Feedback</h1>
                    </div>
                    <div className="h-auto text-black py-6 text-left">
                        <p className="font-bold maintext">
                            For feedback about the chatbot, please use the following form:
                        </p>
                        <br></br>

                        <form action="#" className="space-y-8">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="maintext block mb-2 text-xl font-medium text-gray-900"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="maintext block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500"
                                    placeholder="name@hwr-berlin.de"
                                    required
                                ></input>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="maintext block mb-2 text-xl font-medium text-gray-900"
                                >
                                    Your feedback
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="maintext block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-prigraymary-500"
                                    placeholder="Tell us about your experience with MIKA..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-[#D50C2F] hover:bg-[#771323] sm:w-fit focus:ring-4 focus:outline-none focus:ring-gray-300"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-span-1 mt-12">
                    <div className="bg-gray-100 p-12 text-left">
                        <p className="font-bold">Your feedback:</p>
                        <br></br>
                        <p>
                            MIKA is a prototype and we are very interested in your feedback. Please let us know what you
                            think of MIKA and how we can improve it.
                        </p>
                        <br></br>
                        <br></br>
                        <p className="font-bold">What we are most interested in:</p>
                        <br></br>
                        <p>
                            We are especially interested in cases where MIKA was unable to answer your question or gave
                            you incorrect information. Please let us know what you asked and what MIKA answered.
                        </p>
                        <br></br>
                        <br></br>
                        <p className="font-bold text-red-700">Thank you!</p>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
