import { Link } from "react-router-dom"

export const AppBar = () => {
    return (
        <div className="border-b-[1px] flex justify-between px-4 py-2">
            <div className="font-bold p-1 hover:scale-110 transition duration-200">
                <Link to="/blogs">
                    Medium
                </Link>
            </div>
            <div className="flex justify-between gap-4 items-center">
                <div>
                    <Link to="/publish">
                        <button className="bg-green-500 text-white px-3 py-1 font-mono font-semibold rounded-2xl">New</button>
                    </Link>
                </div>
                <div className="w-8 h-8 mx-1">
                    <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="user-male-circle" />
                </div>
            </div>
        </div>
    )
}
