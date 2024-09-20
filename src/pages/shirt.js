import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detail Page for Item {id}</h1>
      <p>This is where you would show more details for the selected item.</p>
      <h1>hello</h1>
    </div>
  );
};

export default DetailPage;
