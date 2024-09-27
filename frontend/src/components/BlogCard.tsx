import { Link } from "react-router-dom"

interface BlogCardProps {
    id: string,
    authorName: string,
    title: string,
    content: string,
    created_at: string,
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    created_at,
}: BlogCardProps) => {

    const isoDate: string = created_at;
    const date: Date = new Date(isoDate);

    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };

    const formattedDate: string = date.toLocaleDateString('en-GB', options);

    return (
        <Link className="w-screen md:w-full" to={`/blog/${id}`}>

            <div className="border-b-[1px] p-1 my-2 w-screen md:w-full cursor-pointer">
                <div className="flex font-extralight items-center">
                    <div className="w-6 h-6 rounded-full bg-slate-500 text-center text-white mx-1">
                        {authorName[0].toUpperCase()}
                    </div>
                    <div className="mx-1 text-sm">
                        {authorName}
                    </div>
                    <div className="bg-slate-700 h-1 w-1 rounded-full">
                    </div>
                    <div className="mx-1 font-thin text-slate-500 text-sm">
                        {formattedDate}
                    </div>
                </div>
                <div className="text-xl font-bold">
                    {title}
                </div>
                <div className="font-thin text-base">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-500 text-sm font-light">
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>
            </div>
        </Link>
    )
}