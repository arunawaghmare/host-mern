import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
const About = () => {
    return(
        <>
        <section className="about" id="about">
<div className="container">
    <div className="banner">
        <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
        </div>
        <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi, quis qui expedita eaque ut ad fugiat 
            reprehenderit fuga dolore amet deserunt. Quaerat fuga quibusdam laboriosam velit fugit facilis ducimus 
            eligendi, rem laudantium quo assumenda dolorum iure architecto rerum optio commodi exercitationem beatae aliquam 
            suscipit, voluptate consequatur sequi neque iste?
        </p>
        <Link to={"/"}>
            Explore Menu{" "}
            <span>
                <HiOutlineArrowNarrowRight />

            </span>
        </Link>

    </div>
    <div className="banner">
        <img src="/about.png" alt="about" />
    </div>
</div>
        </section>
</>

    );

}; 
    export default About;