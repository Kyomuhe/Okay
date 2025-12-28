import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Home/home";
import Prof from "./components/Auth/Prof";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Normal from "./components/Auth/Normal";
import HideId from "./components/Auth/HideId";
import DontHide from "./components/Auth/DontHide";
import Main from "./components/LoggedIn/Main";
import CreatePostPage from "./components/LoggedIn/CreatePost";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import {store } from "./store/store";
const App = () => {
  return (
    <Provider store={store }>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/prof" element={<Prof />} />
        <Route path="/normal" element={<Normal />} />
        <Route path="/hide" element={<HideId />} />
        <Route path="/dont" element={<DontHide />} />
        <Route path="/main" element={<Main />} />
        <Route path="/create" element={<CreatePostPage />} />

      </Routes>
    </BrowserRouter>
    </Provider>

  )
}
export default App;