import { useState, useEffect } from 'react';
import ImageDisplay from '@/components/ImageDisplay';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { APIResponse, ImageInfo } from '@/types';

export default function Home() {
  const initImageState = {
    images: [],
    totalPages: 1,
  };
  const API_URL = 'https://rickandmortyapi.com/api/character';

  const [page, setPage] = useState(1);
  const [imageInfo, setImageInfo] = useState<ImageInfo>(initImageState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/?page=${page}`)
      .then((res) => res.json())
      .then((data: APIResponse) => {
        const images = data.results.map(({ name, image }) => {
          return {
            name: name,
            image: image,
          };
        });
        setImageInfo({ images: images, totalPages: data.info.pages });
        setIsLoading(false);
      })
      .catch((error) => {
        alert('Failed to fetch data');
        setIsLoading(false);
      });
  }, [page]);

  if (isLoading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30%' }}>
        <CircularProgress size={60} color='info' />
      </Box>
    );

  if (!imageInfo) return <p>No profile data</p>;

  return (
    <div className='page-container'>
      <h1> Rick And Morty Characters</h1>
      <ImageDisplay page={page} setPage={setPage} imageInfo={imageInfo} />
    </div>
  );
}
