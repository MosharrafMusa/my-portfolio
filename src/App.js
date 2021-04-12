
import './App.css';
import RecentProjects from './components/RecentProjects/RecentProjects';
import TopBanner from './components/TopBanner/TopBanner';
import TopNavigation from './components/TopNavigation/TopNavigation';
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <TopBanner/>
      <About/>
      <RecentProjects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
