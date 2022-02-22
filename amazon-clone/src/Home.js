import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
          <img
            className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt='bg'
          />

          <div className='home__row'>
              <Product
              id="12321341"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
              />

              <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer Baking, Stylish Kitchen Mixer K-beater, Dough Hook and Whisk, Glass Bowl"
              price={239.0}
              rating={4}
              image="https://www.kenwoodworld.com/WebImage/Global/New%20products/1_KW_kMix_Red_800x600.jpg"
              />
              
          </div>

          <div className='home__row'>
              <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={4}
              image="https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg"
              />
              
              <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) Silver (4th Generation)"
              price={598.99}
              rating={5}
              image="https://d.scdn.gr/images/sku_main_images/016375/16375888/20200424100022_apple_ipad_pro_2018_12_9_lte_256gb.jpeg"
              />

              <Product
              id="4903850"
              title="Samsung Galaxy Watch4 Classic"
              price={249.99}
              rating={3}
              image="https://d.scdn.gr/images/sku_main_images/030445/30445632/20210825142958_samsung_galaxy_watch4_classic_bluetooth_46mm_black.jpeg"
              />
          </div>

          <div className='home__row'>
              <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Momitor Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              />
          </div>

        </div>
    </div>
  )
}

export default Home