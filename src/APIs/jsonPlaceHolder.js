export const getData = async(url = '', data = {}) => {
    try {
      const response = await fetch(url,
        {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        }
      );
      return await response.json();
    } catch(e) {
      console.log("The error is ",e);
      return;
    }
  }
