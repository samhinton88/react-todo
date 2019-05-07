import React, {Component} from 'react';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import axios from 'axios';

class App extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const { data } = await axios.get('http://localhost:4000/all');
 
    this.setState({ items: data })

  }

  render() {
    const {items} = this.state;
    return (
      <div>
        <TopNav />
        <Dashboard />
      </div>
    )
  }
}

export default App;
