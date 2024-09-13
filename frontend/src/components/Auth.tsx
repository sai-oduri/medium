import { Link } from "react-router-dom"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    return (
        <div className="h-screen flex justify-center flex-col items-center">
            <div className="text-2xl font-semibold mt-2">
                Create an account
            </div>
            <div className="mb-4 text-sm font-thin text-slate-600">
                Already have an account?
                <Link to="/signin" className="ml-1 pointer underline text-slate-800">Login</Link>
            </div>
            <LabelledInput label="Username" placeholder="Enter your username" type="text" />
            <LabelledInput label="Email" placeholder="email@example.com" type="text" />
            <LabelledInput label="Password" placeholder="" type="password" />

        </div>
    )
}

interface labelledInputType {
    label: string,
    placeholder: string,
    type: string
}


function LabelledInput({ label, placeholder, type }: labelledInputType) {
    return <div className="flex justify-center flex-col items-left mb-3">
        <label className="text-sm" htmlFor={label}>{label}</label>
        <input className="text-sm w-64 p-2 mt-1 border border-slate rounded-md outline-black outline-1" type={type} placeholder={placeholder} id={label} />
    </div>
}
