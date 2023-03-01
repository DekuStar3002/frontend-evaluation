import React from 'react';
import './EventCardContainer.css';
import filterSrc from '../../assets/filter-solid.svg';
import angleUpSrc from '../../assets/angle-up-solid.svg';
// import angleDownSrc from '../../assets/angle-down-solid.svg';
import searchSrc from '../../assets/magnifying-glass-solid.svg';

import EventCard from '../EventCard';

function EventCardContainer() {
  return (
    <div className="eventCardContainer">
      <div className="eventCardContainer-filter">
        <div className="eventCardContainer-filter-header">
          <div className="eventCardContainer-filter-icon">
            <img src={filterSrc} alt="filter" className="image" />
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
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default EventCardContainer;
