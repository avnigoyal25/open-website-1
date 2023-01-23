import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from './Breadcrumb';
import ContactArea from './ContactArea';


function Contact() {
  return (
	<>
	<Header/>
	<main>
	<Breadcrumb/>
	<ContactArea/>
	</main>
	<Footer/>
	</>
  )
}

export default Contact