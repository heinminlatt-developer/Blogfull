import React from 'react'
import Topbar from '../layouts/Topbar';
import BodyUp from '../components/BodyUp';
import Footer from '../layouts/Footer';
import MyForm from '../components/MyForm';
import Profile from '../components/Profile';
import FormBody from '../components/FormBody';

function SignUp() {
  return (
    <div>
        <Topbar/>
        <BodyUp/>
        <FormBody/>
        <MyForm/>
        <Footer/>

    </div>
  )
}

export default SignUp