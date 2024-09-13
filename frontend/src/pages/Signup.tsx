import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

export const Signup = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <Auth type="signup"></Auth>
            </div>
            <div className="hidden md:block">
                <Quote></Quote>
            </div>
        </div>
    )
}
