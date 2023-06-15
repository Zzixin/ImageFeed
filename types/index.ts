export interface ImgItem {
  name: string;
  image: string;
}

export interface APIResponse {
  info: {
    pages: number;
  };
  results: ImgItem[];
}

export interface ImageInfo {
  totalPages: number;
  images: ImgItem[];
}

type SetPageType = React.Dispatch<React.SetStateAction<number>>;

export interface ImageDisplayProps {
  page: number;
  setPage: SetPageType;
  imageInfo: ImageInfo;
}

export interface ImageItemsProps {
  imageArr: ImgItem[];
}
