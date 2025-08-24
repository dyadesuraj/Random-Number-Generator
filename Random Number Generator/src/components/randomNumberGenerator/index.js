import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1>Random Number</h1>
        <p className="text">
          Generate a random number in the range of 0 to 100
        </p>
        <button type="button" onClick={this.generateNumber}>
          Generate
        </button>
        <p className="number">{count}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
