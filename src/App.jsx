import { Component } from 'react';
import { v4 as uid } from 'uuid';

import initialContacts from './data/initialContacts.json';

import {
  ContactFilter,
  Section,
  ContactInputForm,
  ContactsList,
  Container,
} from './components/';

import localStorage from 'utils/localStorage';

if (!localStorage.load('contacts')) {
  localStorage.save('contacts', initialContacts);
}

class App extends Component {
  state = {
    contacts: localStorage.load('contacts'),
    filter: '',
  };

  addNewContact = newContact => {
    this.setState(prevState => {
      const contactNameAlreadyExist = this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
      );

      if (contactNameAlreadyExist) {
        alert(`${newContact.name} is already in contacts!`);
        return;
      }

      const newContactWithId = { ...newContact, id: uid() };

      const newContactList = {
        contacts: [...prevState.contacts, newContactWithId],
      };

      return { ...prevState, ...newContactList };
    });
  };

  setFilter = nameToFilter => {
    this.setState(prevState => {
      return { ...prevState, filter: nameToFilter };
    });
  };

  deleteContact = contactId => {
    const filteredArray = this.state.contacts.filter(
      contact => contact.id !== contactId,
    );
    this.setState(prevState => {
      return { ...prevState, contacts: filteredArray };
    });
  };

  filterContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter),
    );

  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.save('contacts', this.state.contacts);
  }

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <Section title="Phonebook">
          <Container>
            <ContactInputForm onSubmit={this.addNewContact} />
          </Container>
        </Section>

        <Section title="Contacts">
          <Container>
            <ContactFilter
              filter={this.state.filter}
              onFilter={this.setFilter}
            />

            <ContactsList
              contacts={filteredContacts}
              handleDel={this.deleteContact}
            />
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
