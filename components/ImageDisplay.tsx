import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ImageItems from './ImageItems';
import { ImageDisplayProps } from '@/types';

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  page,
  setPage,
  imageInfo,
}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className='img-container'>
      <ImageItems imageArr={imageInfo.images} />
      <Stack spacing={2} alignItems='center'>
        <Pagination
          page={page}
          count={imageInfo.totalPages}
          onChange={handleChange}
          variant='outlined'
          shape='rounded'
          color='primary'
          className='pagination-com'
        />
      </Stack>
    </div>
  );
};

export default ImageDisplay;
