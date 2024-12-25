
const Footer:React.FC = () => {
    return(
        <footer className="w-full flex items-center justify-center p-4 flex-col">
            <div className="w-full min-h-[14rem] max-w-[1300px] grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 items-start justify-between gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-lg">Customer Service</h1>
                    <span className="text-sm text-secondary_color">Help and FAQs</span>
                    <span className="text-sm text-secondary_color">Returns and Refunds</span>
                    <span className="text-sm text-secondary_color">Refer a friend</span>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-lg">Company</h1>
                    <span className="text-sm text-secondary_color">About Us</span>
                    <span className="text-sm text-secondary_color">Carriers</span>
                    <span className="text-sm text-secondary_color">Locations</span>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-lg">Terms and Policies</h1>
                    <span className="text-sm text-secondary_color">Duties and Taxes</span>
                    <span className="text-sm text-secondary_color">Privacy and Policies</span>
                    <span className="text-sm text-secondary_color">Terms and Conditions</span>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-lg">Follow Us</h1>
                    <span className="text-sm text-secondary_color">X.com</span>
                    <span className="text-sm text-secondary_color">Instagram</span>
                    <span className="text-sm text-secondary_color">Facebook</span>
                    <span className="text-sm text-secondary_color">Telegram</span>
                </div>
            </div>
            <div className="w-full min-h-6 lg:mt-2 mt-4">
               <div className="text-xs text-center">
                    Powered By <span className="font-bold ml-1 text-sm">AXRA Tech</span>
               </div> 
            </div>
        </footer>
    )
}
export default Footer