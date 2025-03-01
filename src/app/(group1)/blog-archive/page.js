import Feedback from "@/components/section/feedback"
import BlogCard from "@/components/ui/cards/blogCard"
import Pagination from "@/components/ui/pagination"
import SectionTitle from "@/components/ui/sectionTitle"
import { blogData } from "@/lib/fackData/blogData"

export const metadata = {
    title: "Jangra Build Wave",
    description: "Jangra Interior",
  };
const BlogArchive = () => {
    return (
        <>
            <section>
                <div className='container-fluid '>
                    <SectionTitle sectionName={"Blogs"} sectionTitle={"Design Insights & Inspiration"} sectionDesc={"Unveil the Secrets to Transforming Spaces"} />
                </div>
                <div className="container lg:py-30 2sm:py-20 py-14">
                    <div className="grid lg:grid-cols-3 2sm:grid-cols-2 gap-x-5 gap-y-[75px]">
                        {
                            blogData.map(({ id, date, tag, thumb, title,slug }) => <div key={id}> <BlogCard date={date} tag={tag} thumb={thumb} title={title} slug={slug} /> </div>)
                        }
                    </div>
                </div>
                <Pagination />
            </section>
            <Feedback/>
        </>
    )
}

export default BlogArchive