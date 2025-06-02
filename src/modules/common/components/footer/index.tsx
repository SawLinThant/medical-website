import Facebook from "../../icons/facebook"
import Instagram from "../../icons/instagram"
import Telegram from "../../icons/telegram"
import QRCode from "react-qr-code";

const Footer:React.FC = () => {
    return(
        <footer className="w-full flex items-center justify-center flex-col bg-[url('/images/footer-background.jpg')] bg-cover bg-center">
            <div className="w-full min-h-[6rem] max-w-[1300px] grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 items-start justify-between gap-4 mt-12 p-4">
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-lg">Customer Service</h1>
                    <span className="text-sm lg:ml-0 md:ml-0 ml-3 text-secondary_color">Help and FAQs</span>
                    <span className="text-sm lg:ml-0 md:ml-0 ml-3 text-secondary_color">Returns and Refunds</span>
                    <span className="text-sm lg:ml-0 md:ml-0 ml-3 text-secondary_color">Refer a friend</span>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-lg">Terms and Policies</h1>
                    <span className="text-sm lg:ml-0 md:ml-0 ml-3 text-secondary_color">Duties and Taxes</span>
                    <span className="text-sm lg:ml-0 md:ml-0 ml-3 text-secondary_color">Privacy and Policies</span>
                    <span className="text-sm lg:ml-0 md:ml-0 ml-3 text-secondary_color">Terms and Conditions</span>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-lg">Follow Us</h1>
                    <span className="text-sm lg:ml-0 md:ml-0 ml-3 text-secondary_color flex flex-row items-center gap-2">
                        <Facebook height="25" width="25" />
                        <div>Facebook</div>
                    </span>
                    <span className="text-sm lg:ml-0 md:ml-0 ml-3 text-secondary_color flex flex-row items-center gap-2">
                        <Instagram height="25" width="25" />
                        <div>Instagram</div>
                    </span>
                    <span className="text-sm lg:ml-0 md:ml-0 ml-3 text-secondary_color flex flex-row items-center gap-2">
                        <Telegram height="25" width="25" />
                        <div>Telegram</div>
                    </span>
                </div>
                <div className="flex flex-col gap-4">
                     <h1 className="font-semibold text-lg">Natsay Myanmar</h1>
                     <QRCode value="https://natsaymyanmar.com" size={100} />
                    {/* qr code here */}
                </div>
                    
            </div>
            <div className="w-full bg-white min-h-4 lg:mt-2 mt-4 py-3">
               <div className="text-xs text-center">
               All Reserved By <span className="font-bold ml-1 text-sm"> Natsay Myanmar</span>
               </div> 
            </div>
        </footer>
    )
}
export default Footer