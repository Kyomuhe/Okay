import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Home/home";
import Prof from "./components/Auth/Prof";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Normal from "./components/Auth/Normal";
import HideId from "./components/Auth/HideId";
import DontHide from "./components/Auth/DontHide";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path ="/signup" element = {<SignUp/>}/>
        <Route path ="/prof" element = {<Prof/>}/>
        <Route path = "/normal" element = {<Normal/>}/>
        <Route path = "/hide" element = {<HideId/>}/>
        <Route path = "/dont" element = {<DontHide/>}/>

      </Routes>
    </BrowserRouter>

  )
}
export default App;