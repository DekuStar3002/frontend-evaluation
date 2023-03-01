import axios from 'axios';

const makeRequest = async (configObj, navigate, dynamicConfig = {}) => {
  try {
    console.log(dynamicConfig);
    const requestConfigObj = { ...configObj, ...dynamicConfig };
    const { data } = await axios(requestConfigObj);
    return data;
  } catch (error) {
    if (navigate) {
      const errorCode = error?.response?.status;
      if (errorCode) {
        navigate(`/error/${errorCode}`);
      } else {
        navigate('/error');
      }
    } else {
      return null;
    }
  }
};

export default makeRequest;
