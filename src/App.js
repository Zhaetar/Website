import Prismic from '@prismicio/client';
import React, { useEffect, useState } from 'react';
import ImageGrid from './components/ImageGrid';

export default function App(props) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getApiData();
  });

  function getApiData() {
    const apiEndpoint = "https://chripfals.cdn.prismic.io/api/v2";

    Prismic.api(apiEndpoint).then((api) => {
      return api.query("");
    }).then((response) => {
      setPages(response.results);
    });
  }

  return (
    <ImageGrid
      imageList={pages}
    ></ImageGrid>
  )
}