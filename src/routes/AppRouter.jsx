import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/Froms/Login";
import Admin from "../pages/Admin/Admin";
import Main from "../pages/Main/Main";
import News from "../pages/News/News";

const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const {item} = useSelector((state) => state.articles)  
  console.log(item)



  return isAuth ? (
    <Routes>
      <Route path="*" element={<Navigate to="/admin" />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="admin/news/:id" element={<News />} />
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
