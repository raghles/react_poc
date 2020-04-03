import React from 'react';
import { connect } from "react-redux";
import "./Dashboard.scss"
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  // return { userName: state.userName, email: state.email, address: state.address };
  return state;
};

const Dashboard = ({ userName, email, address }) => (
  <>
    <span className="greet-text">Welcome {userName}!</span>

    {!email && 
        <section>
          <Link to="/">Click here to register</Link>
        </section>
    }
  
    {email && 
    <section>
      <section>
        <span className="high-light">Email:</span> {email}
      </section>
      <section>
        <span className="high-light">Address:</span> {address}
      </section>
    </section>
    }
  </>
);

export default connect(mapStateToProps)(Dashboard);
