import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
function Wildcart() {
  return (
    <div>
        <main style={{ padding: "1rem",textAlign: 'center' }}>
              <p>404 not found</p><br/>
              <Link to="/">Go to home</Link>
            </main>
    </div>
  )
}

export default Wildcart