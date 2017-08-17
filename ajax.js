require('es6-promise').polyfill();

var send = function send(url, method, data) {
  var xhr = new window.XMLHttpRequest();
  var _e = encodeURIComponent;
  var isFormData = data instanceof window.FormData;
  var dataPairs = [];

  if (typeof data === 'object' && !isFormData) {
    for (var key in data) {
      if ({}.hasOwnProperty.call(data, key)) {
        dataPairs.push(_e(key) + '=' + _e(data[key]));
      }
    }
    data = dataPairs.join('&').replace(/%20/g, '+');
  }

  var promise = new Promise(function (resolve, reject) {
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 204) {
          resolve(xhr.status === 204 ? undefined : JSON.parse(xhr.responseText));
        } else {
          reject(xhr.responseText);
        }
      }
    };
  });

  xhr.open(method, url);

  if (!isFormData) {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }

  xhr.send(data);

  return promise;
};

module.exports = {
  post: function post(url, data) {
    return send(url, 'POST', data);
  },
  get: function get(url, data) {
    return send(url, 'GET', data);
  },
  put: function put(url, data) {
    return send(url, 'PUT', data);
  },
  delete: function _delete(url, data) {
    return send(url, 'DELETE', data);
  }
};
