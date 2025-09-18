import { About } from './components/About';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <main>
        <About />
        <Skills />
      </main>
        <Footer />
    </div>
  );
}