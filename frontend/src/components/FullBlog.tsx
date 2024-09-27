
import { Blog } from "../hooks/index"

import { AppBar } from "./AppBar";

const FullBlog = ({ blog }: { blog: Blog | undefined }) => {

    let formattedDat: string = "";

    if (blog) {

        const isoDate: string = blog.created_at;
        const date: Date = new Date(isoDate);

        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };

        formattedDat = date.toLocaleDateString('en-GB', options);
    }

    return (
        <div className="w-screen h-screen">

            <AppBar />

            {blog &&

                <div className="grid grid-cols-12 px-8 py-24">
                    <div className="col-span-8 mr-2">
                        <div className="text-4xl font-extrabold m-1">
                            {blog.title}
                        </div>
                        <div className="m-1">
                            {formattedDat}
                        </div>
                        <div className="text-slate-700 m-1">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4 my-1">

                        <div className="flex">

                            <div className="bg-black h-16 w-[1px] mx-1"></div>

                            <div className="">

                                <div className="text-2xl font-semibold">Author</div>

                                <div className="flex justify-start mt-1">
                                    <div className="w-6 h-6 rounded-full bg-slate-500 text-center text-white mr-1">
                                        {(blog.author.name || "Anonymous")[0].toUpperCase()}
                                    </div>
                                    <div className="text-slate-700">{blog.author.name || "Anonymous"}</div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            }

        </div>
    )
}

export default FullBlog;