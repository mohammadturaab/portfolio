import './App.css';
import './about/index';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to my Website</h1>
      </header>
      <article>
        <p><a href="../about/index.js">About me </a></p>
        <p><a href ="./experience">Experience </a></p>
        <p><a href= "./projects">Project</a></p>
      </article>
    </div>
  );
}

export default App;
