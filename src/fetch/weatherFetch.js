import fetchFactory from './fetchFactory'

export default async () => {
  const url = 'http://localhost:3000/weather' // env wather url
  const setting = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  let weather = await fetchFactory(url, setting)
  weather = await weather.json()

  return weather
}
