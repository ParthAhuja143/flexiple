export const getTenDayForecast = async ({
  lat,
  lon,
}: {
  lat: string
  lon: string
}) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/weather/daily_forecast?lat=${lat}&lon=${lon}&appid=3e4be8c4dd9fa225551735e555eb7028`
  )
  if (!data.ok) {
    throw new Error("Failed to fetch data")
  }

  return data.json()
}
