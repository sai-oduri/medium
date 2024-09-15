import { SignupInput } from "@o.sai/medium-common"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`, postInputs);
            const jwt = await response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blogs")
        } catch (e) {
            alert("Error while " + type);
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col items-center">
            <div className="text-2xl font-semibold mt-2">
                Create an account
            </div>
            <div className="mb-4 text-sm font-thin text-slate-600">
                {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                <Link to={type === "signup" ? "/signin" : "/signup"} className="ml-1 pointer underline text-slate-800">
                    {type === "signup" ? "Login" : "Create"}
                </Link>
            </div>
            {type === "signup" ? <LabelledInput label="Name" placeholder="Enter your username" type="text" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    name: e.target.value
                });
            }} /> : null}

            <LabelledInput label="Email" placeholder="email@example.com" type="text" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    username: e.target.value
                });
            }} />
            <LabelledInput label="Password" placeholder="1234 . . ." type="password" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    password: e.target.value
                });
            }} />

            <button onClick={sendRequest} className="bg-black text-white p-2 w-80 rounded-3xl mt-3 hover:scale-105 transition-all duration-200 font-extralight">
                {type == "signin" ? "Sign In" : "Sign Up"}
            </button>

        </div>
    )
}

interface labelledInputType {
    label: string,
    placeholder: string,
    type: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}


function LabelledInput({ label, placeholder, type, onChange }: labelledInputType) {
    return <div className="flex justify-center flex-col items-left mb-3">
        <label className="text-sm" htmlFor={label}>{label}</label>
        <input onChange={onChange} className="text-sm w-80 p-2 mt-1 border border-slate rounded-md outline-black outline-1" type={type} placeholder={placeholder} id={label} />
    </div>
}
