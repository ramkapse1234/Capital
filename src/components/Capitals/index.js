/* eslint-disable import/extensions */
import {Component} from 'react'

import Captialin from '../Captialin'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    mahaShiva: countryAndCapitalsList,
  }

  render() {
    const {mahaShiva} = this.state

    return (
      <div className="bg">
        <div className="white">
          <h1>Countries And Captitals</h1>
          {mahaShiva.map(each => (
            <Captialin each={each} key={each.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default Capitals
