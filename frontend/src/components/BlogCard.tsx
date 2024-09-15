
interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <div className="border-b-[1px] p-1 my-2">
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
                    {publishedDate}
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
    )
}