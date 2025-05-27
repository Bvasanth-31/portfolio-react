import React from 'react'
import './Contact.css'
import theme from '../../assets/theme.svg'
import linkedin from '../../assets/linked.svg'
import insta from '../../assets/insta.svg'
import git from '../../assets/github (1).png'

const Contact = () => {
   const [result, setResult] = React.useState("");
      const [error, setError] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setError("");
      event.preventDefault();
      const form = event.target;
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
          alert("Please fill in all the fields before submitting the form.");
          return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b6c7d5ea-c9ec-458d-8ad9-040d681a20ad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully.I'll reach You soon!")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  


  return (
    <div  id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme} alt="" />
        </div>
        <div className='contact-section'>
            <div className="contact-left">
                <h1>Lets talk</h1>
                <div className='contact-details'>
                    <div className="contact-detail">
                        <a href="https://www.linkedin.com/in/vasanth-b-b50a82367/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="" />
                    </a>

                    </div>
                    <div className="contact-detail">
                        <a href="https://www.instagram.com/_vasanth_31_" target="_blank" rel="noopener noreferrer">
                        <img src={insta} alt="insta icon" />
                        </a>
                        
                    </div>
                    <div className="contact-detail">
                        <a href="https://github.com/Bvasanth-31" target="_blank" rel="noopener noreferrer"> 
                        <img src={git} alt=" git icon" />
                        </a>
                    </div>

                </div>
        
            </div>
            <div>
                    <form onSubmit={onSubmit} className="cont-right"> 
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter Your Name' name="name" id="" />
                        <label htmlFor="">Your Mailid</label>
                        <input type="email" placeholder='Enter Your email' name="email" id="" />
                        <label htmlFor="">Write Your Message</label>
                        <textarea placeholder='Enter Your Message' name="message" id="" rows="8"></textarea>
                        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

                        <button type='submit' className='submit'>Submit Now</button>
                    </form>
                </div>

        </div>
      
    </div>
  )
}

export default Contact
