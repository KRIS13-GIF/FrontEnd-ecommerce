import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from './Favorites';
import Home from './Homepage';
import PostPage from './PostPage';
import AppProvider from './AppProvider';
import UpdatePost from './Pages/UpdatePageComponent';
import AdminPage from './Pages/AdminPage';
import UserPage from './Pages/UsersPage';



function App() {
  return (
    
    <AppProvider>
      <BrowserRouter>
      <Routes>

      <Route path='/'element={<Home/>}/>
      <Route path='/fav'element={<Favorites/>}></Route>
      <Route path='/users' element={<UserPage/>}></Route>
      <Route path="/post/:id" element={<PostPage />} />
      <Route path='/fav/:id'element={<Favorites/>}/>
      <Route path='/update/:id' element={<UpdatePost/>}/>
      <Route path='/admin/:id' element={<AdminPage/>}/>
      
     
      </Routes>
      </BrowserRouter>
      </AppProvider>
   
  );
}

export default App;
