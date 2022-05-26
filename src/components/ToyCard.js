import React from "react";

function ToyCard({toy, handleAfterDonate, updateToy}) {
  const {name, image, likes, id} = toy

  function handleDelete(e){
    fetch(`http://localhost:3001/toys/${e.target.value}`, {
      method: "DELETE"
    })
    .then(handleAfterDonate(id))
  }

  function handleLikeClick(){
    // console.log(likes)
    const updatedLikes = {
      likes: toy.likes + 1
    }
    // console.log(likes)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
      },
      body: JSON.stringify(updatedLikes)
    })
    .then(res =>res.json())
    .then(updateToy)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} value={id} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} value={id} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
