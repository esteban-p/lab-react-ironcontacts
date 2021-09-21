
import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';


const initialArr = contacts.slice(0,5);


function App() {

  const [contactsState, setContactsState] = useState(initialArr);

  const contactsList = contactsState.map(contact => (
    <tr key={contact.id}>
      <td><img src={contact.pictureUrl} height='120px' alt='Artist face'></img></td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      <td>{contact.wonOscar && ' 🏆 '}</td>
      <td>{contact.wonEmmy && ' 🏅 '}</td>
    </tr>
  ))


  const addRandomContact = () => {
    let ranCon =  contacts[Math.floor(Math.random()*contacts.length)];
    if (contactsState.length === contacts.length) {
      alert('No more contacts available');
      return;
    } else if (contactsState.includes(ranCon)) {
      console.log(ranCon.name + 'is included already. Trying with other...');
      addRandomContact();
    } else {
      setContactsState(contactsState => [ranCon, ...contactsState])
    }
  }



  return (
    <div className="App">
      <h1>IronContacts</h1>
      <h5>Total contacts available: {contacts.length}</h5>
      <h5>Showing: {contactsState.length}</h5>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <br />
      <br />
      <br />

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
