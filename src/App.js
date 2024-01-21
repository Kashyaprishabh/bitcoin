import Footer from './components/Footer';
import MainCard from './components/MainCard';
import MiniCards from './components/MiniCards';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main>
      <Navbar />
      <MainCard />
      <MiniCards />
      <Footer />
    </main>
  );
};

export default App;
