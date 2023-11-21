import { useState } from "react";
import MapComponent from "../components/MapComponent";

import { initialCoordinates } from "../helpers/initialMapFormData";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const MapPage = () => {
  const [coordinates, setCoordinates] = useState<number[]>(initialCoordinates);

  const handelChangeCoordinates = (coordinatesFromMap: number[]) => {
    setCoordinates(coordinatesFromMap);
  };

  return (
    <div className="webSite">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" gutterBottom>
          Your shipment is on its way...
        </Typography>
        <div className="map">
          <MapComponent
            coordinates={coordinates}
            changeCoordinates={handelChangeCoordinates}
          />
        </div>
      </Box>
    </div>
  );
};
export default MapPage;
