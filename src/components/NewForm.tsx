import { Form, Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as yup from "yup";
import MessageError from "./MessageError";

const schemaValidate = yup.object({
  name: yup.string().required("Name cannot be empty"),
  catsDogs: yup.string().required("You must choose"),
  email: yup.string().required("Email cannot be empty").email("Invalid email"),
  comment: yup
    .string()
    .required("Comment cannot be empty")
    .min(10, "Comment must be longer than 10 symbols"),
});

const initialValues = {
  name: "",
  email: "",
  comment: "",
  skills: {
    program: "",
    qa: "",
    devops: "",
  },
  favColor: "red",
  catsDogs: "",
  adult: false
};

const onSubmit = (data: any) => {
  console.log(data);
};

const NewForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schemaValidate}
    >
      <Form>
        <label>
          Name:
          <Field type="text" name="name" />
          <ErrorMessage name="name" component={MessageError} />
        </label>
        <br />
        <label>
          Email:
          <Field type="email" name="email" />
          <ErrorMessage name="email" component={MessageError} />
        </label>
        <br />
        <label>
          Comment:
          <Field as="textarea" name="comment" />
          <ErrorMessage name="comment">
            {(err) => <div className="errors">{err}</div>}
          </ErrorMessage>
        </label>

        <label>
          Skills:
          <Field type="text" name="skills.qa" />
          <br />
          <Field type="text" name="skills.qa" />
        </label>
        <br />
        <label>
          Favorite color
          <Field as="select" name="favColor">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
        </label>
        <br />
        <div role="group" aria-labelledby="my-radio-group">
            Cats or dogs?
          <label>
            <Field type="radio" name="catsDogs" value="Cats" />
            Cats
          </label>
          <label>
            <Field type="radio" name="catsDogs" value="Dogs" />
            Dogs
          </label>
        </div>

        <label>
            <Field type="checkbox" name="adult" />
            I am over 18
          </label>

        <button>Submit</button>
      </Form>
    </Formik>
  );
};

export default NewForm;
