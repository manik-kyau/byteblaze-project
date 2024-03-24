import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../../Utilitis/script";
import Blog from "../Blog/Blog";
import EmptyBookmarksState from "../EmptyBookmarksState/EmptyBookmarksState";

const Bookmarks = () => {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(()=>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    },[]);

    const handleDelete = (id) =>{
		deleteBlog(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
        
	}

    if(blogs.length < 1){
        return <EmptyBookmarksState 
        message={'No Bookmarks Available!'}
        address={'/blogs'}
        label={'Go to Blogs'}
        ></EmptyBookmarksState>
    }

    return (
        <div className="max-w-[1280px] mx-auto my-12 grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{
                blogs.map((blog,idx) =><Blog handleDelete={handleDelete} deletable={true} key = {idx} blog={blog}></Blog>)
            }
		</div>
    );
};

export default Bookmarks;