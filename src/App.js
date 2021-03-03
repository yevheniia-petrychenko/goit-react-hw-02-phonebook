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
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          ...[{ name: name, number: number, id: uuidv4() }],
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
      console.log(this.state);
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
