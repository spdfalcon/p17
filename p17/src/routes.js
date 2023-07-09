import Index from "./pages/Index/Index"
import CourseInfo from "./pages/CourseInfo/CourseInfo"
import Category from "./pages/Category/Category"
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo"
import Courses from "./pages/Courses/Courses"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
let routes = [
    {path:'/' , element: <Index></Index>},
    {path:'/course-info/:courseName' , element: <CourseInfo></CourseInfo>},
    {path:'/category-info/:categoryName' , element: <Category></Category>},
    {path:'/article-info/:articleName' , element: <ArticleInfo></ArticleInfo>},
    {path:'/courses' , element: <Courses></Courses>},
    {path:'/login' , element: <Login></Login>},
    {path:'/register' , element: <Register></Register>},
]


export default routes