import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleAfterDonate, updateToy}) {

  const renderToys = toys.map((toy) => {
    return (
        <ToyCard 
          key={toy.id}
          toy={toy}
          updateToy={updateToy}
          handleAfterDonate={handleAfterDonate}
        />
    )
  })

  return (
    <div id="toy-collection">
      {renderToys}
    </div>
  );
}

export default ToyContainer;
