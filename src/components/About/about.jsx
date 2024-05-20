import React from 'react'
import './about.css'

const About = () => {
    return (
      <div id='about' className="about-container">
        <h1 className="about-heading">About</h1>

        <p className="about-paragraph">
        Uunchai (उँचाई) is a six-week virtual project-based learning summer program organized by the FountED Foundation in collaboration with student mentors from prestigious universities in the USA and Nepal, including Harvard, UPenn, Duke, Vanderbilt, F&M, Lehigh, Mount Holyoke, Smith, and Institute of Engineering (IOE). 
        <br />
During the program, students will be chosen by mentors and organizers and assigned to teams based on their interests. Throughout the six weeks, selected students (referred to as cohorts) will work on their projects under the guidance of their assigned mentors. Upon completion of the project, recommended students will have the opportunity to intern at partner companies such as E-Sewa, Upaya:, and Nepal Tea Collective, and many more.
<br />
For internship placements, cohorts will be recommended to companies by their mentors. Partner companies will offer internships in various areas of interest, including Development, HR, social media, and more. The entire program is free of cost.
<br />
<ul>
Eligibility criteria for the program are as follows: <br/>
    <li>Students must be in grades 8 to 12 or in a gap year before joining their undergraduate studies.</li>
    <li>Students must be Nepali residents.</li>
    <li>Age & GPA is not a determining factor for participation in the program.</li>
    </ul>
        </p>
      </div>
    );
  }

  export default About;
