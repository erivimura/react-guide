import './assets/css/App.css';
import Router from './Router';

//Importar componentes
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  var btnString = "Ir al blog";
   
  return (
    <div className="App">
      
      <Header />

      <Slider 
        title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
        btn={btnString}
      />
        
      <div className="center">
        <section id="content">
     
          <section className="componentes">
            <Router />
          </section>

        </section>

        <Sidebar />

        <div className="clearfix"></div>

      </div>
      
      <Footer />

    </div>
  );
}

export default App;
