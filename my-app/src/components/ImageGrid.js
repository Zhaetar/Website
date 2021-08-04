import React from 'react';
import Image from '../components/Image';

export default function ImageGrid(props) {
  function getImageList() {
    const { imageList } = props;

    if (!imageList) { return; }

    return imageList.map(image => {
      return (<Image {...image.data.art} />)
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {getImageList()}
    </div>
  );
}