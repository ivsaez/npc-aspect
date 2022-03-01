export { 
  AgeKind, 
  EyeColor, 
  ComplexionKind, 
  HairColor, 
  HaircutStyle, 
  OriginKind, 
  SexKind, 
  SpecieKind 
} from "./enumerations";

function hello(name: string = "Ivan"): string {
    return `Hello, ${name}`;
  }
  
  export default hello;