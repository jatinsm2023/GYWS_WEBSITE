import React from 'react'
import Navbar from '../navbar/Navbar'
import Member from './Member2022-23/page'
import Footer from '../Footer/footer'
import './Member.css'
function Members() {
    return (
        <>
            <Navbar />
            <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>

            <div class="wrapper">
                <div class="sidebar">
                    <h2>Members</h2>
                    <ul>
                        <li><a href="/"><i class="fas fa-home"></i>Governing Body 2023-24</a></li>
                        <li><a href="/"><i class="fas fa-user"></i>Governing Body 2022-23</a></li>
                        <li><a href="/"><i class="fas fa-address-card"></i>Advisory Committee</a></li>
                    </ul>
                    <h2>Intiative</h2>
                    <ul>

                        <li><a href="/"><i class="fas fa-project-diagram"></i>
                            Jagriti Vidya Mandir <br />
                            Education Initiative</a></li>
                        <li><a href="/"><i class="fas fa-blog"></i>Rise <br />Reform and Innovate School Education
</a></li>
                        <li><a href="/"><i class="fas fa-address-book"></i>LiGHT <br /> Expansion Initiative</a></li>
                        <li><a href="/"><i class="fas fa-map-pin"></i>Map</a></li>
                    </ul>
                </div>
                <div class="main_content">
                    <Member />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Members