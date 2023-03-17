export const axios = {
  get<T>(url: string, timeout?: number):Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("get", url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          const response= JSON.parse(xhr.responseText);
          if (timeout) {
            setTimeout(() => {
              resolve(response);
            }, timeout);
          } else {
            resolve(response);
          }
        }
      };

      xhr.send(null);
    });
  },
};
