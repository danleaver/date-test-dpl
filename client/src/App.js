import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Form, Input } from 'semantic-ui-react';

function App() {
  const [ clock, setClock ] = useState([])
  // axios.post('/api/clocks/', {datetime_test: new Date(), date_test: new Date() })
    // .then(res => console.log(res))
  const [ fromApi, setFromApi ] = useState()
  // const [ date, setDate ] = useState();

  useEffect(() => {
    axios.get('/api/clocks/1')
      .then(res => {
        setClock(res.data)
        console.log(res.data.date_test)
        setFromApi(res.data.date_test)
        console.log("fromApi: ", fromApi)
      })
      .catch(console.log)
  }, [])

  const handleChange = (e) => {
    setClock({...clock, date_test: e.target.value})
  }
  
  const handleClick = (e) => {
    axios.patch('api/clocks/1', {date_test: clock.date_test})
      .then(res => setFromApi(res.data.date_test))
      .catch(console.log)
  }
    
  console.log("fromAPI updates: ", fromApi)
  return (
    <div className="App">
      {clock.datetime_test}
      <br />
      {fromApi}
      <input type="date" onChange={handleChange} value={clock.date_test}/>
      {/* <input type="date" value={clock.datetime_test}/> */}
      <button onClick={handleClick}>Update time</button>
      <Form>
        <Input type="date" value={clock.date_test}></Input>
      </Form>
    </div>


  );
}

export default App;
