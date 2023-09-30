import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <>
            <div class="contactUs">

                <div class="title">
                    <h2>Get in Touch</h2>
                </div>

                <div class="box">

                    {/* <!-- Contact_us detail --> */}
                    <div class="contact form">
                        <h3>Send a Message</h3>

                        <form>
                            <div class="formBox">
                                <div class="row50">
                                    <div class="inputBox">
                                        <span>
                                            First Name
                                        </span>
                                        <input type="text" placeholder="" required/>
                                    </div>

                                    <div class="inputBox">
                                        <span>
                                            Last Name
                                        </span>
                                        <input type="text" placeholder="" required/>
                                    </div>

                                </div>

                                <div class="row50">
                                    <div class="inputBox">
                                        <span>
                                            Email address
                                        </span>
                                        <input type="text" placeholder="" required/>
                                    </div>

                                    <div class="inputBox">
                                        <span>
                                            Mobile
                                        </span>
                                        <input type="text" placeholder="" required/>
                                    </div>

                                </div>

                                <div class="row100">
                                    <div class="inputBox">
                                        <span>
                                            Message
                                        </span>
                                        <textarea placeholder="write your message here" required></textarea>
                                    </div>
                                </div>

                                <div class="row100">
                                    <div class="inputBox">
                                        <input type="submit" value="Send"/>
                                    </div>
                                </div>


                            </div>
                        </form>

                    </div>

                    {/* <!-- info detail --> */}
                    <div class="contact info">
                        <h3>Contact Info</h3>
                        <div class="infobox">
                            <div>
                                <span><ion-icon name="location"></ion-icon></span>
                                <p>IIT Kharagpur , West Bengal <br/>INDIA</p>
                            </div>
                            <div>
                                <span><ion-icon name="mail"></ion-icon></span>
                                <a href="gywsociety@gmail.com">gywsociety@gmail.com</a>
                            </div>
                            <div>
                                <span><ion-icon name="call"></ion-icon></span>
                                <a href=" tel: +91 8815655639"> +91 8815655639</a>
                            </div>
                            {/* <!-- social media Links--> */}
                            <ul class="sci">
                                <li><a href="/"><ion-icon name="logo-facebook"></ion-icon></a></li>
                                <li><a href="/"><ion-icon name="logo-twitter"></ion-icon></a></li>
                                <li><a href="/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                                <li><a href="/"><ion-icon name="logo-instagram"></ion-icon></a></li>
                            </ul>
                        </div>
                    </div>


                    {/* <!-- map detail  --> */}
                    <div class="contact map ">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3691.0241240906203!2d87.30795617492898!3d22.3149273796761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1693781012625!5m2!1sen!2sin" 
                        style={{border: "0"}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Google Map"
                        ></iframe>

                    </div>
                </div>




            </div>
        </>
    )
}

export default ContactUs