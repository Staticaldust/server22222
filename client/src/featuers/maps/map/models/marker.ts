import { Feature } from "ol";
import { Point } from "ol/geom";
import { Style, Icon } from "ol/style";
import { fromLonLat } from "ol/proj";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import markerIcon from "../../images/25613.png";

const markerSource = new VectorSource();

export const markerStyle = new Style({
  image: new Icon({
    src: markerIcon,
    scale: 0.1,
  }),
});

const markerFeature = new Feature({
  geometry: new Point(fromLonLat([35.24010251726421, 32.67587876195171])),
});
markerFeature.setStyle(markerStyle);

markerSource.addFeature(markerFeature);

export const markerLayer = new VectorLayer({
  source: markerSource,
});
