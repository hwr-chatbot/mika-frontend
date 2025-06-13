import DeskHeader from "../../../assets/nathan-dumlao-ewGMqs2tmJI-unsplash.jpg";

const DataSecurity = () => {
    return (
        <div className="max-w-[1440px] ml-auto mr-auto h-auto">
            <img src={DeskHeader} alt="Berlin School of Economics and Law Logo" className="h-auto w-full -mt-6" />
            <div className="bg-white pl-40 pr-40 pb-16 text-left">
                <div className="bg-white pl-0 p-8 text-left">
                    <h1 className="text-[#202020] text-5xl font-bold tracking-tight">Data Security</h1>
                </div>
                <div className="max-w-[800px] h-auto text-black py-6 maintext">
                    <p>At HWR Berlin, we take data protection and privacy seriously.</p>
                    <br></br>
                    <p>This application does not collect, store, or process any personal data.</p>
                    <br></br>
                    <p>
                        All interactions take place in real-time and are not saved or logged in any form. There is no
                        tracking, profiling, or history of previous user inputs.
                    </p>
                    <br></br>
                    <p>Your use of the chatbot remains completely anonymous and transient.</p>
                </div>
            </div>
        </div>
    );
};

export default DataSecurity;
