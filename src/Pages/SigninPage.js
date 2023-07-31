import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Signin from '../Components/SIGN IN PAGE COMPONENTS/Signin'
import Footer from '../Components/Footer'

export default function SigninPage() {

  useEffect(() => {
    document.title = "Hype - Sign in/Sign up";
  }, []);
  return (
    <>
     <Navbar/>
     <Signin/>
     <Footer/>
    </>
  )
}
