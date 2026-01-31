import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-primary-50">
      {/* Main container with max-width constraint for readability */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <Hero />
        
        {/* Page content will go here */}
        <div className="space-y-8">
          <p className="text-center text-neutral-500">Component sections coming next...</p>
        </div>
      </div>
    </div>
  )
}

export default App
