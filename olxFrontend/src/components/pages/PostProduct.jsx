import React, { useRef, useState } from "react";
import '../../assets/styles/PostProduct.css';
import leftArrow from '../../assets/icons/left-arrow.png';
import { Link, Navigate } from "react-router-dom";

function PostProduct() {
  const [file, setFile] = useState('')

  const titleRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const photosRef = useRef();

  const handleSubmit = async(e) => {

    const formData = new FormData();
    formData.append('title', titleRef.current.value);
    formData.append('description', descriptionRef.current.value);
    formData.append('price', priceRef.current.value);
    formData.append('image', file)

    const post = await fetch('http://localhost:2000/post_product', {
      method: "POST",
      headers: {
        'Custom-Header': 'value'
      },
      body: formData
    })
    
    const json = await post.json()
    console.log(json)

    window.location = '/'
    
  };

  return (
    <div className="mainPost">
      <div className="header">
        <Link to='/'>
          <img className="arrow" src={leftArrow} alt="" />
        </Link>
      </div>
      <h2>POST YOUR AD</h2>
      <div className="postAd">
        <div className="setDetails check">
          <h3>INCLUDE DETAILS</h3>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} />
          <label htmlFor="description">Description</label>
          <textarea id="description" ref={descriptionRef} cols="30" rows="10"></textarea>
        </div>
        <hr />
        <div className="setPrice check">
          <h3>SET A PRICE</h3>
          <input type="number" ref={priceRef} />
        </div>
        <hr />
        <div className="setPhotos check">
          <h3>UPLOAD PHOTOS</h3>
          <input type="file" onChange={(e) => {
            setFile(e.target.files[0])
          } } />
        </div>
      </div>
      <button onClick={handleSubmit}>Post now</button>
    </div>
  );
}

export default PostProduct;
