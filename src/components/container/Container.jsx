import './container.scss';
import React, { useEffect } from 'react';
import Card from '../Card/Card';
import { setData } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Container = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData());
  });

  return (
    <div className="container">
      {data.map((object) => {
        return <Card key={object.id} {...object} />;
      })}
    </div>
  );
};

export default Container;
