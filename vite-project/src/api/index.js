import axios from 'axios'
const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'
import { getLatestCoordinates } from '../App'

export const getPlaceDetails = async() =>{
  const coordinateValue = getLatestCoordinates()
  try{
    const {data:{data}} = await axios.get(url,{
      params: {
        latitude: coordinateValue.lat,
        longitude: coordinateValue.lng,
        limit: '30',
        currency: 'USD',
        distance: '2',
        open_now: 'false',
        lunit: 'km',
        lang: 'en_US'
      },
      headers: {
        'X-RapidAPI-Key': 'fb39a1bf2emsh877612064757101p1bb3e3jsn44a34bd221ef',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })
    return data
  }
  catch(error){
    console.error(error)
  }
}