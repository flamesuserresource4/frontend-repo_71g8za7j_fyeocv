import HeroCover from './components/HeroCover';
import Vision from './components/Vision';
import Pillars from './components/Pillars';
import ObjectiveMVP from './components/ObjectiveMVP';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <HeroCover />
      <Vision />
      <Pillars />
      <ObjectiveMVP />
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} InnovaIndustria • One-page pitch deck</p>
      </footer>
    </div>
  );
}

export default App;
