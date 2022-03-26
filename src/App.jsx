import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import News from "./pages/News";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Main/>}/>
        <Route path="/news" element = {<News/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
