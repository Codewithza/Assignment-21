import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StudentForm = ({ onSubmit, initialValues }) => {
  const formik = useFormik({
    initialValues: initialValues || {
      name: '',
      rollno: '',
      email: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      rollno: Yup.number().required('Roll No is required').min(1, 'ROll No is required'),
      email: Yup.string().email('Invalid email address').required('Email is required')
    }),
    onSubmit: (values) => {
      onSubmit(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>

      <div>
        <label htmlFor="rollno">Roll No</label>
        <input
          id="rollno"
          name="rollno"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rollno}
        />
        {formik.touched.rollno && formik.errors.rollno ? <div>{formik.errors.rollno}</div> : null}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
