import React from 'react'
import Layout from '../../../components/layout/Layout'
import Cards from './components/cards/Cards'
import Navbar from '../../../components/navbar/Navbar'

const Home = () => {
    return (
        <Layout>
            <div className="pt-22"> 
        <div className="flex flex-wrap justify-center space-x-5">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
                </div> 
          </div>      
        </Layout> 
      
  )
}

export default Home