import { Link } from "react-router-dom";
import placeholderImage from '../../assets/memory.jpg'
import { TiDelete } from "react-icons/ti";
const Blog = ({blog, deletable,handleDelete}) => {
	
	const {cover_image,title,description,published_at,id} =blog;

    return (
        <div className="flex relative">
		<div className="transition border-2 hover:border-secondary hover:scale-105 rounded-lg border-opacity-30">
            <Link to={`/blog/${id}`}
             className="max-w-sm mx-auto group  hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
        </div>

			{deletable && <div onClick={()=>handleDelete(id)} className="absolute -right-5 -top-5 hover:scale-105"><TiDelete className="text-4xl text-red-600"></TiDelete></div>}

		</div>
    );
};

export default Blog;