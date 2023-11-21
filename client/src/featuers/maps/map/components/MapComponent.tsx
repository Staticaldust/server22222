import { Map } from "ol";
import { FC, useEffect, useRef, useState } from "react";
import "ol/ol.css";
import { Box, Typography } from "@mui/material";
import mapModule from "../models/mapModel";
import { fromLonLat, transform } from "ol/proj";
import { openLayersProps } from "../types/types";
import { addMarker } from "../helpers/addMarker";
import DisplayMode from "./DisplayModes";
import { LayerType } from "../types/mapTypes";
import { tileLayer } from "../models/layers";
import { markerLayer } from "../models/marker";

const MapComponent: FC<openLayersProps> = ({
  coordinates,
  changeCoordinates,
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapInst, setMap] = useState<null | Map>(null);
  const [layer, setLayer] = useState<LayerType>(tileLayer);

  const handleChangeLayer = (layer: LayerType) => setLayer(layer);

  useEffect(() => {
    if (mapRef.current && !mapInst) {
      const map = mapModule(mapRef.current);
      setMap(map);
    }
  }, [mapInst]);

  useEffect(() => {
    if (mapInst) {
      const newCoordinates = fromLonLat([coordinates[0], coordinates[1]]);
      mapInst.getView().setCenter(newCoordinates);
    }
  }, [coordinates, mapInst]);

  useEffect(() => {
    if (mapInst) {
      mapInst.on("click", (e) => {
        const newCoordinates = transform(
          e.coordinate,
          "EPSG:3857",
          "EPSG:4326"
        );

        changeCoordinates(newCoordinates);
        addMarker(newCoordinates);
      });
    }
  }, [mapInst]);

  useEffect(() => {
    if (mapInst) {
      mapInst.setLayers([layer, markerLayer]);
    }
  }, [mapInst, layer]);

  return (
    <>
      <Box
        ref={mapRef}
        className="map-container"
        sx={{ height: "700px", width: "700px" }}
      >
        <DisplayMode onClick={handleChangeLayer} />
      </Box>

      {!mapInst && <Typography>Oops... The map not found !</Typography>}
    </>
  );
};

export default MapComponent;
