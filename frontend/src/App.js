import { useState } from "react";
import axios from "axios";

const App = () => {
  const [fname, setFname] = useState("");
  const [fruits, setFruits] = useState([]);

  const handleChange = (event) => {
    setFname(event.target.value);
  };

  const change = (event) => {
    event.preventDefault();
    
    axios
      .post("http://localhost:5000/fruitname", { fruitname: fname })
      .then((response) => {
        setFruits((prevFruits) => [...prevFruits, fname]);
        setFname(""); 
      })
      
  };

  return (
    <div>
      <h1>Fruit Form</h1>
      <form onSubmit={change}>
        <input
          type="text"
          value={fname}
          name="fruitname"
          onChange={handleChange}
          placeholder="Enter the Fruit Name"
        />
        <button type="submit">Add Fruit</button>
      </form>

      <div>
        <h3>Fruits List:</h3>
        <h4>{JSON.stringify(fruits, null, 2)}</h4>
      </div>
    </div>
  );
};

export default App;
