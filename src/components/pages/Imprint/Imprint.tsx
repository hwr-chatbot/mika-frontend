import DeskHeader from "../../../assets/nathan-dumlao-ewGMqs2tmJI-unsplash.jpg";

const Imprint = () => {
    return (
        <div className="max-w-[1440px] ml-auto mr-auto h-auto">
            <img src={DeskHeader} alt="Berlin School of Economics and Law Logo" className="h-auto w-full -mt-6" />
            <div className="bg-white pl-40 pr-40 pb-16 text-left">
                <div className="bg-white pl-0 p-8 text-left">
                    <h1 className="text-[#202020] text-5xl font-bold tracking-tight">Imprint</h1>
                </div>
                <div className="max-w-[800px] h-auto text-black py-6 maintext">
                    <p className="font-bold">Rechtlicher Sitz</p>
                    <br></br>
                    <p>Hochschule für Wirtschaft und Recht Berlin</p>
                    <br></br>
                    <br></br>
                    <p className="font-bold">Anschrift</p>
                    <br></br>
                    <p>Hochschule für Wirtschaft und Recht Berlin Badensche Straße 52 10825 Berlin</p>
                    <br></br>
                    <p>Telefon: +49 (0)30 30877-0 Fax: +49 (0)30 30877-1199</p>
                    <br></br>
                    <p>
                        Vertretungsberechtigt: Prof. Dr. Jens Hermsdorf (Präsident) Verantwortlich für den Inhalt:
                        Sharif Thib (Leiter Zentralreferat Hochschulkommunikation) Anfragen zum Inhalt:
                        internetredaktion(at)hwr-berlin.de
                    </p>
                    <br></br>
                    <br></br>
                    <p className="font-bold">Rechtsform</p>
                    <br></br>
                    <p>
                        Die Hochschule für Wirtschaft und Recht Berlin ist eine Körperschaft des öffentlichen Rechts
                        gem. §§ 1 und 2 Berliner Hochschulgesetz (BerlHG).
                    </p>
                    <br></br>
                    <p>
                        Informationen zum Thema Datenschutz an der HWR Berlin: Hinweise zum Datenschutz Das Webangebot
                        der HWR Berlin unterliegt dem geltenden Urheberrecht. Beachten Sie bitte auch unseren
                        Haftungsausschluss/Disclaimer.
                    </p>
                    <br></br>
                    <p className="font-bold">Umsatzsteueridentifikationsnummer: DE263545251</p>
                </div>
            </div>
        </div>
    );
};

export default Imprint;
