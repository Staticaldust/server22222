import { fromLonLat } from "ol/proj";
import { markerLayer, markerStyle } from "../models/marker";
import { Point } from "ol/geom";
import { Feature } from "ol";

export const addMarker = (coordinates: number[]) => {
  if (markerLayer) {
    markerLayer.getSource()?.clear();

    const markerFeature = new Feature({
      geometry: new Point(fromLonLat([coordinates[0], coordinates[1]])),
    });
    markerFeature.setStyle(markerStyle);
    markerLayer.getSource()?.addFeature(markerFeature);
  }
};
