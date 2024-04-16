import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useGlobalContext } from "./Context";
import axios from "axios";
import * as Yup from "yup";

const productSchema = Yup.object().shape({
  name: Yup.string().required("Product Name is Required"),
  quantity: Yup.number().required("Quantity is Required"),
  price: Yup.number().required("Price is Required"),
});

const AddProduct = () => {
  const { getProducts } = useGlobalContext();
  const handleSubmit = async (values) => {
    console.log(values);
    const res = await axios.post("http://localhost:8000/products", {
      id: nanoid(10),
      name: values.name,
      quantity: values.quantity,
      price: values.price,
    });
    getProducts();
  };

  return (
    <div>
      <h1>Add Product</h1>
      <Formik
        initialValues={{ name: "", quantity: "", price: "" }}
        validationSchema={productSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="form" autoComplete="off">
            <div>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Enter Product Name"
              />
              <span>{errors.name}</span>
            </div>
            <div>
              <input
                type="number"
                name="quantity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantity}
                placeholder="Enter Quantity"
              />
              <span>{errors.quantity}</span>
            </div>
            <div>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                placeholder="Enter Price"
              />
              <span>{errors.price}</span>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

// export const Basic = () => (
//   <div>
//     <h1>Anywhere in your app!</h1>
//     <Formik
//       initialValues={{ name: "", quantity: "", price: "" }}
//       validationSchema={productSchema}
//       onSubmit={handleSubmit}
//     >
//       {({
//         values,
//         errors,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//       }) => (
//         <form onSubmit={handleSubmit} className="form" autoComplete="off">
//           <div>
//             <input
//               type="text"
//               name="name"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.name}
//               placeholder="Enter Product Name"
//             />
//             <span>{errors.name}</span>
//           </div>
//           <div>
//             <input
//               type="number"
//               name="quantity"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.quantity}
//               placeholder="Enter Quantity"
//             />
//             <span>{errors.quantity}</span>
//           </div>
//           <div>
//             <input
//               type="number"
//               name="price"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.price}
//               placeholder="Enter Price"
//             />
//             <span>{errors.price}</span>
//           </div>

//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );

export default AddProduct;
