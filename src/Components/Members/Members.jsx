import React from 'react'
import Navbar from '../navbar/Navbar'
import Member2223 from './Member2022-23/members2223'
import Member2324 from './Member2023-24/members2324'
import Footer from '../Footer/footer'
import './Member.css'

import {
  
    Routes,
    Route,
    Link
} from 'react-router-dom'
function Members() {
    return (
        <>
            <Navbar />
            <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>

            <div class="wrapper">
                <div class="sidebar">
                    <h2>Members</h2>
                    <ul>
                        <li><Link to="/"><i class="fas fa-home"></i>Governing Body 2023-24</Link></li>
                        <li><Link to="/Member2223"><i class="fas fa-user"></i>Governing Body 2022-23</Link></li>
                        <li><Link to="/"><i class="fas fa-address-card"></i>Advisory Committee</Link></li>
                    </ul>
                    <h2>Intiative</h2>
                    <ul>

                        <li><Link to="/"><i class="fas fa-project-diagram"></i>
                            Jagriti Vidya Mandir <br />
                            Education Initiative</Link></li>
                        <li><Link to="/"><i class="fas fa-blog"></i>Rise <br />Reform and Innovate School Education
                        </Link></li>
                        <li><Link to="/"><i class="fas fa-address-book"></i>LiGHT <br /> Expansion Initiative</Link></li>
                       
                    </ul>
                </div>
                <div class="main_content">
                        <Routes>
                            <Route path="/" key={1} element={<Member2324 />}></Route>
                            <Route path="/Member2223" key={1} element={<Member2223 />}></Route>
                        </Routes>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Members