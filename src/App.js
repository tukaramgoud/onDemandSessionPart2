import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

import ContactItem from './components/ContactItem'

import './App.css'

const initialContactsList = [
  {
    id: uuidV4(),
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidV4(),
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidV4(),
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]

class App extends Component {
  state = {
    contactsList: initialContactsList,
    name: '',
    mobileNo: '',
  }

  toggleStar = id => {
    this.setState(pervState => ({
      contactsList: pervState.contactsList.map(eachOne => {
        if (eachOne.id === id) {
          return {...eachOne, isFavorite: !eachOne.isFavorite}
        }
        return {...eachOne}
      }),
    }))
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, mobileNo} = this.state
    const newItem = {
      id: uuidV4(),
      name,
      mobileNo,
      isFavorite: false,
    }
    this.setState(pervState => ({
      contactsList: [...pervState.contactsList, newItem],
      name: '',
      mobileNo: '',
    }))
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, mobileNo, contactsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <input
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
            />
            <button type="submit" className="button">
              Add Contact
            </button>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell">Mobile Number</p>
            </li>
            {contactsList.map(eachContact => (
              <ContactItem
                key={eachContact.id}
                contactDetails={eachContact}
                toggleStar={this.toggleStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
