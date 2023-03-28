import React from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { LandingPage } from './pages/landing-page';
function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
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
    </div>
  );
}

export default App;
