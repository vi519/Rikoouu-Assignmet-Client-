import "./App.css";
import Home from './pages/Home'
import Header from "./pages/Header";
import Artists from "./pages/Artists";


function App() {
  return (
    <div className="mt-8 px-2">
 <header>
   <Header/>
 </header>

 <div class="flex flex-row justify-evenly">
  <div className="px-4">
    <Artists/>
  </div>
  <div>
  <Home/>
  </div>
 
</div>
 
    </div>
  );
}

export default App;
