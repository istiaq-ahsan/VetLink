import React from 'react'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarqueee'
import VetServicesSection from '../VetServicesSection/VetServicesSection'
import BeMerchant from '../BeMerchant/BeMerchant'
import Faq from '../Faq/Faq'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Banner></Banner>
      <Services></Services>
      <ClientLogosMarquee></ClientLogosMarquee>
      <VetServicesSection></VetServicesSection>
      <BeMerchant></BeMerchant>
      <Faq></Faq>
    </div>
  )
}

export default Home
