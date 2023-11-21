export type typeMap = string | HTMLElement | undefined;

export type MapFormProps = {
  onClick: (FormInputs: FormInputs) => void;
};

export interface FormInputs {
  newLongitude: number;
  newLatitude: number;
}

export type openLayersProps = {
  coordinates: number[];
  changeCoordinates: (coordinates: number[]) => void;
};
export type showCoordinatesProps = {
  coordinates: number[];
  location: string | null;
};
