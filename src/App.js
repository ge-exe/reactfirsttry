import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: true,
      thumbnailPosition: "bottom",
      images: [],
    };
  }
  componentDidMount(prevProp) {
    console.log("prev", prevProp);
    for (let i = 0; i < 10; i++) {
      this.setState((prev) => ({
        images: [
          ...prev.images,
          {
            original: `https://picsum.photos/id/${1019 + i}/1000/600/`,
            thumbnail: `https://picsum.photos/id/${1019 + i}/250/150/`,
          },
        ],
      }));
    }
  }
  render() {
    console.log(this.state.images);
    const { images } = this.state;
    return (
      <section className="app">
        
        <ImageGallery
          items={images}
          lazyLoad={false}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={
            this.state.showFullscreenButton &&
            this.state.showGalleryFullscreenButton
          }
          showPlayButton={
            this.state.showPlayButton && this.state.showGalleryPlayButton
          }
          showThumbnails={this.state.showThumbnails}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
        />
        
      </section>
    );
  }
}

export default App;
