import Search from './components/Search';
import './css/main.css';


const logo = <i class="fab fa-github-square"></i> ;
function App() {
  
  return (
    <div className="main">
        <h1 className="title">Github User {logo} </h1>     
        <Search></Search>
    </div>
  );
}

export default App;
