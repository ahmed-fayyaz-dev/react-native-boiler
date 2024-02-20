import axios from 'axios';
import i18n from './i18n';

axios.defaults.baseURL = 'api.baseurl';

axios.interceptors.request.use(
  async request => {
    return request;
  },
  () => {
    // console.error(error);
  },
);

// intercept response and handle global errors
axios.interceptors.response.use(
  response => {
    /* A response interceptor. */
    /*
     * Any status code that lie within the range of 2xx cause this function to trigger
     * Do something with response data
     */
    return response?.data;
  },
  error => {
    /*
     * Any status codes that falls outside the range of 2xx cause this function to trigger
     * Do something with response error
     */
    // console.error(error);
    const responseError = error.response?.data?.error || error;
    const errorCode = `errors.${responseError?.code}`;
    const transalatedError = i18n.exists(errorCode) ? i18n.t(errorCode) : responseError?.message;

    return Promise.reject({
      ...responseError,
      message: transalatedError,
      rawMessage: responseError?.message,
    });
  },
);
