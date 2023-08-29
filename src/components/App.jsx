import { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { getImages } from 'service/galleryService';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { ImageSearchEmpty } from './ImageSearchEmpty/ImageSearchEmpty';
import { ImageError } from 'components/ImageError/ImageError';
import { ImageDefault } from './ImageDefault/ImageDefault';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [showImageDefault, setShowImageDefault] = useState(true);
  const [showImageSearchEmpty, setShowImageSearchEmpty] = useState(false);
  const [showImageError, setShowImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    getImages(query, page)
      .then(({ hits, totalHits }) => {
        if (!totalHits) {
          setShowImageSearchEmpty(true);
          setShowImageDefault(false);
          return;
        }
        setHits(prevState => [...prevState, ...hits]);
        setShowBtn(page < Math.ceil(totalHits / 12));
        setShowImageDefault(false);
      })
      .catch(error => {
        setShowImageError(error.message);
        setShowImageDefault(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setHits([]);
    setShowImageDefault(true);
    setShowImageSearchEmpty(false);
    setShowImageError(false);
  };
  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const handleOpenModal = ({ src, alt }) => {
    setSrc(src);
    setAlt(alt);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      {showImageDefault && <ImageDefault text="Let's find images together!" />}
      <ImageGallery images={hits} openModal={handleOpenModal} />
      {showBtn && <Button handleClick={loadMore} text="Load More" />}
      {showImageSearchEmpty && (
        <ImageSearchEmpty text="Oops... there are no images matching your search..." />
      )}
      {showImageError && <ImageError text="Something goes wrong..." />}
      {src && <Modal closeModal={handleOpenModal} src={src} alt={alt} />}
      {isLoading && <Loader />}
    </div>
  );
};
