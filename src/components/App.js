import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([])
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/toys', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify()
    })
      .then((res)=> res.json())
      .then(toys => setToys(toys))
  }, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAfterDonate(id) {
    const newArray = toys.filter((toy) => toy.id !== id)
    setToys(newArray)
  }
  
  function updateToy(updatedToy) {
    const updatedToys = toys.map((toy) => toy.id === updatedToy.id ? updatedToy : toy)
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
        updateToy={updateToy}
        handleAfterDonate={handleAfterDonate}
      />
    </>
  );
}

export default App;
