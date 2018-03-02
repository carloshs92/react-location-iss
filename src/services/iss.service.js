import axios from 'axios';

const baseURL = 'http://api.open-notify.org/';


const ISSService = {
  getCurrentLocation: () => {
      const promise = new Promise((resolve, reject) => {
          axios.get(`${baseURL}/iss-now.json`)
              .then((response) => {
                  if (response.status === 200) {
                      resolve(response.data)
                  } else {
                      reject({})
                  }
              })
              .catch(() => {
                  console.log('Hubo un error');
                  reject({})
              });
      });
      return promise;
  }
};

export default ISSService;