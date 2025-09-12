import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/398311c5-eb04-46d6-b1cb-2849773de5e7/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_1.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/0a6ce302-c6a7-44aa-9bf8-f4657c59709b/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_2.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/b43c9b8e-0a30-4833-b683-5dc7ff66c929/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_3.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/368cb0be-407d-43ba-acd4-be7eefe1ce56/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_4.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/1c46edc3-b8fd-42f3-b3a9-65124a564819/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_5.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/82d90206-b249-4247-943d-eeed3ac6d4e0/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_6.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/83b591fc-b1ac-4357-a1a3-fe1f4f95b13e/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_7.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/64e8e760-84a9-4302-8eaf-cdd55ddcac38/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_8.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/aebd4ad5-5093-4cd7-ae1e-67047730421b/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_9.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/001ca431-6cf4-4c28-857c-5c5bff6c2af3/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_10.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/4b328fcb-b155-42cb-9e45-7fa084a04c56/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_11.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/4db994f5-4450-4947-9550-48b67491eb42/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_12.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/814aa9ec-ba4b-42b6-a61b-0bc75b027741/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_13.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/44c42f4c-8832-448c-bcf7-e9c89573a694/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_14.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/67d905b4-b9b3-47b6-bf28-43ceac95b053/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_15.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/e6edc727-57cc-4aec-b24c-4c602fafca8a/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_16.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9228a61e-bda1-4c6e-82fd-7dd5868f9ee7/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_17.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/aa8aacb3-781c-4576-85ed-bd51495ab477/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_18.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/ca098faa-a390-4211-9898-62cc3802a381/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_19.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/505885bb-cec2-4fe3-8d55-05b907844c57/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_20.png?content-type=image%2Fpng",
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/69959c8a-b42f-4f69-bb03-d6b4dfe4c826/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_21.png?content-type=image%2Fpng"
];

class Paper2021to2025
 extends Component {
  render() {
    return (
      <div className="paper-21" >
          {imgs.map(image => (
              <img className="d-block w-100" src={image} alt="" />
          ))}         
      </div>
    );
  }
}
 
export default Paper2021to2025
;