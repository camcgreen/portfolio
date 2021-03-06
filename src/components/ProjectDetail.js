import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Bubble from './Bubble';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='App'>
        <h1>Hello from project: {this.props.match.params.name}</h1>
        <Bubble />
      </div>
    );
  }
  componentDidMount = () => {
    console.log(this.props);
  };
}

export default ProjectDetail;
