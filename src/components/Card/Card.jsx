import React from 'react';
import './card.scss';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.avatar} alt={props.first_name} width="100%" />
      <div className="card-specifications">
        <h4>{props.id}</h4>
        <h3>
          {props.first_name} {props.last_name}
        </h3>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
