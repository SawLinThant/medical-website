import { CircleCheck } from "lucide-react";

const Message = () => {
    return(
        <div className="w-full flex flex-row items-center px-8 rounded-lg bg-secondary_color/15 py-6 gap-6">
            <CircleCheck color="#8d8686" strokeWidth={1.25} size={35}/>
            <span className="text-3xl font-semibold text-muted-foreground">Thank You. Your order is confirmed</span>
        </div>
    )
}
export default Message;