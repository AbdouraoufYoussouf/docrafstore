import { createGlobalStyle } from "styled-components";

export const shadow = "0px 0px 5px 1px rgb(69 67 96)";

export const GlobalStyle = createGlobalStyle`
 
  * {
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    margin: 0;
  }
  body,
  button,
  input,
  textarea {
    font-family: 'Rubik', sans-serif;
  }
  body {
    line-height: 1.7;
    transition: .5s;
  }

  .image-card{
    cursor: pointer;
  }
  .quantity-desc {
    display: flex;
    align-items: center;
    border: 1px solid gray;
    padding: 0 10px;
    border-radius: 7px;
  }
  .quantity-desc span {
    font-size: 16px;
    padding: 0px 12px;
  }
  .quantity-desc .minus {
    cursor: pointer;
  }
  .quantity-desc .num {
    font-size: 20px;
  }
  .quantity-desc .plus {
    cursor: pointer;
   
  }
h2{
  color: hsl(244, 16%, 43%);
  font-weight: bold;
  font-size: 20px;
}
.shadow{
  box-shadow: "0px 0px 5px 1px rgb(69 67 96)";
}

.text-box {
  
  font-size: 15px;
  display: -webkit-box; /* Afficher le texte comme un conteneur flexible */
  -webkit-line-clamp: 3; /* Définir le nombre de lignes souhaitées */
  -webkit-box-orient: vertical; /* Définir l'orientation des lignes */
  overflow: hidden; /* Cacher le contenu qui dépasse la hauteur définie */
  text-overflow: ellipsis; /* Ajouter des points de suspension pour le texte qui dépasse */
}
.icon{
  font-size: 25px;
  @media screen and (max-width:640px) {
    font-size: 20px !important;
  }
}
  /* @media (prefers-color-scheme: dark) {
  .card,
  .footer {
    border-color: #222;
  }
  html {
    background: #111;
  }
  .logo img {
    filter: invert(1);
  }
} */
  `;
