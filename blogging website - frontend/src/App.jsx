import Navbar from './components/navbar.component';
import { Routes, Route } from "react-router-dom";
import UserAuthForm from './pages/userAuthForm.page';
import { createContext, useState, useEffect } from 'react';
import { lookInSession } from './common/session';
import Editor from './pages/editor.pages';
import Homepage from './pages/home.page';
//import Homepage from './pages/home.page';
import SearchPage from './pages/search.page';
import PageNotFound from './pages/404.page';
import ProfilePage from './pages/profile.page';

export const UserContext = createContext({})

const App = () => {


    const [userAuth, setUserAuth] = useState({});

    useEffect(() => {

        let userInSession = lookInSession("user");

        userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth({access_token: null })

    }, [])



    return (
        <UserContext.Provider value = {{userAuth, setUserAuth}}>
          <Routes>
          <Route path='/editor' element={<Editor/>}/>

              <Route path="/" element ={<Navbar/>}>
                <Route index element={<Homepage/>}/>
                <Route path="signin" element ={<UserAuthForm type="sign-in"/>} />
                <Route path="signup" element ={<UserAuthForm type="sign-up"/>} />
                <Route path="search/:query" element={<SearchPage/>}/>
                <Route path="user/:id" element={<ProfilePage/>}></Route>
                <Route path="*"element={<PageNotFound/>}/>
            </Route>
          </Routes>
        </UserContext.Provider>
     
    );
}

export default App;