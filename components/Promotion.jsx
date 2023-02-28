import React from "react";
import styled from "styled-components";

const Promotion = ({products}) => {
  return (
    <Promo>
      <PromoLeft>
        <img src={products[0].image} />
        <p>{products[0].slug}% OFF</p>
        <div className="bottom">
          <span>{products[0].text}</span>
          <button className="btn">Shop Now</button>
        </div>
      </PromoLeft>
      <PromoRight>
        <div className="left">
            <img src={products[1].image} />
        </div>
        <div className="right">
            <h1 className="titre">{products[1].name}</h1>
          <p className="text">{products[1].text}</p>
          <p className="price">${products[1].price} </p>
          <button className="btn">Shop Now</button>
        </div>
      </PromoRight>
    </Promo>
  );
};

export default Promotion;

const Promo = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 20px;
`;

const PromoLeft = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.bg};
  box-shadow: ${({ theme }) => theme.color.shadow} 0px 4px 16px;
  width: 35%;
  height: 100%;
  img {
    max-height: auto;
    max-width: 80%;
  }
  p {
    position: absolute;
    left: 0px;
    top: 10px;
    color: white;
    padding: 1px 8px;
    border-radius: 5px;
    font-size: 30px;

    background-color: ${({ theme }) => theme.color.firstColor};
    font-weight: bold;
    margin-left: 10px;
  }
  .bottom {
    position: absolute;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    span {
      font-size: 25px;
      font-weight: bold;
      margin: 7px;
    }
  }
`;
const PromoRight = styled.section`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 7px;
  background-color: ${({ theme }) => theme.color.bg};
  width: 75%;
  height: 100%;
  display: flex;
  
.left{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
}
.right{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
}
.titre{
    font-size: 40px;
    font-weight: bold;
}
.text{
    font-size: 25px;
    font-weight: bold;
    font-style: italic;
    opacity: 0.8;
}
.price{
    font-size: 40px;
    font-weight: bold;
} 
`;
