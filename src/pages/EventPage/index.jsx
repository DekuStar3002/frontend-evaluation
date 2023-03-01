import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EventCard, Header } from '../../components';
import { makeRequest } from '../../utils';
import { GET_EVENT_BY_ID } from '../../constants/apiEndPoint';
import './EventPage.css';

function EventPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState({});
  useEffect(() => {
    setLoading(true);
    makeRequest(GET_EVENT_BY_ID(id))
      .then((response) => {
        setLoading(false);
        setEventData(response);
      })
      .catch((error) => {
        navigate('/error');
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="content">
        {
          loading ? <div className="loading">Loading ...</div> : (
            <div className="card">
              <EventCard allPage={false} {...eventData} />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default EventPage;
