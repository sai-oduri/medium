import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"


export const Blogs = () => {
    return (
        <div>

            <AppBar />

            <div className="flex justify-center flex-col items-center max-w-2xl m-auto mt-2">
                <BlogCard
                    authorName="Sai Oduri"
                    title="How much JavaScript do you need to know as a React developer?"
                    content="JavaScript is vast and full of surprises. If you’re starting with JavaScript or planning to learn React or preparing for a React interview, understanding these key concepts is crucial. This blog covers all the fundamentals. Let’s dive in and get you ready for a smooth React journey!"
                    publishedDate="2nd feb 2024"
                />
            </div>

        </div>
    )
}