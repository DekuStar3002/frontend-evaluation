import React, { createContext, useState } from 'react';

const EventContext = createContext({});

function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [themes, setThemes] = useState({});
  return (
    <EventContext.Provider value={{
      events, setEvents, themes, setThemes
    }}
    >
      {children}
    </EventContext.Provider>
  );
}

export { EventContext, EventProvider };
