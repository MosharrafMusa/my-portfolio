
import './App.css';
import RecentProjects from './components/RecentProjects/RecentProjects';
import TopBanner from './components/TopBanner/TopBanner';
import TopNavigation from './components/TopNavigation/TopNavigation';
function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <TopBanner/>
      <RecentProjects/>
    </div>
  );
}

export default App;
