import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { registerUserAction } from './redux/Auth/auth.action';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const initialValues = { firstName:"", lastname:"", email: "", password: "", gender:"" };
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});

const Register = () => {
  const [gender,setGender] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSubmit = (values) => {
    values.gender=gender;
    console.log("Handle submit", values);

    dispatch(registerUserAction({data:values}))
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={initialValues}>
        <Form className="space-y-5">
          <div className='space-y-5'>
            <div>
              <Field as={TextField} name="firstName" placeholder="Enter First Name" type="text" variant="outlined" fullWidth />
              <ErrorMessage name='firstName' component={"div"} className='text-red-500' />
            </div>

            <div>
              <Field as={TextField} name="lastname" placeholder="Enter Last Name" type="text" variant="outlined" fullWidth />
              <ErrorMessage name='lastname' component={"div"} className='text-red-500' />
            </div>

            <div>
              <Field as={TextField} name="email" placeholder="Enter email" type="email" variant="outlined" fullWidth />
              <ErrorMessage name='email' component={"div"} className='text-red-500' />
            </div>


            <div>
              <Field as={TextField} name="password" placeholder="Enter password" type="password" variant="outlined" fullWidth />
              <ErrorMessage name='password' component={"div"} className='text-red-500' />
            </div>
          </div>

          <div>
          <RadioGroup onChange={handleChange} row aria-label="gender" name="gender">

        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <ErrorMessage name='gender' component={"div"} className='text-red-500' />

       
      </RadioGroup>
          </div>

          <Button sx={{padding: ".8rem 0rem"}} fullWidth variant='contained' color='primary' type="submit">Register</Button>
        </Form>
      </Formik>

      <div className='flex gap-2 items-center justify-center pt-5'>
        <p>Already have account !!</p>
        <Button onClick={()=> navigate("/")} color='primary' variant='contained'>Login</Button>
       </div>

    </>
  );
}

export default Register;
