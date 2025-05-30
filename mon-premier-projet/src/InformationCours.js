import React from 'react';

const InformationCours = () => {
  return (
    <div className="cours-container">
      <h2>Information sur le Cours</h2>
      <div className="cours-details">
        <h3>ReactJS Crash Course</h3>
        <p><strong>Formateur:</strong> FOMUBAD BORISTA FONDI</p>
        <p><strong>Durée:</strong> 1 journée</p>
        
        <h4>Sujets principaux du cours :</h4>
        <ul>
          <li>ReactJS Basics</li>
          <li>Components & JSX</li>
          <li>Virtual DOM</li>
        </ul>
      </div>
    </div>
  );
};

export default InformationCours;