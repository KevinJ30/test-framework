import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Import component
 **/
import {OperationController} from "./Components/Operations/OperationController";
import {banqueStore} from "./stores/BanqueStore";
import {Info} from "./Components/Info/Info";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 **/

function App() {
    let store = new banqueStore();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
          <OperationController store={store} />
      </main>
    </div>
  );
}

export default App;
