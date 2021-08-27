import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights/Highlights';
import Features from './components/Features/Features';
import Teams from './components/Teams/Teams';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
   return (
      <div className='app'>
         <Header />
         <Hero />
         <Highlights />
         <Features />
         <Teams />
         <Blog />
         <Footer />
      </div>
   );
}

export default App;
