import { apiUrl } from '../src/constants';
import axios from 'axios'
export const getType = (fileType) => {
  let type = "IMAGE";
  if (fileType === 'application/pdf') {
    type = "PDF"
  }
  return type;
}

export const getFileName = (fileName, fileType) => {
  console.log(fileName, fileType)
  let name = fileName;

  if (fileType === 'application/pdf') {
    name = fileName.substring(0, fileName.lastIndexOf("."))
  }

  if (fileType === 'image/jpeg') {
    if (fileName.includes("jpg")) {
      name = fileName.substring(0, fileName.lastIndexOf("."))
    } else if (fileName.includes("jpeg")) {
      name = fileName.substring(0, fileName.lastIndexOf("."))
    }
  }

  if (fileType === 'image/png') {
    name = fileName.substring(0, fileName.lastIndexOf("."))
  }

  console.log(name, 'name')

  return name;
}

export const isValid = (file) => {
  let name = file && file.name;
  let type = name.substring(name.lastIndexOf(".") + 1, name.length);
  if (type === 'jpeg' || type === 'jpg' || type === 'png' || type === 'pdf' || type === 'PDF') {
    return true
  }
  return false
}




export function apiReq(endPoint, data, method, headers) {
  return new Promise((res, rej) => {

    headers = {
      
      ...headers
    }

    if (method == 'get' || method == 'delete') {
      data = {
        params: data,
        headers
      }
    }

    // axios[method](endPoint, data, {
    // 	headers: {
    // 		'Auth': 'f981f6c3402d5abaaef6d9811fc13586'
    // 	 }
    // }).then((result) => {
    axios[method](endPoint, data, { headers }).then((result) => {
      let { data } = result;

      if (data.status === false) {

        return rej(data);
      }

      return res(data);
    }).catch((err) => {
      return rej(err);
    });
  })
}



export function generateUrl(path) {

  return apiUrl + path;
}

export function apiPost(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'get', headers);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'put', headers);
}

export function multiPartData(data) {

  let multiPart = new FormData();

  for (let prop in data) {
    multiPart.append(prop, data[prop]);
  }

  return multiPart;
}
