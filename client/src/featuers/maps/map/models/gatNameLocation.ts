import { transform } from "ol/proj";
import axios from "axios";

const gatNameLocation = async (coordinate: number[]) => {
  const coord = transform(coordinate, "EPSG:3857", "EPSG:4326");
  const x = coord[0];
  const y = coord[1];

  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lon=${x}&lat=${y}`
    );
    if (response.status === 200) {
      const data = response.data;
      const name = data.display_name;
      return name;
    }
  } catch (error) {
    console.error("Error fetching data");
  }
};

export default gatNameLocation;
