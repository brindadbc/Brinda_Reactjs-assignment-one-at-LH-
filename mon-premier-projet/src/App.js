// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import MaPresentationPersonnelle from './MaPresentationPersonnelle';
import InformationCours from './InformationCours';
import './App.css';

const App = () => {
  const today = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="app-container">
      <header>
        <h1>Mon Premier Projet React</h1>
      </header>
      
      <main>
        <MaPresentationPersonnelle />
        <InformationCours />
      </main>
      
       <footer className="footer">
         <p>Date d'aujourd'hui : {today}</p>
       </footer>
     </div>
  );
};

export default App;
