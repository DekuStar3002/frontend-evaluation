import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EventProvider } from './contexts/EventContext';
import { AllEventPage, EventPage, ErrorPage, PageNotFound } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EventProvider><AllEventPage /></EventProvider>} />
          <Route path="/event/:id" element={<EventProvider><EventPage /></EventProvider>} />
          <Route path="/error/:errorCode" element={<ErrorPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
