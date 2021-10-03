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

class App extends Component {
  state = {
    contacts: initialContacts,
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

      const newContactList = {
        contacts: [...prevState.contacts, { ...newContact, id: uid() }],
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
