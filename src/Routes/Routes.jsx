import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Blogs from "../Components/Blogs/Blogs";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import Bookmarks from "../Components/Bookmarks/Bookmarks";
import Content from "../Components/Content/Content";
import Author from "../Components/Author/Author";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/blogs',
          loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
          element:<Blogs></Blogs>,
        },
        {
          path: '/blog/:Id',
          element:<BlogDetails></BlogDetails>,
          loader:({params}) => fetch(`https://dev.to/api/articles/${params.Id}`),
          children:[
            {
                index: true,
                element:<Content></Content>,
                loader:({params})=> fetch(`https://dev.to/api/articles/${params.Id}`),
            },
            {
                path:'author',
                element:<Author></Author>,
                loader:({params})=> fetch(`https://dev.to/api/articles/${params.Id}`),
            }
          ]
        },
        {
          path: '/bookmarks',
          element:<Bookmarks></Bookmarks>
        }
      ]
    },
    
  ]);