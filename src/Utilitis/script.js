import { toast } from 'react-toastify';

const getBlogs = () =>{
    let blogs = [];
 const storedBlogs = localStorage.getItem('blogs');
 if(storedBlogs){
    blogs = JSON.parse(storedBlogs);
 }
 return blogs;
}

const saveBlogsLs = (blog) =>{
    const blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blog.id);
    if(isExist){
        return toast.error("Allready BookMarked.!");
    }
    blogs.push(blog);
    localStorage.setItem('blogs' ,JSON.stringify(blogs));
    toast.success("Blog Bookmark Successfully.!");
}

const deleteBlog = (id) =>{
    const blogs = getBlogs();
    const remaining = blogs.filter(b => b.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success("Blog Remove From Bookmarks.!");
}

export { getBlogs,saveBlogsLs,deleteBlog };