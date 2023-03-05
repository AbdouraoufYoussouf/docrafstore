import React, { useState } from "react";
import Sentry from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";

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
        <div className="modal-container">
            <span className="hidden"> modal</span>
            <div className="w-[60%] bg-white dark:bg-gray-900 p-4  rounded-lg m-1 max-lg:w-[98%] ">
                <div className="mb-2 flex justify-between">
                    <h2>Confirmé la commande</h2>
                    <button className="bg-red-500 rounded-lg p-1 text-white" onClick={toggleModal}>
                        Close X
                    </button>
                </div>
                <div className="flex justify-between items-center ">
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
                                        ? "border-b  form-input rounded-lg px-4 py-2 border-red-500 mt-3"
                                        : " form-input text-white rounded-lg px-4 py-2 mt-3 border-cyan-400"
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
                                        ? "border-b  form-input rounded-lg px-4 py-2 border-red-500 mt-3"
                                        : "form-input text-white rounded-lg px-4 py-2 mt-3 border-cyan-400"
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
                                        ? "border-b  form-input rounded-lg px-4 py-2 border-red-500 mt-3"
                                        : "form-input text-white rounded-lg px-4 py-2 mt-3 border-cyan-400"
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
                                        ? "border-b  form-input rounded-lg px-4 py-2 border-red-500 mt-3"
                                        : "form-input text-white rounded-lg px-4 py-2 mt-3 border-cyan-400"
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
                                ? " px-5 py-2 mt-4 rounded-xl shadow-emerald-700 shadow-lg text-white w-full font-bold bg-gray-300 dark:bg-gray-400 "
                                : "bg-emerald-500 px-5 py-2 mt-4 rounded-xl shadow-emerald-700 shadow-lg text-white w-full font-bold"
                        }
                                > Payé {total} €</button>
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
        </div>
    );
};

export default ModalUser;



