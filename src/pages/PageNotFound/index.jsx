import React from 'react';
import './PageNotFound.css';
import { Header } from '../../components';

function PageNotFound() {
  return (
    <div>
      <Header />
      <p className="error">404 Error, PAGE NOT FOUND</p>
    </div>
  );
}

export default PageNotFound;
