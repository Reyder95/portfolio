import Technologies from './components/technologies';
import Headerview from './components/headerview';
import Navbar from './components/navbar';
import Aboutme from './components/aboutme';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Headerview />
      <Navbar />
      <Aboutme />
      <Projects />
      <Technologies />
    </div>
  );
}

export default App;
