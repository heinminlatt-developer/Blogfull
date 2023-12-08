
import '../layouts/style.css';
import Topbar from '../layouts/Topbar';
import Footer from '../layouts/Footer';
import BodyUp from '../components/BodyUp';
import BodyImages from '../components/BodyImages';

function Home() {
  return (
    <div className="App">
      <Topbar/>
      <BodyUp/>
      <BodyImages/>
      <Footer/>
    </div>
  );
}

export default Home;
