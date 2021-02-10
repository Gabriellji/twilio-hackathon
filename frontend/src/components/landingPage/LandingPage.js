import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <Link to="/login">
        <button>LOG IN</button>
      </Link>
      <Link to="/register">
        <button>REGISTER</button>
      </Link>
    </div>
  );
}
