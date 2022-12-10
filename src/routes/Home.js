import { React, useEffect } from 'react';
import logo from '../images/pic.png'; // Tell webpack this JS file uses this image
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  useEffect(() => {
    document.title = 'Home Page';
  }, []);
  return (
    <div className="home">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2"></div>
        <div className="col-8">
        <h1 className= "home-title" style={{ fontSize: '5rem', color: 'black' }}>Juan Valderrama</h1>
        </div>
      </div>
    </div>
  );
}
