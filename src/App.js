import Router from './Routes/Router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import NavContext from './Context/NavContext';

library.add(faCheckSquare, faCoffee, faArrowRight, faArrowLeft)

function App() {
  return (
    <NavContext>
      <div className="App bg-main-bg text-white max-w-[1536px] mx-auto px-2 md:px-10 overflow-hidden">
        <Router>
        </Router>
      </div>
    </NavContext>
  );
}

export default App;



// iWBhvGU@g27Ra7C%(h46