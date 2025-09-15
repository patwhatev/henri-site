import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import PhotographsNav from "./PhotographsNav";
import La from "./La";
import St from "./St";
import At from "./At";
import Paris from "./Paris";


const blank_landscape = "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/719bc236-a977-4ba8-b413-41e3b40db5f8/blank+landscape.png?content-type=image%2Fpng"

const cross = [
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/341cde87-640d-46e4-bfe0-03e0be7daf25/cross_04.jpg?content-type=image%2Fjpeg",
  blank_landscape,
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9cf47db6-0fc1-4877-8b53-785e086be00e/cross_07.jpg?content-type=image%2Fjpeg",
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/890194bd-2394-45a9-b615-4f56e66a4f2c/cross_02.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/cdce8c66-d21d-490c-b7ed-fe80482cb8be/cross_06.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/dd1f6cbb-2c43-4ebb-8a57-01ee2e537e3c/cross_01.jpg?content-type=image%2Fjpeg",
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/2acf494a-937d-4f3b-bae0-8ed0f29c0c6e/cross_05.jpg?content-type=image%2Fjpeg",
  blank_landscape
]

const page1 = [
    "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/780472b1-cc0f-45bd-bff1-0831cff686b6/8652-28a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/90fe5ee6-b3ff-43bc-8575-2c0050d49ffa/8652-35a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/830ad199-8e7a-40bf-beaf-19c63c173d72/8651-04a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/334f0804-a80c-481b-b96b-3c6895cc03d3/8651-09a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6afa8431-bf02-42fe-9dd2-999bede6263c/8653-13a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/cc278d79-59d7-4667-8fa1-6ec6ba9d69a9/8654-25a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/4b3b7c12-7b32-4f10-8cc6-6c12ec4e895f/8654-07a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/e82e2d39-f1eb-41fa-88ad-a51ea9f7a7b6/8652-04a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/e79e3c18-94d1-43b6-acf3-1a7ff23afbde/8652-25a.JPG?content-type=image%2Fjpeg",
  blank_landscape,
    "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/b25838ca-b153-4452-bbab-af826cea90d1/8652-31a.JPG?content-type=image%2Fjpeg",
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/41b2dc00-af31-4daf-8a16-194e97ef91bf/8654-14a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/103c276c-72ba-427e-9c84-0ddd3b4b688a/8654-36a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/cc9033c0-f282-42ea-8797-cbb5e670e444/8654-09a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/010c14e7-fe28-4743-b02c-882dc7f09ad2/8651-18a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/d119888d-5c8f-4281-8986-21926d651e72/8654-32a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/f195fbbe-fd72-4c9a-90c9-c791c8acdd84/8654-06a.JPG?content-type=image%2Fjpeg",
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a600909d-5300-4750-a4fa-ca4800bd8161/8653-17a.JPG?content-type=image%2Fjpeg",
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/5af8c2b3-03df-4752-a873-185b393a4823/8651-08a.JPG?content-type=image%2Fjpeg",
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/d91ff200-52eb-4d5a-a98f-51721c55d68c/8651-07a.JPG?content-type=image%2Fjpeg",
];

const page2 = [
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/b6e5072b-e204-4fa4-aadd-67092c952a18/IMG_5991.png?content-type=image%2Fpng",
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/90a85efc-e329-4d0d-a07b-eda22fba885f/IMG_5990.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/7fc40909-bb0e-4c39-ba2d-7ad4ad089993/IMG3889-R01-010A.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/96f3178a-828c-4756-8fc4-ba930d7ce4a0/IMG3889-R01-027A.png?content-type=image%2Fpng",
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/b05b857a-cdf7-4be4-ab8a-a15447167452/IMG_5996.png?content-type=image%2Fpng",
  blank_landscape,
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/5a796b4e-7658-4c3c-8b66-56df94ba0b31/9134-03a.JPG?content-type=image%2Fjpeg",
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a7d0792b-ec14-41bc-8194-e2359d721320/9134-21a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/11911f1e-a51f-4d5c-8af6-7342112bf9b0/9134-36a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/b528f6e2-6daa-4d47-99d7-8776abbe3243/9134-28a.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6f96b039-0262-4817-b1b4-c404267984fd/35174-1-0032.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/5162e822-8771-4ac2-aa91-5fd928ebed7c/35174-3-0013.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/57f94090-7c36-4d09-b2f1-83d5d03c3c28/35174-4-0011.jpg?content-type=image%2Fjpeg",
];
const page3 = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/f7124228-feb1-4aeb-ae62-e93afab88d4b/73D44631-E067-45A3-A362-447BE53F1E93.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/51ecc735-a8f3-48e4-bb5d-d1b4257dfd3a/B8EAE406-6500-4264-AE94-CA7977302702.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c53eb09a-7640-4b0c-9bb3-30c587e1b85f/0C85635C-2BFA-4A4B-8AAE-49637E126CDB.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/be28f44b-27a0-4257-b24d-c879e715bb8f/547DBC4F-E9F3-43EE-A898-8B0CA86BE454.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/dbe0654b-7ffe-4e2a-8c1d-c3a25637c4e5/53347F6D-324F-449C-A983-D973A79CE6A7.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/ebbb64bf-946e-4c5d-9e0a-6221810526d1/7297CCC3-C41E-4739-9B4A-91905E4CCB91.JPG?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/94c4e075-9438-417b-906b-f6d3931d9f8f/3.webp?content-type=image%2Fwebp",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/2984e6a2-abdf-4a66-886d-0a4084a03b60/IMG_3777.TIF.webp?content-type=image%2Fwebp",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/8c92d4c2-7eec-4c0c-8fc5-664aaadcc9f9/2.webp?content-type=image%2Fwebp",
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/18eb60a0-a157-49fa-b415-2f798c1f94bf/henr486-025.tif.webp?content-type=image%2Fwebp",
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6a362a47-cc62-4a01-a64e-b0d7b6f0fd76/WEBSITE%2BCOVER%2BPHOTO.TIF-8.webp?content-type=image%2Fwebp",
  blank_landscape,
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/8f17a211-8ec3-42a5-8e62-4c5cf2f443e0/IMG_4217.TIF.webp?content-type=image%2Fwebp",
];
const page4 = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c5381870-705a-4327-b9f1-c3fb22760c2f/collage+closeup.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/20c07b3b-ad78-4be5-85a6-a5b59c1d039e/IMG_3745.TIF.webp?content-type=image%2Fwebp",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/dc14438d-7bc0-4e9a-b7ae-37905bd1c4d8/IMG_3832.webp?content-type=image%2Fwebp",
  blank_landscape,
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfea63dc97713cd0902bc/1570504369603/IMG_4252.TIF.png?format=1500w",
  blank_landscape,
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da67b599033071d0cf49c46/1571191649561/IMG_5432.TIF.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe732da89a7537538481/1570504321300/IMG_4249.TIF.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe6b3dc97713cd08fd95/1570504308749/WEBSITE+COVER+PHOTO.TIF-10.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfebb18af836bfce968db/1570504389492/IMG_4251.TIF.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe587107a66f2b9fb181/1570504290704/IMG_4139.TIF.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfea018af836bfce96563/1570504363436/WEBSITE+COVER+PHOTO.TIF-7.png?format=1500w"
];

const imgs = [cross, page1, page2, page3, page4]
// Note - this page does not have a nav

class Photographs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedImages: new Set(),
      audioPlaying: false
    };
    this.audioRef = React.createRef();
  }

  toggleAudio = () => {
    const { audioPlaying } = this.state;

    if (audioPlaying) {
      // Stop audio by resetting iframe
      if (this.audioRef.current) {
        this.audioRef.current.src = "https://archive.org/details/01-romanp.tape-1";
      }
      this.setState({ audioPlaying: false });
    } else {
      // Start audio with autoplay
      if (this.audioRef.current) {
        this.audioRef.current.src = "https://archive.org/details/01-romanp.tape-1?auto=1&autoplay=1";
      }
      this.setState({ audioPlaying: true });
    }
  }

  handleImageLoad = (imageUrl) => {
    this.setState(prevState => ({
      loadedImages: new Set(prevState.loadedImages).add(imageUrl)
    }));
  }

  render() {
    const { loadedImages } = this.state;
    const allImages = imgs.flat();
    return (
      <div className="content">
        {/* <PhotographsNav /> */}

        {/* Audio Control Icon */}
        <div
          onClick={this.toggleAudio}
          style={{
            cursor: 'pointer',
            textAlign: 'center',
            marginBottom: '20px',
            padding: '10px'
          }}
        >
          <img
            src="/favicon.ico"
            alt="Toggle Audio"
            style={{
              width: '24px',
              height: '24px',
              opacity: this.state.audioPlaying ? 1 : 0.6,
              transition: 'opacity 0.2s ease'
            }}
          />
        </div>

        <Routes>
          <Route index element={(
            <div className="photo-grid-container">
              {allImages.map((image, index) => {
                const isLoaded = loadedImages.has(image);
                return (
                  <div key={index} className="image-container">
                    <img
                      className={`photo-grid-item ${isLoaded ? 'loaded' : 'loading'}`}
                      src={image}
                      alt=""
                      onLoad={() => this.handleImageLoad(image)}
                    />
                  </div>
                );
              })}
            </div>
          )} />
        </Routes>

        {/* Hidden Audio Player - starts playing on scroll */}
        <iframe
          ref={this.audioRef}
          src="https://archive.org/details/01-romanp.tape-1?auto=1"
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
        ></iframe>

      </div>
    );
  }
}
 
export default Photographs
;