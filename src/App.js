
import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';


const initialArr = contacts.slice(0,5);
//console.log(initialArr);

function App() {

  const [contacts, setContacts] = useState(initialArr);

  const contactsList = contacts.map(contact => (
    <tr key={contact.id}>
      <td><img src={contact.pictureUrl} height='120px'></img></td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      <td>{contact.wonOscar && ' 🏆 '}</td>
      <td>{contact.wonEmmy && ' 🏅 '}</td>
    </tr>
  ))

  return (
    <div className="App">
      <h1>IronContacts</h1>
      
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsList}
        </tbody>
      </table>

    </div>
  );
}

export default App;
