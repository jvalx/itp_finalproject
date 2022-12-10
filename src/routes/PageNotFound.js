import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  useEffect(() => {
    document.title = '404 Page Not Found';
  }, []);
  return (
    <div>
      <h1> Hello, this page is not found!</h1>
      <Link to="/">Go back home!</Link>
    </div>
  );
}
