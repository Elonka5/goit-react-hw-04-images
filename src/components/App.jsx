import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { getImages } from 'service/galleryService';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { ImageSearchEmpty } from './ImageSearchEmpty/ImageSearchEmpty';
import { ImageError } from 'components/ImageError/ImageError';
import { ImageDefault } from './ImageDefault/ImageDefault';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    hits: [],
    showBtn: false,
    showImageDefault: true,
    showImageSearchEmpty: false,
    showImageError: false,
    src: '',
    alt: '',
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true, showImageDefault: false });
      getImages(query, page)
        .then(({ hits, totalHits }) => {
          if (!totalHits) {
            this.setState({
              showImageSearchEmpty: true,
              showImageDefault: false,
            });
            return;
          }
          this.setState(prevState => ({
            hits: [...prevState.hits, ...hits],
            showBtn: page < Math.ceil(totalHits / 12),
            showImageDefault: false,
          }));
        })
        .catch(error => {
          this.setState({
            showImageError: error.message,
            showImageDefault: false,
          });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleSubmit = query => {
    this.setState({
      query,
      page: 1,
      hits: [],
      showImageDefault: true,
      showImageSearchEmpty: false,
      showImageError: false,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = ({ src, alt }) => {
    this.setState({ src, alt });
  };

  render() {
    const {
      hits,
      showBtn,
      showImageDefault,
      showImageSearchEmpty,
      showImageError,
      src,
      alt,
      isLoading,
    } = this.state;
    return (
      <div className="container">
        <SearchBar onSubmit={this.handleSubmit} />
        {showImageDefault && (
          <ImageDefault text="Let's find images together!" />
        )}
        <ImageGallery images={hits} openModal={this.handleOpenModal} />
        {showBtn && <Button handleClick={this.loadMore} text="Load More" />}
        {showImageSearchEmpty && (
          <ImageSearchEmpty text="Oops... there are no images matching your search..." />
        )}
        {showImageError && <ImageError text="Something goes wrong..." />}
        {src && <Modal closeModal={this.handleOpenModal} src={src} alt={alt} />}
        {isLoading && <Loader />}
      </div>
    );
  }
}
