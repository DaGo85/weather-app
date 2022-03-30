import axios from "axios";

export default async function getGeoCode(req, res) {
  const { location } = req.body;
  console.log(req);

  try {
    const { data } = await axios(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${5}&appid=${
        process.env.API_KEY
      }`
    );
    return res.send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error");
  }
}
