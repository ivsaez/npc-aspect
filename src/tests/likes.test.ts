import { Likes } from "../likes";
import { Aspect } from "../aspect";
import {  
    EyeColor, 
    ComplexionKind, 
    HairColor, 
    HaircutStyle, 
    OriginKind, 
    SexKind, 
    SpecieKind
 } from "../enumerations";

describe("Likes should", () => {
  it("evaluate a 100 if coincident aspect", () => {
    let aspect = new Aspect(
        SexKind.Female,
        OriginKind.Arabic,
        EyeColor.Brown,
        HairColor.Blue,
        HaircutStyle.Bald,
        ComplexionKind.Strongman,
        SpecieKind.Dwarf,
        140,
        50);

    let likes = Likes.likesAspect(aspect);

    expect(likes.Eval(aspect)).toBe(100);
  });
});