import React from 'react';
import './EventCard.css';
import bookMarkSrc from '../../assets/bookmark-regular.svg';
import circleCheckSrc from '../../assets/circle-check-regular.svg';

function EventCard() {
  return (
    <div className="eventCard">
      <div className="eventCard-image">
        <img src="https://i.ibb.co/3zbdvWX/battle-of-bands.jpg" alt="cardImage" />
      </div>
      <div className="eventCard-content">
        <div className="eventCard-content-detail">
          <p>Battle of the bands</p>
          <p>asdvjgasdsad asd asdsa as  asdsa  sa sad sa sad sad sa d sa sa sda dsa das sda dsa</p>
          <p>
            <span>Venue:</span>
            {' '}
            sadsadasad
          </p>
          <p>
            <span>Date:</span>
            {' '}
            sadsadasad
          </p>
        </div>
        <div className="eventCard-content-footer">
          <div>
            <img src={circleCheckSrc} alt="registered" />
            <p>Registered</p>
          </div>
          <img src={bookMarkSrc} alt="bookmard" />
        </div>
        <div className="eventCard-content-button">
          {/* <button>Unregister</button> */}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
