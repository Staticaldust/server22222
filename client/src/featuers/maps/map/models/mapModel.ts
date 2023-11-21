import { Map, View } from "ol";
import { typeMap } from "../types/types";
import { defaults as defaultControls } from "ol/control.js";
import { fromLonLat } from "ol/proj";
import { googleMaps, tileLayer, vectorLayer } from "./layers";
import { markerLayer } from "./marker";

const mapModel = (mapRef: typeMap) =>
  new Map({
    target: mapRef,
    layers: [tileLayer, markerLayer],
    view: new View({
      center: fromLonLat([35.24010251726421, 32.67587876195171]),
      zoom: 12,
    }),
    controls: defaultControls().extend([]),
  });

export default mapModel;
