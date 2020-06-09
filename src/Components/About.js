import React, { Component } from 'react';

class About extends Component {

   getBio(bio){
      return(
         <React.Fragment>
         {bio.map(line => {
            return(<p>{line}</p>)
         })}
         </React.Fragment>
      )
   }


  render() {
    if(this.props.data){
     const {name, bio, address, email, resumedownload } = this.props.data;
     const profiler= "images/"+this.props.data.image;
      return (
         <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={profiler} alt="Shay Brennan-Kelly Profile" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               {this.getBio(bio)}   
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{address.city}, {address.state}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={resumedownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
   
      </section>
       );
    }
    return null;    
  }
}

export default About;
