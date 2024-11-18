import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <h3>How does it work?</h3>
      <div className="container">
        <div className="card">
          <div className="icon">
            <LuUserPlus />
          </div>
          <h4>Create an Account</h4>
          <p>
            Join us today and unlock exclusive features designed to make your experience smoother and more personalized!
            Sign up for a free account as a job seeker or employer. Set up your
            profile in minutes to start posting jobs or applying for jobs.

          </p>
        </div>
        <div className="card">
          <div className="icon">
            <VscTasklist />
          </div>
          <h4>Share or Explore Opportunities</h4>
          <p>
            Use advanced filters to discover roles that align with your skills and career goals.
            Employers can post detailed job descriptions, and job seekers can
            browse a comprehensive list of available positions.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <BiSolidLike />
          </div>
          <h4>Connect Employers and Talent</h4>
          <p>
          Employers can evaluate and select top candidates, extending offers to those who fit their requirements. Job seekers can review offers and choose positions that support their career ambitions. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;