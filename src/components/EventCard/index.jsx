import React, { useState } from 'react';
import './EventCard.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import unBookMarkSrc from '../../assets/bookmark-regular.svg';
import bookMarkSrc from '../../assets/bookmark-solid.svg';
import circleCheckSrc from '../../assets/circle-check-regular.svg';
import circleCrossSrc from '../../assets/circle-xmark-solid.svg';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import { UPDATE_EVENT_BY_ID } from '../../constants/apiEndPoint';
import { makeRequest } from '../../utils';

function EventCard({
  id, name, description, venue, datetime, areSeatsAvailable, isRegistered, isBookmarked, imgUrl, allPage
}) {
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(isRegistered);
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const handleBookmark = async (id) => {
    try {
      const payload = { data: { isBookmarked: !bookmarked } };
      const data = await makeRequest(UPDATE_EVENT_BY_ID(id), navigate, payload);
      if (data) {
        setBookmarked(!bookmarked);
      }
    } catch (error) {
      navigate('/error');
    }
  };
  const handleRegister = async (id) => {
    try {
      const payload = { data: { isRegistered: !registered } };
      const data = await makeRequest(UPDATE_EVENT_BY_ID(id), navigate, payload);
      if (data) {
        setRegistered(!registered);
      }
    } catch (error) {
      navigate('/error');
    }
  };
  return (
    <div className="eventCard">
      <div className="eventCard-image">
        <img src={imgUrl} alt="cardImage" onClick={() => navigate(`/event/${id}`)}/>
      </div>
      <div className="eventCard-content">
        <div className="eventCard-content-detail">
          <p>{name}</p>
          <p>{description}</p>
          <p>
            <span>Venue:</span>
            {' '}
            {venue}
          </p>
          <p>
            <span>Date:</span>
            {' '}
            {getFormattedDateFromUtcDate(datetime)}
          </p>
        </div>
        {
          registered ? (
            <>
              <div className="eventCard-content-footer">
                <div>
                  <img src={circleCheckSrc} alt="registered" />
                  <p>REGISTERED</p>
                </div>
                <img src={bookmarked ? bookMarkSrc : unBookMarkSrc} alt="bookmarked" onClick={() => handleBookmark(id)} className="bookmark" />
              </div>
              {
                !allPage && (
                <div className="eventCard-content-button">
                  <button onClick={() => handleRegister(id)}>UNREGISTER</button>
                </div>
                )
              }
            </>
          ) : (
            !areSeatsAvailable ? (
              <div className="eventCard-content-footer">
                <div>
                  <img src={circleCrossSrc} alt="registered" />
                  <p>NO SEATS AVAILABLE</p>
                </div>
                <img src={bookmarked ? bookMarkSrc : unBookMarkSrc} alt="bookmard" onClick={() => handleBookmark(id)} className="bookmark" />
              </div>
            ) : (
              <>
                <div className="eventCard-content-footer">
                  <div>
                  </div>
                  <img src={bookmarked ? bookMarkSrc : unBookMarkSrc} alt="bookmard" onClick={() => handleBookmark(id)} className="bookmark" />
                </div>
                {
                !allPage && (
                <div className="eventCard-content-button">
                  <button onClick={() => handleRegister(id)}>UNREGISTER</button>
                </div>
                )
              }
              </>
            )
          )
        }
      </div>
    </div>
  );
}

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  areSeatsAvailable: PropTypes.bool.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default EventCard;
