import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <nav>
        <Link to="/feed">See the Blog</Link>
      </nav>
    </div>
  )
}

export default Home
