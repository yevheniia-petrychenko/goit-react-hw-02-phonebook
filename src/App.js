import { Component } from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandl = ({ name, number }) => {
    let newname = name;
    let found = false;
    this.state.contacts.forEach(({ name }) => {
      if (newname.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts`);
        found = true;
        return;
      }
      if (found) {
        return;
      }
    });
    if (found) {
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          ...[{ name: newname, number: number, id: uuidv4() }],
        ],
      };
    });
  };

  getVisibleContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  filterHandle = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandl} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterHandle} />
        <ContactList
          contacts={this.getVisibleContact()}
          onDelete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
