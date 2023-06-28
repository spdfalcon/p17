import Index from "./pages/Index/Index"
import CourseInfo from "./pages/CourseInfo/CourseInfo"
import Category from "./pages/Category/Category"
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo"
let routes = [
    {path:'/' , element: <Index></Index>},
    {path:'/course-info/:courseName' , element: <CourseInfo></CourseInfo>},
    {path:'/category-info/:categoryName' , element: <Category></Category>},
    {path:'/article-info/:articleName' , element: <ArticleInfo></ArticleInfo>},
]


export default routes