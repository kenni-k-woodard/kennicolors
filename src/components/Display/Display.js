import React from 'react';
import { useParams } from 'react-router-dom';
import './Display.css';

export default function Display() {
  const { r, g, b } = useParams();

  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <p>DISPLAY</p>
      <p>
        rgb({r}, {g}, {b})
      </p>
    </div>
  );
}
