import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { menuDelete, menuPost } from "../../Service/MenuCrud";
import { Helmet } from "react-helmet-async";
const AddPage = () => {
  const [search, setSearch] = useState("");
  const [property, setProperty] = useState(null);
  const [api, setApi] = useState([]);
  async function getApi() {
    await fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }

  async function handleDelete(id) {
    await menuDelete(id);
    await getApi();
  }
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <section className="addPage">
        <div className="addPage__container">
          <div className="addPage__container__formik">
            <Formik
              initialValues={{ name: "", description: "", price: "" }}
              validationSchema={Yup.object({
                name: Yup.string().min(2, "too short").required("Required"),
                description: Yup.string()
                  .min(2, "too short")
                  .required("Required"),
                price: Yup.number()
                  .positive("don't use negative number ")
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  menuPost(values);
                  getApi();
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <div>
                  <label htmlFor="name">Name</label>
                  <Field name="name" type="text" />
                  <ErrorMessage name="name" />
                </div>
                <div>
                  <label htmlFor="description">description</label>
                  <Field name="description" type="text" />
                  <ErrorMessage name="description" />
                </div>
                <div>
                  <label htmlFor="price">Price</label>
                  <Field name="price" type="number" />
                  <ErrorMessage name="price" />
                </div>
                <button type="submit">Submit</button>
              </Form>
            </Formik>
          </div>

          <div className="addPage__container__table">
            <input
              value={search}
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() => setProperty({ choosenprop: "name", asc: true })}
            >
              a-Z
            </button>
            <button
              onClick={() => setProperty({ choosenprop: "name", asc: false })}
            >
              Z-a
            </button>
            <button
              onClick={() => setProperty({ choosenprop: "price", asc: true })}
            >
              price+
            </button>
            <button
              onClick={() => setProperty({ choosenprop: "price", asc: false })}
            >
              price-
            </button>
            <button onClick={() => setProperty(null)}>Default</button>
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>description</th>
                  <th>price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {api
                  .filter((x) =>
                    x.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .sort((a, b) => {
                    if (property && property.asc === true) {
                      return a[property.choosenprop] > b[property.choosenprop]
                        ? 1
                        : b[property.choosenprop] > a[property.choosenprop]
                        ? -1
                        : 0;
                    }
                   else if (property && property.asc === true) {
                      return a[property.choosenprop] < b[property.choosenprop]
                        ? 1
                        : b[property.choosenprop] < a[property.choosenprop]
                        ? -1
                        : 0;
                    }
                    else{
                      return 0
                    }
                  })
                  .map((x) => {
                    return (
                      <tr key={x._id}>
                        <td>{x.name}</td>
                        <td>{x.description}</td>
                        <td>{x.price}</td>
                        <td>
                          <button onClick={() => handleDelete(x._id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddPage;
