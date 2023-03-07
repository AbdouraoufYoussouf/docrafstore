import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdShield } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";

const Reglement = () => {

  return (
    <div className=" grid grid-cols-1   md:grid-cols-3  lg:grid-cols-4 xg:grid-cols-4 xl:grid-cols-4 justify-center ">
      <div class="m-4 p-5 bg-gray-200 dark:bg-gray-800 text-left text-current  no-underline border border-gray-700 dark:border-gray-300  rounded-lg transition duration-150 ease-in-out flex flex-col justify-center items-center gap-4 hover:text-blue-500 hover:border-blue-500"
>
        <div className="text-4xl  rounded-full  flex items-center justify-center">
          <TbTruckDelivery />
        </div>
        <h3 className="font-bold ">Livraison garantie &rarr;</h3>
        <p className="m-0 text-base  leading-6 opacity-90 text-justify ">
          Nous offrons des prix compétitifs sur plus de 100 millions de nos
          produits, quelle que soit leur gamme.Nous garantissons une livraison rapide et fiable de tous nos produits. Vous pouvez être assuré que votre achat sera livré à temps et en parfait état.
        </p>
      </div>

      <div class="m-4 p-5 bg-gray-200 dark:bg-gray-800 text-left text-current  no-underline border border-gray-700 dark:border-gray-300 rounded-lg transition duration-150 ease-in-out flex flex-col justify-center items-center gap-4 hover:text-blue-500 hover:border-blue-500"
>
        <div className="text-4xl  rounded-full flex items-center justify-center">
          <RiSecurePaymentLine />
        </div>
        <h3 className="font-bold ">Paiement sécurisé &rarr;</h3>
        <p className="m-0 text-base leading-6 opacity-90 text-justify ">
        Notre plateforme de paiement sécurisée utilise les dernières technologies pour garantir que toutes vos informations de paiement sont protégées. Vous pouvez acheter en toute confiance, en sachant que vos informations personnelles sont en sécurité.
        </p>
      </div>
      <div class="m-4 p-5 bg-gray-200 dark:bg-gray-800 text-left text-current  no-underline border border-gray-700 dark:border-gray-300 rounded-lg transition duration-150 ease-in-out flex flex-col justify-center items-center gap-4 hover:text-blue-500 hover:border-blue-500"
>
        <div className="text-4xl  rounded-full flex items-center justify-center">
          <MdShield />
        </div>
        <h3 className="font-bold ">Achetez en toute confiance &rarr;</h3>
        <p className="m-0 text-base leading-6 opacity-90 text-justify ">
        Notre boutique en ligne est conçue pour offrir une expérience de shopping en ligne transparente et agréable. Vous pouvez acheter en toute confiance en sachant que nous sommes là pour vous aider à chaque étape de votre achat.
        </p>
      </div>
      <div class="m-4 p-5 bg-gray-200 dark:bg-gray-800 text-left text-current  no-underline border border-gray-700 dark:border-gray-300 rounded-lg transition duration-150 ease-in-out flex flex-col justify-center items-center gap-4 hover:text-blue-500 hover:border-blue-500"
>
        <div className="text-4xl  rounded-full flex items-center justify-center">
          <FaPhone />
        </div>
        <h3 className="font-bold ">Assistance 24h/7 &rarr;</h3>
        <p className="m-0 text-base leading-6 opacity-90 text-justify ">
        Notre équipe d'assistance est disponible 24 heures sur 24 pour répondre à toutes vos questions et vous aider en cas de problème. Vous pouvez nous contacter à tout moment et nous ferons tout notre possible pour vous aider.
        </p>
      </div>
    </div>
  );
};

export default Reglement;

// const REglement = styled.section`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   justify-content: center;
//   align-items: center;
//   gap: 25px;
//   width: 100%;
//   .card {
//     margin: 1rem;
//     padding: 1.3rem;
//     text-align: left;
//     color: inherit;
//     text-decoration: none;
//     border: 1px solid #eaeaea;
//     border-radius: 10px;
//     transition: color 0.15s ease, border-color 0.15s ease;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;

   
//     .icone {
      // font-size: 40px;
      // color: ${({ theme }) => theme.color.textColor};
      // padding: 5px;
      // border-radius: 100%;
      // width: 80px;
      // height: 80px;
      // display: flex;
      // align-items: center;
      // justify-content: center;
//       background-color: ${({ theme }) => theme.color.bg};
//     }
//     h2 {
//       font-size: 1.2rem;
//       text-align: center;
//     }

//     p {
//       margin: 0;
//       font-size: 1rem;
//       line-height: 1.5;
//       opacity: 0.8;
//       text-align: justify;
//     }
//      &:hover {
//       color: #0070f3;
//       border-color: #0070f3;
//     }
//   }
// `;
