import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Loing from "./components/Froms/Loing";
import Main from "./pages/Main/Main";
import News from "./pages/News/News";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Main/>}/>
        <Route path="/news" element = {<News/>}/>
        <Route path ="/login" element = {<Loing/>}/>
        <Route
        path="*"
        element={<Navigate to="/" />}
    />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
