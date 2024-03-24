import { useLoaderData } from "react-router-dom";
import placeholderImage from '../../assets/memory.jpg';
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    // const {comments_count,reading_time_minutes,title,public_reactions_count,cover_image,published_at,tags} = blog;
    return (
        <div className="border-2 rounded-lg border-opacity-30 p-2">
            <div
             className="mx-auto group  hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog.cover_image || placeholderImage} />

                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
					{
						blog.tags.map((tag,idx)=><a key={idx} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
					}

				</div>

				<div className="space-y-2">
					<a href={blog.url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</a>
					<Markdown rehypePlugins={[rehypeRaw]}>{blog.body_html}</Markdown>
				</div>
			</div>
        </div>
    );
};

export default Content;