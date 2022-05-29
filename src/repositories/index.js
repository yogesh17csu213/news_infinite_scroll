import axios from 'axios'
import { Urls } from 'store/urls'

export const GetNewsDataRepo = (params) => {
    return axios({
      method: 'GET',
      url:Urls.SEARCH_NEWS_API,
      params:params
    })
  }


