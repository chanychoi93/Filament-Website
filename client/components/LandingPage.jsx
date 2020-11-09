import React from "react";

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/info'>Info</Link>
      </li>
      <li>
        <Link to='/demo'>Demo</Link>
      </li>
      <li>
        <Link to='/offline'>Offline Mode</Link>
      </li>
      <li>
        <Link to='/team'>Team</Link>
      </li>
      <li>
        <Link to='/github'>Github</Link>
      </li>
    </ul>
  );
};

export default LandingPage;
