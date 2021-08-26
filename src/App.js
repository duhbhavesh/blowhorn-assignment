import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights/Highlights';
import Features from './components/Features/Features';
import Teams from './components/Teams/Teams';

function App() {
   return (
      <div className='container'>
         <Header />
         <Hero />
         <Highlights />
         <Features />
         <Teams />
      </div>
   );
}

export default App;
