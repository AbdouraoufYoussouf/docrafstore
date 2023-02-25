import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeroHeader = ({ heroBanner }) => {
 let name = heroBanner?.name
  const path = name?.split(" ").join("_");
  return (
    <BannerContainer>
      <p className="beats-solo">{heroBanner?.name}</p>
      <h3>{heroBanner?.name}</h3>
      <h1>The Best</h1>
      <img
        src={heroBanner?.picture}
        alt="casques"
        className="hero-banner-image"
      />
      <div>
        <Link href={`/product/${path}`}>
          <button>Voir le produit</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>{heroBanner?.description}</p>
        </div>
      </div>
    </BannerContainer>
  );
};

export default HeroHeader;

const BannerContainer = styled.div`
  margin-top: 20px;
  padding: 60px 40px;
  background-color: #dcdcdc;
  border-radius: 15px;
  position: relative;
  height: 500px;
  line-height: 0.9;
  width: 100%;

  .beats-solo {
    font-size: 20px;
  }
  button {
    border-radius: 15px;
    padding: 10px 16px;
    background-color: #f02d34;
    color: white;
    border: none;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    z-index: 10000 !important;
  }
  h3 {
    font-size: 4rem;
    margin-top: 4px;
  }
  h1 {
    color: white;
    font-size: 10em;
    margin-left: -20px;
    text-transform: uppercase;
  }
  .hero-banner-image {
    position: absolute;
    top: 0%;
    right: 20%;
    width: 450px;
    height: 450px;
  }
  .desc {
    position: absolute;
    right: 3%;
    bottom: 5%;
    width: 300px;
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    color: #324d67;
  }
  .desc p {
    color: #5f5f5f;
    font-weight: 100;
    text-align: justify;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  .desc h5 {
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 16px;
    /* color: black; */
    align-self: center;
  }

  @media screen and (max-width: 800px) {
    height: 560px;

    .hero-banner-image {
      width: 77%;
      height: 62%;
      top: -2%;
      right: -6%;
    }
    .banner-desc {
      flex-wrap: wrap;
      gap: 20px;
    }

    h1 {
      font-size: 50px;
    }
    h3 {
      font-size: 40px;
    }
    button {
      margin-top: 90px;
      z-index: 10000;
    }
    .desc {
      bottom: 60px;
    }
    .product-detail-container {
      flex-wrap: wrap;
    }
    .product-detail-container .product-detail-image {
      width: 350px;
      height: 350px;
    }
  }
`;
