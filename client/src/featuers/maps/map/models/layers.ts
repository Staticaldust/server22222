import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
// import VectorLayer from "ol/layer/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { OSM, XYZ } from "ol/source";
import VectorSource from "ol/source/Vector";
// import VectorSource from "ol/source/Vector";

export const vectorLayer = new VectorLayer({
  background: "#1a2b39",
  source: new VectorSource({
    url: "https://openlayers.org/data/vector/ecoregions.json",
    format: new GeoJSON(),
  }),
  style: {
    "fill-color": ["string", ["get", "COLOR"], "#eee"],
  },
});

export const tileLayer = new TileLayer({
  source: new OSM(),
});

export const googleMaps = new TileLayer({
  source: new XYZ({
    url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
  }),
});
