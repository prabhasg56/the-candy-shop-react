import React from "react";
import "./CandyList.css";

let candys = [
  { name: "Echair", description: "Chocolaty", price: 2 },
  { name: "Echair1", description: "Chocolaty1", price: 12 },
  { name: "Echair2", description: "Chocolaty2", price: 22 },
];
const CandyList = () => {
  return (
    <div>
      <ul>
        {candys.map((candy, ind) => {
          return (
            <li>
              <div className="candy">
                <div className="candy-list">
                  {`${candy.name}  ${candy.description}  ${candy.price}`}
                </div>
                <div className="buy-btn">
                  <button>Buy1</button>
                  <button>Buy2</button>
                  <button>Buy3</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CandyList;
