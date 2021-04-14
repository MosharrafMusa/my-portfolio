
import './App.css';
import RecentProjects from './components/RecentProjects/RecentProjects';
import TopBanner from './components/TopBanner/TopBanner';
import TopNavigation from './components/TopNavigation/TopNavigation';
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import {BrowserRouter} from 'react-router-dom';
import AppRoute from './router/AppRoute'

function App() {
  return (
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
