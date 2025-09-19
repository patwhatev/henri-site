import React, { Component } from "react";
// Import other book sub-components here


const porcelain_trays = {
  cover: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/128ec8c7-c217-4a1f-8d83-b26e58abb9c4/Cover_01.jpg?content-type=image%2Fjpeg",
  back: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/11471b97-d5d0-4119-8a47-1a90cf5a5301/Cover_02.jpg?content-type=image%2Fjpeg",
  tracklist: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/5db66fd6-a0c8-4183-825d-8eafe0fa93c0/Screenshot+2025-09-18+at+8.00.21%E2%80%AFAM.png?content-type=image%2Fpng",
  player: "https://archive.org/embed/normans-medecine-circle-1-22-23-9.08-pm"
}

// const swiss_toys = {
//   cover: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c01a87b7-1e50-4ced-935f-57920c5c7853/Special+Swiss+Toys.jpg?content-type=image%2Fjpeg",
//   player: "tbd"
// }

const albums_arr = [porcelain_trays]

class Instrumentals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioPlaying: {}
    };
    this.audioRefs = {};
  }

  toggleAudio = (albumIndex, playerUrl) => {
    const { audioPlaying } = this.state;
    const isCurrentlyPlaying = audioPlaying[albumIndex];

    if (isCurrentlyPlaying) {
      if (this.audioRefs[albumIndex]) {
        this.audioRefs[albumIndex].src = playerUrl;
      }
      this.setState({
        audioPlaying: { ...audioPlaying, [albumIndex]: false }
      });
    } else {
      if (this.audioRefs[albumIndex]) {
        this.audioRefs[albumIndex].src = `${playerUrl}&auto=1&autoplay=1`;
      }
      this.setState({
        audioPlaying: { ...audioPlaying, [albumIndex]: true }
      });
    }
  }

  render() {
    const allAlbums = albums_arr.flat();
    const { audioPlaying } = this.state;

    return (
      <div className="content">
        {allAlbums.map((album, index) => (
          <div key={index} style={{
            display: 'flex',
            gap: '40px',
            marginBottom: '80px',
            alignItems: 'flex-start'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <img
                src={album.cover}
                alt="Album Cover"
                style={{
                  width: '400px',
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
              <img
                src={album.back}
                alt="Album Back"
                style={{
                  width: '400px',
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <img
                src={album.tracklist}
                alt="Tracklist"
                onClick={() => this.toggleAudio(index, album.player)}
                style={{
                  width: '400px',
                  height: 'auto',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  opacity: audioPlaying[index] ? 1 : 0.8,
                  transition: 'opacity 0.2s ease',
                  border: audioPlaying[index] ? '2px solid #333' : '2px solid transparent'
                }}
              />
            </div>

            <iframe
              ref={ref => this.audioRefs[index] = ref}
              src={album.player}
              width="1"
              height="1"
              frameBorder="0"
              style={{
                position: 'absolute',
                left: '-9999px',
                opacity: 0,
                pointerEvents: 'none'
              }}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Instrumentals;