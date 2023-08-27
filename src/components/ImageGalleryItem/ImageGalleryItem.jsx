import { ImageItemStyled } from './ImageGalleryItemStyled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
  openModal,
}) => {
  return (
    <ImageItemStyled key={id} className="gallery-item">
      <img
        onClick={() => openModal({ src: largeImageURL, alt: tags })}
        loading="lazy"
        width="250px"
        src={webformatURL}
        alt={tags}
      />
    </ImageItemStyled>
  );
};
