import React from 'react';

export default function Image(props) {
  return (
    <img
      src={props.url}
      alt={props.alt}
      width={props.dimensions.width}
      height={props.dimensions.height}
    />
  );
}