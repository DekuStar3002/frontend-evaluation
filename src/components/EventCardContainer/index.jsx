import React, { useContext, useEffect } from 'react';
import './EventCardContainer.css';
import { useNavigate } from 'react-router-dom';
import filterSrc from '../../assets/filter-solid.svg';
import angleUpSrc from '../../assets/angle-up-solid.svg';
// import angleDownSrc from '../../assets/angle-down-solid.svg';
import searchSrc from '../../assets/magnifying-glass-solid.svg';

import EventCard from '../EventCard';

import { EventContext } from '../../contexts/EventContext';
import { makeRequest } from '../../utils';
import { GET_ALL_EVENTS, GET_THEMES } from '../../constants/apiEndPoint';

function EventCardContainer() {
  const {
    events, setEvents, themes, setThemes
  } = useContext(EventContext);

  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(GET_ALL_EVENTS())
      .then((response) => {
        setEvents(response);
      })
      .catch((error) => {
        navigate('/error');
      });

    makeRequest(GET_THEMES())
      .then((response) => {
        setThemes(response);
      })
      .catch((error) => {
        navigate('/error');
      });
  }, []);
  return (
    <div className="eventCardContainer">
      <div className="eventCardContainer-filter">
        <div className="eventCardContainer-filter-header">
          <div className="eventCardContainer-filter-icon">
            <img src={filterSrc} alt="filter" className="image"/>
            <p>FILTER</p>
            <img src={angleUpSrc} alt="angleup" className="image" />
          </div>
          <div className="eventCardContainer-filter-search">
            <input placeholder="EVENT NAME" />
            <img src={searchSrc} alt="searchIcon" className="image" />
          </div>
        </div>
        <div className="eventCardContainer-filter-options">
          <div className="eventCardContainer-filter-option">
            <div>
              <input type="radio" name="ALL" />
              <p>ALL</p>
            </div>
            <div>
              <p>BOOKMARKED</p>
              <input type="radio" name="BOOKMARKED" />
            </div>
          </div>
          <div className="eventCardContainer-filter-option">
            <div>
              <input type="radio" name="REGISTERED" />
              <p>REGISTERED</p>
            </div>
            <div>
              <p>SEAT AVAILABLE</p>
              <input type="radio" name="SEAT AVAILABLE" />
            </div>
          </div>
        </div>
      </div>
      <div className="eventCardContainer-cards">
        {
          events.map((singleEvent, index) => <EventCard key={index} allPage={true} {...singleEvent} />)
        }
      </div>
    </div>
  );
}

export default EventCardContainer;
