import logo from './logo.svg';
import './App.css';

import img1 from "./assets/Search ber.png"
import img2 from "./assets/Logo.png"
import img3 from "./assets/icon 01.png"
import img4 from "./assets/icon 02.png"
import img5 from "./assets/icon 03.png"
import img6 from "./assets/cards.png"
import img7 from "./assets/Ellipse 50.png"
import img8 from "./assets/Users.png"
import img9 from "./assets/hero image.png"


function App() {
  return (
    <div className="App">
      <div className='d1'>
     <h1 className='h'>Search for Homes in your Neighborhood</h1>
     <p className='p'>Online Estate Agency, the modern way to sell your own home. You can use griffin residential to market your property.</p>
     <img className='img1' src={img1} alt="" />
      </div>


      <div className='d15'><img src={img9} alt="" /></div>
      <div className='d16'><img src={img2} alt="" /></div>

    <div className='d2'>
    <h1 className='h2'>What Can We Help You Find</h1>
    <div className='d3'><img className='img3' src={img3} alt="" />
    <h3 className='h3'>Buy a home</h3>
    <p className='p2'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house.</p>

    </div>
     <div className='d4'>
     <img src={img4} alt="" />
     <h3 className='h4'>Rent a home</h3>
     <p className='p3'> With 35+ filters and custom keyword search, Trulia can help you find a home. </p>
      </div>

      <div className='d5'>
      <img src={img5} alt="" />
      <h3 className='h5'>See neighborhoods</h3>
      <p className='p4'>With more neighborhood insights than any other real estate website.</p>
      </div>
      </div>


      <div>
      <h1 className='h6'>Our trending latest proparty</h1>
      <p className='p5'>Our unique process gives you peace of mind from home rent to services</p>
      <div className='d7'>
      <button className='b'>Property type ^ </button>
      <button className='b1'>See All Property</button> </div>
      <img className='img6' src={img6} alt="" />
      </div>




      <div className='d8'>
      <h1 className='h7'>TESTIMONIALS</h1>
      <p className='p6'>Our Clients send us bunch of smilies with our services and we love them</p>
      <img className='img7' src={img7} alt="" />
      <p className='p7'>"We are very pleased with the way Besnik handled our purchase of a lake home. He was prompt, friendly, and very knowledgeable. He followed up on any and all concerns.</p>
      <h3 className='h8'>Becky Nelson</h3>

      </div>
      <div className='d9'><img src={img8} alt="" /></div>


      <div className='d10'>
    <h1 className='h9'>Talk to a Redfin Agent</h1>
    <p className='p8'>Start your search with an expert local agent—there’s no pressure or obligation.</p>
    <p className='p9'>Where are you searching for homes?</p>
      <input className='b3' type="text" placeholder='City, Address, ZIP' />  
      </div>




      <div>
        <div className='d11'>
          <h3>Popular Searches</h3>
          <p className='p10'>Apartment for Rent Apartment Low to hide Offices for Buy Offices for Rent</p>
        </div>
        <div className='d12'>
          <h3>About Us</h3>
          <p className='p11'>Our Story Team Members Careers Contact Us</p>
        </div>
        <div className='d13'>
          <h3>Quick Links</h3>
          <p className='p12'>Terms of Use Privacy Policy Contact Support FAQs</p>
        </div>
        <div className='d14'>
          <h3>Supports</h3>
          <p className='p13'>Help Center Loan Support Managment Privacy Policy</p>
        </div>
      </div>





    </div>
  );
}

export default App;
