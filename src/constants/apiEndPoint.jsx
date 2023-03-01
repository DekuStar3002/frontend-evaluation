const BACKEND_URL = 'http://localhost:8000/';

const GET_ALL_EVENTS = () => ({
  baseURL: BACKEND_URL,
  url: 'api/events',
  method: 'get'
});

const GET_EVENT_BY_ID = (id) => ({
  baseURL: BACKEND_URL,
  url: `api/events/${id}`,
  method: 'get'
});

const UPDATE_EVENT_BY_ID = (id, data) => ({
  baseURL: BACKEND_URL,
  url: `api/events/${id}`,
  method: 'patch',
  data
});

const GET_THEMES = () => ({
  baseURL: BACKEND_URL,
  url: 'api/themes',
  method: 'get'
});

const UPDATE_THEMES = (data) => ({
  baseURL: BACKEND_URL,
  url: 'api/themes',
  method: 'put',
  data
});

export {
  GET_ALL_EVENTS, GET_EVENT_BY_ID, UPDATE_EVENT_BY_ID, GET_THEMES, UPDATE_THEMES
};
