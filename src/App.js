import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './screens/AboutMe';
import Projects from './screens/Projects';
import Contacto from './screens/Contact';
import Header from './components/Header';
import PrincipalPage from './screens/PrincipalPage';
import Video from './components/Video';
import ProjectBackHome from './screens/ProjectBackHome';
import ProjectOdoo from './screens/ProjectOdoo'
import './App.css';

function App() {

  return (
    <>
      <Router>
          <Header />
          <Routes>
          <Route path="/devfolio" element={<PrincipalPage />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ProjectBackHome" element={<ProjectBackHome />} />
          <Route path="/ProjectOdoo" element={<ProjectOdoo />} />
          <Route path="/project/:projectId" element={<Video />} />
          <Route path="/contacto" element={<Contacto />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
