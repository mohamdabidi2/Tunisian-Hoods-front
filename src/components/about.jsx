import React from 'react';
import video from "../l/1.mp4"
export const About = (props) => {
    return ( <div className='about'>
   <div className="part22">
   <div className="videocontainer">
          <video id="about-video" width="500px" height="500px" controls>
       <source src={video} type="video/mp4"/>
               
           </video>
       </div>
       <div className="line">

       </div>
   </div>
       <div className="part2-about">
           <h1 className="title-about-h1">About us</h1>
           <h2 className="title2-about">Title</h2>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam neque earum doloremque provident. Quo quibusdam obcaecati optio vel tempore nihil incidunt recusandae rerum commodi! Id laboriosam molestias et aliquam excepturi?</p>
           <p>More</p>
       </div>
     
    </div> );
}
 
export default About;