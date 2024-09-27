import axios from "axios"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



export const Publish = () => {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-screen">
            <AppBar />
            <div className="py-4 px-10 my-2">
                <input onChange={(e) => setTitle(e.target.value)} className="w-full border rounded-lg border-slate-300 text-slate-800 h-20 outline-none text-3xl font-semibold px-2" type="text" placeholder="Title" />
                <TextEditor onChange={(e) => setDescription(e.target.value)} />
                <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content: description,
                    }, {
                        headers: {
                            authorization: localStorage.getItem("token"),
                        }
                    });
                    const { id } = response.data;
                    navigate(`/blog/${id}`);

                }} className="px-2 rounded-lg font-thin h-9 hover:bg-blue-700 active:bg-blue-500 bg-blue-500 text-white">Publish Post</button>
            </div>
        </div>
    )
}

function TextEditor({ onChange }: { onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {

    return <div className="w-full my-2 ">
        <textarea onChange={onChange} rows={10} className="rounded-lg w-full h-full outline-none border border-slate-300 text-slate-800 p-2" placeholder="Write an article..."></textarea>
    </div>

}