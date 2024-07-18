import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';

//pages import

import Home from './components/Home/Home';
import Modeling from './components/3D_Modeling/3DModeling';
import WebDevelopment from './components/Web_Development/WebDevelopment';
import GraphicDesign from './components/GraphicDesign/GraphicDesign';
import Contact from './components/Contact/Contact';

//styles import
import './styles/App.scss';

function App() {
  return (
    <>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/3d-modeling" element={<Modeling />} />
          <Route path="/web-development" element={<WebDevelopment/>} />
          <Route path="/graphic-design" element={<GraphicDesign/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
