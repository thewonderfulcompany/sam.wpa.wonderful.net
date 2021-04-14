import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      data:''
    }
  }

  componentDidMount(){
    // fetch('https://uas3zctsqd.execute-api.us-west-2.amazonaws.com/Prod/getLinks')
    fetch('http://127.0.0.1:3001/getLinks')
    .then(response => response.json())
    .then(data => this.setState({data:data.hmm}))
  }
  
  
  render(){

    let content = this.state.data ? <Card links={this.state.data}/> : <p>loading...</p>


    return (
      <div className="App">
        {content}
      </div>
    )
  }
}





function Card(props){
  console.log(props.links)

  const links = props.links.map(
    item => {
      return (<a href="http://example.com" key={item.id}>{item.Label}</a>)
    }
  )

  return (
    <div className='card'>
      {links}
    </div>
  )
}




export default App;
