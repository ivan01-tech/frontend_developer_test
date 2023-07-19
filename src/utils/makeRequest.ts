import { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "../api/axios";

/**
 *	a function to make any kind og resquest with the  axios instance
 * @param {string} url
 * @param {import("axios").AxiosRequestConfig} options
 * @returns
 */
interface ResponseTypeAxios{
  data:[]
}
async function makeRequest(
  url: string,
  options: AxiosRequestConfig
) {
  return api(url, options)
    .then((res: AxiosResponse<ResponseTypeAxios>) => {
      console.log("url : ",url)
      console.log("res1 : ", res);
      const d = res.data;
      // TODO delete it
      console.log("d : ", d, url);
      
      return d;
    })
    .catch((err) => {
      console.log("eror : ", err);
      return err;
    });
}

export default makeRequest;
