import {  useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import CreatePost from "../components/Froms/CreatePost/CreatePost";
import Login from "../components/Froms/Login/Login";
import Main from "../pages/Main/Main";
import News from "../pages/News/News";

const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const {item} = useSelector((state) => state.articles)  



  return isAuth ? (
    <Routes>
      <Route path="*" element={<Navigate to="/admin" />} />
      <Route path="/admin" element={<Main />} />
      <Route path="/admin/createPost" element={<CreatePost />} />
      <Route path="admin/news/:id" element={<News />} />
      <Route path="/news/:id" element={
            <News
            id = {item.id}
            key={item.id + item.title}  
            title={item.title}
            content = {item.content}
            />}/>
    </Routes>
  ) : (
    <Routes>
      <Route path="/news/:id" element={
            <News
            id = {item.id}
            key={item.id + item.title}  
            title={item.title}
            content = {item.content}
            />}/>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
