import React from 'react'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarqueee'
import VetServicesSection from '../VetServicesSection/VetServicesSection'
import BeMerchant from '../BeMerchant/BeMerchant'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ClientLogosMarquee></ClientLogosMarquee>
      <VetServicesSection></VetServicesSection>
      <BeMerchant></BeMerchant>
    </div>
  )
}

export default Home
