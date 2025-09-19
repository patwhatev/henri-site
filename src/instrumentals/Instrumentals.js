import React, { Component } from "react";
// Import other book sub-components here

const tracks = [
  {
    image: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c5019a4e-3636-4553-9a59-e2122e5cb242/normans.png?content-type=image%2Fpng",
    title: "normans medecine circle",
    trackNumber: 1,
    playerUrl: "https://archive.org/embed/normans-medecine-circle-1-22-23-9.08-pm/01-normans%20medecine%20circle%20-%201_22_23%2C%209.08%20PM.m4a"
  },
  {
    image: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/335cf6bb-69ed-4ce5-afd4-fe931ccf3df6/alchemize.png?content-type=image%2Fpng",
    title: "alchemizemysuffering",
    trackNumber: 2,
    playerUrl: "https://archive.org/embed/normans-medecine-circle-1-22-23-9.08-pm/02-alchemizemysuffering%20-%206_10_25%2C%206.30%20PM.m4a"
  },
  {
    image: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/306dfe6b-7383-4834-b090-85bc4dd92ce2/mexique.png?content-type=image%2Fpng",
    title: "mexique",
    trackNumber: 3,
    playerUrl: "https://archive.org/embed/normans-medecine-circle-1-22-23-9.08-pm/03-mexique.m4a"
  },
  {
    image: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/fd21f409-991e-40d7-a69a-0286fd1ca694/sunkil.png?content-type=image%2Fpng",
    title: "sunkilhank",
    trackNumber: 4,
    playerUrl: "https://archive.org/embed/normans-medecine-circle-1-22-23-9.08-pm/05-sunkilhank.m4a"
  },
  {
    image: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6cd27898-b349-475b-80d3-20e8ff303597/highschool.png?content-type=image%2Fpng",
    title: "buy a girls highschoolV2",
    trackNumber: 5,
    playerUrl: "https://archive.org/embed/normans-medecine-circle-1-22-23-9.08-pm/buy%20a%20girls%20highschoolV2.m4a"
  }
]

const porcelain_trays = {
  cover: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/128ec8c7-c217-4a1f-8d83-b26e58abb9c4/Cover_01.jpg?content-type=image%2Fjpeg",
  back: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/11471b97-d5d0-4119-8a47-1a90cf5a5301/Cover_02.jpg?content-type=image%2Fjpeg",
  tracks: tracks,
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
      currentlyPlaying: null
    };
    this.audioRefs = {};
  }

  playTrack = (albumIndex, trackPlayerUrl) => {
    const { currentlyPlaying } = this.state;
    const trackKey = `${albumIndex}-${trackPlayerUrl}`;

    if (currentlyPlaying === trackKey) {
      if (this.audioRefs[albumIndex]) {
        this.audioRefs[albumIndex].src = trackPlayerUrl;
      }
      this.setState({ currentlyPlaying: null });
    } else {
      if (this.audioRefs[albumIndex]) {
        this.audioRefs[albumIndex].src = `${trackPlayerUrl}?auto=1&autoplay=1`;
      }
      this.setState({ currentlyPlaying: trackKey });
    }
  }

  render() {
    const allAlbums = albums_arr.flat();
    const { currentlyPlaying } = this.state;

    const albumContainerStyle = {
      display: 'flex',
      gap: '40px',
      marginBottom: '80px',
      alignItems: 'flex-start',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '20px',
        marginBottom: '40px'
      }
    };

    const imageColumnStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    };

    const tracklistColumnStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    };

    const getImageStyle = (isMobile = false) => ({
      width: isMobile ? '100%' : '400px',
      height: isMobile ? 'auto' : '400px',
      maxWidth: isMobile ? '400px' : 'none',
      objectFit: 'cover'
    });

    const getTrackStyle = (isPlaying, isMobile = false) => ({
      width: isMobile ? '100%' : '400px',
      height: 'auto',
      maxWidth: isMobile ? '400px' : 'none',
      objectFit: 'cover',
      cursor: 'pointer',
      opacity: isPlaying ? 1 : 0.8,
      transition: 'all 0.2s ease',
      border: isPlaying ? '3px solid #333' : '3px solid transparent',
      borderRadius: '4px'
    });

    return (
      <div className="content instrumentals">
        <style>{`
          @media (max-width: 768px) {
            .instrumentals .album-container {
              flex-direction: column !important;
              gap: 20px !important;
              margin-bottom: 40px !important;
            }
            .instrumentals .album-image,
            .instrumentals .track-image {
              width: 100% !important;
              height: auto !important;
              max-width: 400px !important;
            }
            .instrumentals .album-image {
              height: auto !important;
            }
          }
        `}</style>
        {allAlbums.map((album, index) => (
          <div key={index} className="album-container" style={albumContainerStyle}>
            <div style={imageColumnStyle}>
              <img
                src={album.cover}
                alt="Album Cover"
                className="album-image"
                style={getImageStyle()}
              />
              <img
                src={album.back}
                alt="Album Back"
                className="album-image"
                style={getImageStyle()}
              />
            </div>

            <div style={tracklistColumnStyle}>
              {album.tracks.map((track, trackIndex) => {
                const trackKey = `${index}-${track.playerUrl}`;
                const isPlaying = currentlyPlaying === trackKey;

                return (
                  <img
                    key={trackIndex}
                    src={track.image}
                    alt={track.title}
                    className="track-image"
                    onClick={() => this.playTrack(index, track.playerUrl)}
                    style={getTrackStyle(isPlaying)}
                    title={track.title}
                  />
                );
              })}
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