import React, { useDebugValue, useState } from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { loginUserAction } from './redux/Auth/auth.action';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const initialValues = { email: "", password: "" };
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});

const Login = () => {
  const [formValue,setFormValue] = useState();
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSubmit = (values) => {
    console.log("Handle submit", values);
    dispatch(loginUserAction({data:values}))
  };

  return (
    <>
      <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={initialValues}>
        <Form className="space-y-5">
          <div className='space-y-5'>
            <div>
              <Field as={TextField} name="email" placeholder="Enter email" type="email" variant="outlined" fullWidth />
              <ErrorMessage name='email' component={"div"} className='text-red-500' />
            </div>

            <div>
              <Field as={TextField} name="password" placeholder="Enter password" type="password" variant="outlined" fullWidth />
              <ErrorMessage name='password' component={"div"} className='text-red-500' />
            </div>
          </div>

          <Button sx={{padding: ".8rem 0rem"}} fullWidth variant='contained' color='primary' type="submit">Login</Button>
        </Form>
      </Formik>

       <div className='flex gap-2 items-center justify-center pt-5'>
        <p>If you don't have account !!</p>
        <Button onClick={()=> navigate("/register")} color='primary' variant='contained'>Register</Button>
       </div>
    </>
  );
}

export default Login;
