import React, {useState} from "react";

function ToyForm({toys, setToys}) {
  // const [search, setSearch] = useState("")
  const [formData, setFormData] = useState({
    "name": "",
    "image": "",
    "likes": 0
  })

  function handleChange(e) {
    const {name, value} = e.target
    setFormData({...formData, 
      [name]: value})
  }  

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(formData)
      })
      .then(res=>res.json())
      .then(newToy => setToys([...toys, newToy]))
      setFormData({
        "name": "",
        "image": "",
      })
    }
   
  

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
