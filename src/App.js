import logo from './logo.svg';
import './App.css';
import { MainPage } from './pages/MainPage/MainPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { FinalPage } from './pages/FinalPage/FinalPage';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route index element={<MainPage />}/>
      <Route path='/home' element={<MainPage />} />
      <Route path='/contacts' element={<ContactsPage />} />
      <Route path='/final' element={<FinalPage />} />
    </Routes>
    </ HashRouter>
  );
}

export default App;
