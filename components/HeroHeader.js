import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { SlCallIn } from "react-icons/sl";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const HeroHeader = ({ heroBanner }) => {
  let name = heroBanner?.name
  const path = name?.split(" ").join("_");
  return (
    <BannerContainer>
      <BannerLeft>
        <div className="top">

          <p className="new">new and modern</p>
          <h2 className="name">Headphone 15 pro</h2>
          <p className="offer">aujourd’hui derniere offre </p>
          <Link href={`/product/${path}`}>
          <button className="shopnow">Voir le produit</button>
        </Link>
        </div>
        <div className="bottom">
          <SlCallIn className="b-left" />
          <span className="b-rigth">
            <p className="call">Appel pour livraison</p>
            <p className="number">0633851644</p>
          </span>
        </div>
      </BannerLeft>
      <BannerCenter>
        <img src={heroBanner?.picture} />
      </BannerCenter>
      <BannerRight>
        <div className="top">
          <span className="pourc">50%</span>
          <span className="off">OFF</span>
        </div>
        <div className="bottom">
          <FaFacebook  className="social" />
          <FaInstagram className="social" />
          <FaTiktok className="social" />
        </div>
      </BannerRight>
    </BannerContainer>
  );
};

export default HeroHeader;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 30px 40px;
  background-color: #dcdcdc;
  border-radius: 15px;
  position: relative;
  height: 400px;
  line-height: 0.9;
  width: 100%;
  background-image: linear-gradient(
    to right top,
    #b3bdcd,
    #8bc5db,
    #5ecfcb,
    #6cd29b,
    #a8cb5d
  );
  @media screen and (max-width:800px) {
    padding:10px;
  }
`;
const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
    color: hsl(244, 16%, 43%);

  .top{
    font-style: italic;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      gap: .4rem;
      font-family: Andale Mono, monospace;
    }
    .new{
      font-weight: bold;
      font-size: 25px;
    }
    .name{
      font-weight: 900;
      font-size: 60px;
      color: tomato;
    }
    .shopnow{
      font-weight: bold;
      font-size: 20px;
      background-color: tomato;
      padding: 15px 8px;
      text-transform: uppercase;
      border-radius: 7px;
      color: white;
      width: 50%;
      z-index: 10;
    }

    //bottom
.bottom{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
}
.b-left{
  align-self: center;
  font-size: 35px;
  color: tomato;
}
.b-rigth{
  display: flex;
  flex-direction: column;
  gap: .2rem;
  align-self: center;
  
}
  .call{
    font-family: 'Courier New', Courier, monospace;
    text-transform: uppercase;
  }
  .number{
    font-weight: 900;
    font-size: 20px;
    font-family: monospace;
  }
  @media screen and (max-width:900px) {
    .new{
      font-size: 25px;
    }
    .name{
      font-size: 40px;
    }
    .shopnow{
      font-weight: bold;
      font-size: 20px;
      background-color: tomato;
      padding: 10px 5px;
      text-transform: uppercase;
      border-radius: 7px;
      color: white;
      width: 70%;
      margin-top: 10px;
    }
  }
  @media screen and (max-width:500px) {
    justify-content: space-between;
    .top{
      margin-top: 2rem;
    }
    .new{
      font-size: 20px;
    }
    .name{
      font-size: 30px;
    }
    .shopnow{
      font-size: 14px;
      padding: 10px 5px;
      width: 90%;
    }
    .call{
      font-size: 14px;
    }
    .b-left{
  font-size: 25px;
}
  }
`;

const BannerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 116%;
  img{
    max-height: 100%;
    width: auto;
    z-index: 0;
  }
  @media screen and (max-width:800px) {
    img{
      position: absolute;
      height: 70%;
      bottom: 10px;
    }
  }
  @media screen and (max-width:500px) {
    background-color: red;
    img{
      position: absolute;
      height: 60%;
      left: 20%;
      bottom: 30px;
    }
  }
`;
const BannerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: space-between;

.top{
  background-color: tomato;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  padding: 1rem;
  border-radius: 50%;
 
}
.off{
  font-weight: bold;
}
.social{
  font-size:30px ;
  padding: 2px;
  border-radius: 50px;
  color:hsl(244, 16%, 43%);
  transition: all 0.5s linear;
 
}
.social:hover{
  color: white;
  background: #ff4a57;;
    border: 2px solid transparent;
}
.bottom{
display:flex;
gap: 0.4rem;
}

`;
