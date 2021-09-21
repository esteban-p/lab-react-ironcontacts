
import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';


const initialArr = contacts.slice(0,5);
//console.log(initialArr);

function App() {

  const [contacts, setContacts] = useState(initialArr);

  const contactsList = contacts.map(contact => (
    <tr>
      <img src={contact.pictureUrl} height='120px'></img>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
    </tr>
  ))

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contactsList}
      </table>
    </div>
  );
}

export default App;
  