import React from 'react';
import './ErrorPage.css';
import { useParams } from 'react-router-dom';
import { Header } from '../../components';

function ErrorPage() {
  const { errorCode } = useParams();
  return (
    <div>
      <Header />
      <div className="error">
        <p>Something went wrong!</p>
        { errorCode && <p>{`Error Code: ${errorCode}`}</p> }
      </div>
    </div>
  );
}

export default ErrorPage;
