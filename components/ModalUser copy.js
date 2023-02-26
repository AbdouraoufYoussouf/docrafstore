import React, { useState } from "react";
import styled from "styled-components";
import Sentry from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Le nom complet est requis"),
  email: Yup.string()
    .email("Adresse e-mail invalide")
    .required("L'adresse e-mail est requise"),
  city: Yup.string().required("La ville est requise"),
  adress: Yup.string().required("L'adresse est requise"),
});

const ModalUser = ({ total, selectProducts, toggleModal }) => {
  const initialValues = {
    fullName: "",
    email: "",
    city: "",
    adress: "",
    products: selectProducts.join(","),
  };

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


  const onSubmit = (values) => {
    setLoding(true)
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
          console.log("Message envoyé avec succès",response);
          setLoding(false)
        } else {
          // La requête a échoué
          console.error("La requête a échoué",response);
          setLoding(false)
        }
      })
      .catch((error) => {
        console.error("Une erreur s'est produite", error);
        setLoding(false)
      });
  };
  const submitForm = async (formData) => {
    console.log('data',formData)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization, X-Requested-With',
      },
    };
  
    try {
      const response = await axios.post('/api/products/checkout', formData, config);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

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
              onSubmit={submitForm}
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
                    name="city"
                    id="city"
                    placeholder="city"
                    className={
                      errors.city && touched.city
                        ? "border-b border-red-500 bg-gray-100 w-full rounded-lg px-4 py-2 mb-3"
                        : "bg-gray-100 w-full rounded-lg px-4 py-2 mb-3"
                    }
                  />
                  <ErrorMessage name="city">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>

                  <Field
                    type="text"
                    name="adress"
                    id="adress"
                    placeholder="Adress"
                    className={
                      errors.adress && touched.adress
                        ? "border-b border-red-500 bg-gray-100 w-full rounded-lg px-4 py-2 mb-3"
                        : "bg-gray-100 w-full rounded-lg px-4 py-2 mb-3"
                    }
                  />
                  <ErrorMessage name="adress">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>

                  <Field type="hidden" name="products" id="products" />
                  {!loding ? (
                <button
                type="submit"
                className="bg-emerald-500 px-5 py-2 mt-4 rounded-xl shadow-emerald-300 shadow-lg text-white w-full font-bold"
              >
                Payé {total} Dhs
              </button>
              ) : (
                <div
                  style={{
                    backgroundColor: "cadetblue",
                    borderRadius: 25,
                    paddingLeft: 30,
                    paddingRight: 30,
                    display:'flex',
                    justifyContent:'center'
                  }}
                >
                  <Sentry color="white" size={25} speed={1} animating={true} />
                </div>
              )}
                  
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
