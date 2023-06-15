import { ImageItemsProps } from '@/types';

const ImageItems: React.FC<ImageItemsProps> = ({ imageArr }) => {
  return (
    <div className='img-page'>
      {imageArr.map(({ name, image }, idx) => {
        return (
          <div className='img-cell' key={`cell-${name}-${idx}`}>
            <img src={image} alt={name} className='img-character' />
            <p className='img-name'>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ImageItems;
