import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?${this.props.match.params.class}`)
    .then(res => this.setState({
        students : res.data
      }))
      .catch(err => alert('Something is wrong here (Axios:Classlist.js)', err)
    )};


  render() {
    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={ i }><h3>{ student.first_name } { student.last_name }</h3></Link>
    ));
  
    return (
      <div className='box'>
        <Link to='/'><button className='btn'>Back</button></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        { students }
        
      </div>
    )
  }
}