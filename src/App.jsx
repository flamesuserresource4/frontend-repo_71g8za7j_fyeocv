import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import FileManager from './components/FileManager';
import Employees from './components/Employees';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      <Navbar />
      <main className="space-y-8">
        <Dashboard />
        <FileManager />
        <Employees />
      </main>
      <Footer />
    </div>
  );
}

export default App;
