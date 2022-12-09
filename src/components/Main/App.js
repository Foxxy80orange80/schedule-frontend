
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import StartPage from "../../pages/StartPage/StartPage";
import SignInPage from "../../pages/SignInPage/SignInPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import MainPage from "../../pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}>
        </Route>

        <Route path="/sign-in" element={<SignInPage/>}>
        </Route>

        <Route path="/sign-up" element={<SignUpPage/>}>
        </Route>

        <Route path="/main" element={<MainPage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
