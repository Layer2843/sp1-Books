import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  const [tytul, setTytul] = useState('');
  const [autor, setAutor] = useState('');
  const [gatunek, setGatunek] = useState('');

  // Mapowanie wartości liczbowych na nazwy gatunków w celu wyświetlenia ich w konsoli
  const nazwyGatunkow = {
    '': '',
    '1': 'Powieść',
    '2': 'Kryminał',
    '3': 'Fantastyka',
    '4': 'Biografia'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wypisanie danych w konsoli w wymaganym formacie
    console.log(`tytul: ${tytul}; autor: ${autor}; gatunek: ${nazwyGatunkow[gatunek]}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="tytulKsiazki" className="form-label">Tytuł książki</label>
          <input 
            type="text" 
            id="tytulKsiazki" 
            className="form-control" 
            value={tytul} 
            onChange={(e) => setTytul(e.target.value)} 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="autorKsiazki" className="form-label">Autor książki</label>
          <input 
            type="text" 
            id="autorKsiazki" 
            className="form-control" 
            value={autor} 
            onChange={(e) => setAutor(e.target.value)} 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gatunek" className="form-label">Gatunek</label>
          <select 
            id="gatunek" 
            className="form-select" 
            value={gatunek} 
            onChange={(e) => setGatunek(e.target.value)}
          >
            <option value="">Wybierz gatunek</option>
            <option value="1">Powieść</option>
            <option value="2">Kryminał</option>
            <option value="3">Fantastyka</option>
            <option value="4">Biografia</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Dodaj</button>
        
      </form>
    </div>
  );
}