import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
function Footer() {
    return (
        <div className='container'>  
            <div className=" footer row  w-100">
                <div className='col-lg-3 text-center ' >
                    <h4 href="#home" style={{ color: "white", fontSize: "20px" }}>
                        <i class="fa-solid fa-video text-warning me-3" ></i>
                        Media Player
                    </h4>
                    <h6 >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptatum saepe eveniet iusto. Ad sunt molestias atque, labore natus et nulla eaque quaerat hic porro, mollitia voluptate unde assumenda itaque.
                    </h6>
                </div>
                <div className='col-lg-3 text-center '>
                    <h4>Links</h4>
                    <div className='text-center'>
                    <ul className='links'>
                        <li>Home</li>
                        <li>Landing Page</li>
                        <li>Watch history</li>
                    </ul>
                    </div>
                </div>
                <div className='col-lg-3  text-center'>
                    <h4>Guides</h4>
                    <ul>
                        <li>React</li>
                        <li>Bootsrap</li>
                        <li>Guides</li>
                    </ul>
                </div>
                <div className='col-lg-3 text-center'>
                    <h4>Contact Us</h4>
                    <div className='d-flex'>
                        <input className='form-control' placeholder='Enter Your Email' type="text" />
                        <button className='btn btn-warning ms-2'>Subscribe</button>
                    </div>
                    <div className="icons d-flex justify-content-evenly pt-4">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5'>
                <p>Copyright &#169; 2023, Media Player built with react</p>
            </div>


        </div>
    )
}

export default Footer
