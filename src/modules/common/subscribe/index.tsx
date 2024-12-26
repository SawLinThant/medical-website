import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Mail } from "lucide-react"

const Subscribe = () => {
    return(
        <div className="lg:w-full w-full md:w-2/5 lg:min-h-[23rem] md:min-h-[12rem] min-h-5 p-4 flex flex-col gap-4 border rounded lg:mt-2 bg-[url('/images/footer-background.jpg')] bg-cover bg-center">
          <div className="w-full min-h-[7rem] flex flex-col items-center gap-3 mt-10">
            <h1 className="text-2xl text-secondary_color">
                15% OFF
            </h1>
            <span className="font-semibold text-center">For new members signup for the first time</span>
          </div>
          <form action="" className="w-full flex flex-col items-center gap-4 p-3 lg:pb-5 pb-8">
            <div className="w-full relative">
                <Input type="email" className="h-[2.75rem] w-full pl-14 focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="Enter your email address"/>
                <div className="absolute top-2 left-4">
                    <Mail/>
                </div>
            </div>
            <div className="w-full relative">
                <Input type="password" className="h-[2.75rem] w-full pl-14 focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="Enter your password"/>
                <div className="absolute top-2 left-4">
                   <Lock/>
                </div>
            </div>
            <Button className="rounded-md lg:mt-2 mt-6 bg-secondary_color text-white">Register Now</Button>
          </form>
        </div>
    )
}
export default Subscribe