import './App.css';
import { AboutSection } from './components/AboutusSection/AboutSection';
import Layout from './components/Loyout';

function App() {
  return (
    <div className="App">
      <Layout>
        <AboutSection/>
      </Layout>
    </div>
  );
}

export default App;
