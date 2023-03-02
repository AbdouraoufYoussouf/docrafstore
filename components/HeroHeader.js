import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { SlCallIn } from "react-icons/sl";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const HeroHeader = ({ heroBanner }) => {
  let name = heroBanner?.name
  const path = name?.split(" ").join("_");
  return (
    <div className="w-full flex justify-between items-start my-2 rounded-lg relative heroheader max-lg:p-3 max-xm:p-2">
      <BannerLeft>
        <div className="top">

          <p className="new">new and modern</p>
          <h2 className="name">{name}</h2>
          <p className="offer">aujourd’hui derniere offre </p>
          <Link href={`/product/${path}`} className=" ">
          <span className="shopnow">Voir le produit</span>
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
       <img src={"/products/headset.png"} />
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
    </div>
  );
};

export default HeroHeader;

const BannerLeft = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: 3rem;
    color: hsl(244, 16%, 43%);
  .top{
    font-style: italic;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: .5rem;
      font-family: Andale Mono, monospace;
      color: white;
    }
    .new{
      font-weight: bold;
      font-size: 25px;
      color: white;
    }
    .name{
      font-weight: 900;
      font-size: 40px;
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
      z-index: 10;
    }
    //bottom
.bottom{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  color: white;
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
    z-index: 10;
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
      font-size: 30px;
    }
    .shopnow{
      font-weight: bold;
      font-size: 18px;   
    }
  }
  @media screen and (max-width:500px) {
    justify-content: space-between;
    .top{
      margin-top: 2rem;
      gap: 14px;
    }
    .new{
      font-size: 20px;
    }
    .name{
      font-size: 25px;
    }
    .shopnow{
      font-size: 16px;
      padding: 7px ;
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
      right: 50px;
    }
  }
  @media screen and (max-width:500px) {
    background-color: red;
    img{
      position: absolute;
      height: 50%;
      right: 10px;
      bottom: 60px;
    }
  }
`;

const BannerRight = styled.div`
  display: flex;
  height: 100%;
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
.bottom{
display:flex;
gap: 0.4rem;
}
`;