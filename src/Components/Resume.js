import React, { Component } from 'react';

class Resume extends Component {

  sortSkills(skills){
    return skills.sort()
 }

  getEmploymentDetails(jobs){
    console.log(jobs)
    return(
      <React.Fragment>
      {
        jobs.map(job => {
          return(
            <div key={job.company}>
            <h3>{job.company}</h3>
            <p className="info">{job.title}<span>&bull;</span> <em className="date">{job.years}</em></p>
            <p>{job.description}</p>
            <p>{this.sortSkills(job.skills).join(", ")}</p>
        </div>
          )
        })
      }
        </React.Fragment>
    )
  }

  getEducationDetails(education){
    return(
      <React.Fragment>
      {education.map(school => {
        return(
          <div key={school.school}><h3>{school.school}</h3>
          <p className="info">{school.degree} <span>&bull;</span><em className="date">{school.graduated}</em></p>
          <p>{school.description}</p>
          <p>{this.sortSkills(school.skills).join(", ")}</p></div>
        )
      })}
      </React.Fragment>
      )
  }

  render() {
    if(this.props.data){
      const {skillmessage, work, education} = this.props.data;
     
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })

      return (
        <section id="resume">


        <div className="row work">
  
           <div className="three columns header-col">
              <h1><span>Work</span></h1>
           </div>
  
           <div className="nine columns main-col">
            {this.getEmploymentDetails(work)}
          </div>
      </div>
  
        <div className="row education">
           <div className="three columns header-col">
              <h1><span>Education</span></h1>
           </div>
  
           <div className="nine columns main-col">
              <div className="row item">
                 <div className="twelve columns">
                   {this.getEducationDetails(education)}
                 </div>
              </div>
           </div>
        </div>
  
  
  
  
  
        <div className="row skill">
  
           <div className="three columns header-col">
              <h1><span>Skills</span></h1>
           </div>
  
           <div className="nine columns main-col">
  
              <p>{skillmessage}
              </p>
  
          <div className="bars">
             <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
        </div>
     </section>
      );
    }

    return null
  }
}

export default Resume;
