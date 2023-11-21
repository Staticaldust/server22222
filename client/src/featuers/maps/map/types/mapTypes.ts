import Feature from "ol/Feature";
import Geometry from "ol/geom/Geometry";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";

export type LayerType =
  | TileLayer<XYZ>
  | VectorLayer<VectorSource<Feature<Geometry>>>;
