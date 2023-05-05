import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const schemaValidate = yup.object({
  name: yup.string().required("Name cannot be empty"),
  email: yup.string().required("Email cannot be empty").email("Invalid email"),
});

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const initialValues = {
    name: "",
    email: "",
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const validate = (values: any) => {
    const errors = { name: "", email: "" };

    if (!values.name) {
      errors.name = "Required (no name)";
    }

    if (!values.email) {
      errors.email = "Required (no email)";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: schemaValidate,
  });
  console.log("Errors", formik.errors);
  console.log("Touched", formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name ? (
          <div className="errors">{formik.errors.name}</div>
        ) : null}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <div className="errors">{formik.errors.email}</div>
        ) : null}
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;
