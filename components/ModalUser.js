import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Le nom complet est requis"),
  email: Yup.string()
    .email("Adresse e-mail invalide")
    .required("L'adresse e-mail est requise"),
  ville: Yup.string().required("La ville est requise"),
  adresse: Yup.string().required("L'adresse est requise"),
});

const ModalUser = ({ total, selectProducts, toggleModal }) => {
  const initialValues = {
    fullName: "",
    email: "",
    ville: "",
    adresse: "",
    productsIds: selectProducts.join(","),
  };

  const onSubmit = (values) => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
    };
    fetch("api/products/checkout", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          // La requête a été envoyée avec succès
          console.log("Message envoyé avec succès");
        } else {
          // La requête a échoué
          console.error("La requête a échoué");
        }
      })
      .catch((error) => {
        console.error("Une erreur s'est produite", error);
      });
  };

  return (
    <Modal>
        <div className="modal">
            <span style={{display:'none'}}> Modal</span>
          <div className="modal-header">
            <h2>Confirmé la commande</h2>
            <button style={{ color: "tomato" }} onClick={toggleModal}>
              Close X
            </button>
          </div>
          <div className="modal-content">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    className={
                      errors.fullName && touched.fullName
                        ? "border-b border-red-500 bg-gray-100 w-full rounded-lg px-4 py-2 mb-3"
                        : "bg-gray-100 w-full rounded-lg px-4 py-2 mb-3"
                    }
                  />
                  <ErrorMessage name="fullName">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>

                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className={
                      errors.email && touched.email
                        ? "border-b border-red-500 bg-gray-100 w-full rounded-lg px-4 py-2 mb-3"
                        : "bg-gray-100 w-full rounded-lg px-4 py-2 mb-3"
                    }
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500">{errors.email}</div>
                  ) : null}

                  <Field
                    type="text"
                    name="ville"
                    id="ville"
                    placeholder="Ville"
                    className={
                      errors.ville && touched.ville
                        ? "border-b border-red-500 bg-gray-100 w-full rounded-lg px-4 py-2 mb-3"
                        : "bg-gray-100 w-full rounded-lg px-4 py-2 mb-3"
                    }
                  />
                  <ErrorMessage name="ville">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>

                  <Field
                    type="text"
                    name="adresse"
                    id="adresse"
                    placeholder="Adresse"
                    className={
                      errors.adresse && touched.adresse
                        ? "border-b border-red-500 bg-gray-100 w-full rounded-lg px-4 py-2 mb-3"
                        : "bg-gray-100 w-full rounded-lg px-4 py-2 mb-3"
                    }
                  />
                  <ErrorMessage name="adresse">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>

                  <Field type="hidden" name="productsIds" id="productsIds" />
                  <button
                    type="submit"
                    className="bg-emerald-500 px-5 py-2 mt-4 rounded-xl shadow-emerald-300 shadow-lg text-white w-full font-bold"
                  >
                    Payé {total} Dhs
                  </button>
                </Form>
              )}
            </Formik>
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
