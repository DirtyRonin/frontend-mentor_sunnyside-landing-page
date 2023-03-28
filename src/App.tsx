import { Footer } from './components/footer';
import { Header } from './components/header';
import { LandingPage } from './pages/landing-page';
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <nav></nav>
      <main>
        <LandingPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
