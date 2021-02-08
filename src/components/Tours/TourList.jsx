import React, { useState, useEffect } from 'react';

import Tour from './Tour';
import Title from '../Title.styled';
import styles from '../../css/items.module.css';

const TourList = (props) => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(props.tours.edges);
  }, [props.tours.edges]);

  return (
    <section>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => (
          <Tour key={node.contentful_id} tour={node} />
        ))}
      </div>
    </section>
  );
};

export default TourList;
