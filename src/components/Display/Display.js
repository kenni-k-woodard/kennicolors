import React from 'react';
import { useParams } from 'react-router-dom';

export default function Display() {
  const { r, g, b } = useParams();

  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <p>DISPLAY</p>
    </div>
  );
}
