import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Sentry from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";
import { useForm } from "react-hook-form";

const ModalUser = ({ total, selectProducts, toggleModal }) => {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [adress, setAdress] = useState("");
    // Error des inputs
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [cityError, setCityError] = useState("");
    const [adressError, setAdressError] = useState("");
    // Validation des inputs
    const validateName = () => {
        if (name.length === 0) {
            setNameError("Veuillez entrer votre nom.");
        } else if (name.length > 30) {
            setNameError("Votre nom doit contenir moins de 30 caractères.");
        } else {
            setNameError("");
        }
    };
    const validateEmail = () => {
        const re = /\S+@\S+\.\S+/;
        if (email.length === 0) {
            setEmailError("Veuillez entrer votre E-mail.");
        } else if (!re.test(email)) {
            setEmailError("Veuillez entrer une adresse email valide.");
        } else {
            setEmailError("");
        }
    };
    const validateCity = () => {
        if (city.length === 0) {
            setCityError("Veuillez entrer votre Ville.");
        } else if (city.length > 30) {
            setCityError("Votre nom doit contenir moins de 30 caractères.");
        } else {
            setCityError("");
        }
    };
    const validateAdress = () => {
        if (adress.length === 0) {
            setAdressError("Veuillez entrer votre Adresse.");
        } else {
            setAdressError("");
        }
    };
    //Fonction du button envoie si le formulaire n'est pas valide
    function handlNotValid() {
        validateName()
        validateEmail()
        validateCity()
        validateAdress()
    }
    //Variable qui contient tous les erreurs s'il ya error

 
    const isFormValid = name.trim() !== '' && nameError === '' && email.trim() !== '' && emailError === '' && city.trim() !== '' && cityError === '' && adress.trim() !== '' && adressError === '' ; 

    console.log('error', isFormValid)


    const [loding, setLoding] = useState(false);

    const notify = (result) =>
        toast.info(result, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    return (
        <Modal>
            <div className="modal">
                <span style={{ display: "none" }}> Modal</span>
                <div className="modal-header">
                    <h2>Confirmé la commande</h2>
                    <button style={{ color: "tomato" }} onClick={toggleModal}>
                        Close X
                    </button>
                </div>
                <div className="modal-content">
                    <form action="api/products/checkout" method="POST" onsubmit="event.preventDefault(); handleSubmit(event)">
                        <div>
                            <input
                                name="name"
                                onBlur={validateName}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    validateName();
                                }}
                                maxLength={30}
                                value={name}
                                className={
                                    nameError
                                        ? "border-b border-red-500 bg-gray-100 w-full rounded-lg px-4 py-2 "
                                        : "bg-gray-100 w-full rounded-lg px-4 py-2"
                                }
                                placeholder="Full Name"
                            />
                            {nameError && <span className="text-red-500">{nameError}</span>}
                            <input
                                name="email"
                                onBlur={validateEmail}
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    validateEmail();
                                }}
                                className={
                                    emailError
                                        ? "border-b border-red-500 bg-gray-100 w-full rounded-lg px-4 py-2 mt-3"
                                        : "bg-gray-100 w-full rounded-lg px-4 py-2 mt-3"
                                }
                                placeholder="Email"
                            />
                            {emailError && <span className="text-red-500">{emailError}</span>}
                            <input
                                name="city"
                                value={city}
                                onBlur={validateCity}
                                onChange={(e) => {
                                    setCity(e.target.value);
                                    validateCity();
                                }}
                                className={
                                    cityError
                                        ? "border-b border-red-500 bg-gray-100 w-full rounded-lg px-4 py-2 mt-3"
                                        : "bg-gray-100 w-full rounded-lg px-4 py-2 mt-3"
                                }
                                placeholder="Ville"
                            />
                            {cityError && <span className="text-red-500">{cityError}</span>}
                            <input
                                name="adress"
                                value={adress}
                                onBlur={validateAdress}
                                onChange={(e) => {
                                    setAdress(e.target.value);
                                    validateAdress();
                                }}
                                className={
                                    adressError
                                        ? "border-b border-red-500 bg-gray-100 w-full rounded-lg px-4 py-2 mt-3"
                                        : "bg-gray-100 w-full rounded-lg px-4 py-2 mt-3"
                                }
                                placeholder="Adresse"
                            />
                            {adressError && <span className="text-red-500">{adressError}</span>}
                        </div>
                        <input
                            type="hidden"
                            name="products"
                            value={selectProducts.join(",")}
                        />
                        {!loding ? (<button type="submit" disabled={!isFormValid}
                         className={
                            !isFormValid
                                ? " px-5 py-2 mt-4 rounded-xl shadow-emerald-300 shadow-lg text-white w-full font-bold bg-gray-300 "
                                : "bg-emerald-500 px-5 py-2 mt-4 rounded-xl shadow-emerald-300 shadow-lg text-white w-full font-bold"
                        }
                                > Payé {total} Dhs</button>
                        ) : (
                            <div
                                style={{
                                    backgroundColor: "cadetblue",
                                    borderRadius: 25,
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <Sentry color="white" size={25} speed={1} animating={true} />
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default ModalUser;

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    width: 70%;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    margin: 1rem;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-header h2 {
    margin: 0;
  }

  .modal-content {
    margin-top: 20px;
  }
`;
