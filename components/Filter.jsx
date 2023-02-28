import React, { useEffect, useState } from "react";
import styled from "styled-components";

const prixData=[
  "Moins de 10€",
  "10€ à 50€",
  "50€ à 100€",
  "100€ à 500€",
  "500€ à 1000€",
  "1000€ à 2000€",
  "Plus 2000€",
]
const Filter = ({ data, setData }) => {
  // Marques
  const marquesData = new Set();
  data
    ?.filter((p) => p.category === "casques")
    .map((item, index) => {
      marquesData.add(item.marque);
    });
  const marques = [];
  marquesData?.forEach((m) => marques.push(m));
  // setData
  var [marqFiltered, setMarqFiltered] = useState([]);
  const [isMarque, setIsMarque] = useState(false);
  // Fonction qui gere les marques cochés ou decochés
  var handleMarque = (e) => {
    let isChecked = e.target.checked;
    let marque = e.target.value;
    let id = e.target.id;
    setIsMarque(!isMarque);
    let temp = { id: id, marque: marque };
    if (isChecked === true) {
      marqFiltered.push(temp);
    }
    if (isChecked === false) {
      var temps = marqFiltered?.filter((m) => m.id !== id);
      setMarqFiltered(temps);
    }
  };
  // Fonction qui va filitrer automatiquement dans useEffect+
  // la data selon les marques selectionnés
  const handleFilterMarque = (itemSearch) => {
    let dataFiltered = new Array();
    marqFiltered?.map((mrq) => {
      let temp = data.filter((p) =>
        p.marque.toLowerCase().includes(mrq.marque.toLowerCase())
      );
      temp?.map((item) => dataFiltered.push(item));
    });
    return dataFiltered;
  };

  useEffect(() => {
    if (marqFiltered.length !== 0) {
      let dataFiltered = handleFilterMarque();
      setData(dataFiltered);
    } else {
      setData(data);
    }
  }, [isMarque]);
  return (
    <FIlter>
      <h2 className="filter">Filter</h2>
      <h3 className="title">Marque</h3>
      <Marque>
        {marques.map(
          (marq, index) =>
            marq !== "" && (
              <div key={index} className="marq">
                <input
                  onChange={(e) => handleMarque(e)}
                  type="checkbox"
                  id={index}
                  name={marq}
                  value={marq}
                  className="input"
                />
                <h5 className="name">{marq}</h5>
              </div>
            )
        )}
      </Marque>
      <Prix>
        <h3 className="title">Prix</h3>
        {
          prixData?.map((p,i)=>(
             <div key={i} className="marq">
          <input
            onChange={(e) => handleMarque(e)}
            type="checkbox"
            id={1}
            className="input"
          />
          <h5 className="nam">{p}</h5>
        </div>
          ))
        }
       
      </Prix>
    </FIlter>
  );
};

export default Filter;

const FIlter = styled.div`
  width: 250px;
  min-height: 80vh;
  border-radius: 7px;
  color: hsl(244, 16%, 43%);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  position: sticky;
  top: 0;

  .filter {
    text-align: center;
    font-size: 22px;
  }
  .title {
    text-align: left;
    font-size: 20px;
  }
  .marq {
    display: flex;
    gap: 20px;
  }
  .name {
    font-size: 17px;
    text-transform: capitalize;
    font-style: italic;
    color: gray;
  }
`;
const Marque = styled.div`
  max-height: 250px;
  overflow: scroll;
  overflow: auto;
`;

const Prix = styled.div`
  overflow: scroll;
  overflow: auto;
`;
