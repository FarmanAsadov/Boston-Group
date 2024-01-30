import { useEffect, useState } from 'react';
import './App.css';
import Text from './components/text';
import axios from 'axios'


function App() {
    const [info,setInfo] = useState([])

  useEffect(
    () => {
    const fetchData = async ()=>{
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setInfo(response.data) // object gelir ve onun icinde data var onunda icinde melumatlar var 
      }
      catch(error){
        console.log(error)
      }

    }

  fetchData();

  },
  [])

  return (
    <div className="App">
      <Text data={info}/>
    </div>
  );
}

export default App;
