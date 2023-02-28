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
.shadow-card{
  box-shadow: rgb(43 52 69 / 40%) 0px 4px 16px;
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
  cursor: pointer;
  &&:hover{
    color: blue !important;
  }
  @media screen and (max-width:640px) {
    font-size: 20px !important;
  }
}
.delete {
  font-size: 30px !important;
}

.scrol::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.scrol::-webkit-scrollbar-thumb {
  border-radius: 7px;
  background-color: tomato;
}

.h-v6{
  height: 60vh;
}
.tomato{
  color: tomato;
}
.h-v4{
  height: 100%;
  width: auto;
  @media screen and (max-width:530px) {
    height: 70%;
    position: absolute;
    top: 40px;
    left: auto;
  }
  @media screen and (max-width:430px) {
    left: -30px;
  }

}
.h-v3{
  height: 80%;
  width: auto;
  @media screen and (max-width:530px) {
    height: 40%;
    position: absolute;
    top: 220px;

  }
  @media screen and (max-width:430px) {
    left: -30px;
  }

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

// quelques classes ajouter manuelment pour BanerCasque

.font-mono{
  font-family: 'Courier New', Courier, monospace;
}
.font-tury{
  font-family:Century;
}
.font-conso{
  font-family:Consolas;
}
.font-roma{
  font-family: Times, Times New Roman, serif
}

.bg-deg{
  background-image: linear-gradient(to right top, #46be70, #00bf9b, #00bdbe, #00b8d5, #4db1de, #66a7d8, #799cce, #8792c1, #8383b1, #7e73a0, #79658f, #73567e);}

  .bac-text {
  color: #ffffff;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
}

/// Class ajouter pour le filter dans le composant index de Casques
.aside{
  

  .filter {
    margin-bottom: 8px;
    text-align: left;
  }
} 

.contenu{
  flex: 1;
 display: grid;
 grid-template-columns: repeat(4,1fr);
 
  gap: 15px;
  border-radius: 7px;
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
