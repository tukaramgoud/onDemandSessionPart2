# On Demand Session

- Third-party packages
  - uuid
- Adding New Item to the List in State
- Updating an Item of the List in State
1. Third-Party Packages
UUID (Universally Unique IDentifier)
Using the UUID package, we can generate a unique id
1.1 Installing UUID
   npm install uuid
1.2 Importing of UUID
UUID package provides uuidv4(), which returns a unique id whenever it is called.
  import {v4 as uuidv4} from 'uuid'

2. Best Practice
The state should be immutable. We shouldn’t update the array/object directly.
The best practice is to create a new array/object from the array/object in the previous state using the spread operator.
    this.setState(prevState => ({
  contactsList: [...prevState.contactsList, newContact ],

}))


2.1 Updating a Property of an Item inside List
We should not update the property of a list item directly. To update the property of a list item, we should create a new object and return it to the list.

Syntax:{...object, newItem}
