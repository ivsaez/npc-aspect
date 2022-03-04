export { 
  AgeKind, 
  EyeColor, 
  ComplexionKind, 
  HairColor, 
  HaircutStyle, 
  OriginKind, 
  SexKind, 
  SpecieKind,
  Sexes,
  Origins,
  Eyes,
  HairColors,
  HairCuts,
  Complexions,
  Species,
  Ages
} from "./enumerations";
export { Aspect } from "./aspect";

function hello(name: string = "Ivan"): string {
    return `Hello, ${name}`;
  }
  
  export default hello;