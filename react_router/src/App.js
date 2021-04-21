import React from 'react';
import './App.css';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';


class App extends React.Component {
  render() {
    return(
      <div>

        <nav class=" navbar navbar-expand-lg fixed-top navbar bg-dark ">
          <a class="navbar-brand" href="/"><b>Rama Dharma</b></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
              <Link class="nav-link" to="/">Beranda</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/tentangsaya">Tentang Saya</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/karya">Karya</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/kontak">Kontak</Link> 
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/list">List</Link> 
              </li>
            </ul>
          </div>
        </nav>
        
        <div className="App"><Utama /></div>
      </div>
    )
  }
}

export default App;