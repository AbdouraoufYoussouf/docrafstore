import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  gap: 40px;
  margin: 40px;
  margin-top: 60px;
  color: #324d67;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const Recomandation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  margin: 40px;
  margin-top: 60px;
  color: #324d67;
  .product-reco {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
  }
`;
export const DetailImage = styled.div`
  width: 30%;
  .productDetailImage {
    padding: 1rem;
    border-radius: 15px;
    background-color: #ebebeb;

    transition: 0.3s ease-in-out;
  }
  .productDetailImage:hover {
    background-color: #f02d34;
  }
  .smallImagesContainer {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  .smallImage {
    padding: 0.2rem;
    border-radius: 8px;
    background-color: #ebebeb;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
  .selectedImage {
    background-color: #f02d34;
  }
  @media screen and (max-width: 900px) {
    width: 60%;
    align-self: center;
  }
`;

export const ProductDescription = styled.div`
  width: 70%;
  h1 {
    font-weight: bold;
  }
  .reviews {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .starts {
    gap: 0.3rem;
    display: flex;
  }
  h4,
  p {
    margin-top: 10px;
  }
  .price {
    font-weight: 700;
    font-size: 26px;
    margin-top: 30px;
    color: #f02d34;
  }
  .price .old-price,
  .product-price .old-price,
  .price .old-price {
    color: gray;
    text-decoration: line-through;
  }
  .quantity {
    display: flex;
    gap: 20px;
    margin-top: 10px;
    align-items: center;
  }
  .buttons {
    display: flex;
    gap: 30px;
  }

  .buttons .add-to-cart {
    padding: 10px 20px;
    border: 1px solid #f02d34;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    background-color: white;
    color: #f02d34;
    cursor: pointer;
    width: 200px;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }
  .buttons .add-to-cart:hover {
    transform: scale(1.1, 1.1);
  }
  .buttons .buy-now {
    width: 200px;

    padding: 10px 20px;
    background-color: #f02d34;
    color: white;
    border: none;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }
  .buttons .buy-now:hover {
    transform: scale(1.1, 1.1);
  }
  
  @media screen and (max-width: 900px) {
    width: 95%;
  }
`;
