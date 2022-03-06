import { Aspect } from "../aspect";
import { AgeKind, 
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
    Ages } from "../enumerations";

describe("Aspect should", () => {
  it("create a new aspect", () => {
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

    expect(aspect.sex).toBe(SexKind.Female);
    expect(aspect.origin).toBe(OriginKind.Arabic);
    expect(aspect.eye).toBe(EyeColor.Brown);
    expect(aspect.hair).toBe(HairColor.Blue);
    expect(aspect.haircut).toBe(HaircutStyle.Bald);
    expect(aspect.complexion).toBe(ComplexionKind.Strongman);
    expect(aspect.specie).toBe(SpecieKind.Dwarf);
    expect(aspect.height).toBe(140);
    expect(aspect.age).toBe(50);
  });

  it("create a new aspect with default values", () => {
    let aspect = new Aspect();

    expect(aspect.sex).toBe(SexKind.Male);
    expect(aspect.origin).toBe(OriginKind.European);
    expect(aspect.eye).toBe(EyeColor.Black);
    expect(aspect.hair).toBe(HairColor.Black);
    expect(aspect.haircut).toBe(HaircutStyle.Shaved);
    expect(aspect.complexion).toBe(ComplexionKind.Thin);
    expect(aspect.specie).toBe(SpecieKind.Human);
    expect(aspect.height).toBe(180);
    expect(aspect.age).toBe(30);
  });

  it("generate a human", () => {
    let aspect = Aspect.generateHuman(
        SexKind.Female,
        OriginKind.Arabic,
        EyeColor.Brown,
        HairColor.Blue,
        HaircutStyle.Bald,
        ComplexionKind.Strongman,
        140,
        50
    );

    expect(aspect.sex).toBe(SexKind.Female);
    expect(aspect.origin).toBe(OriginKind.Arabic);
    expect(aspect.eye).toBe(EyeColor.Brown);
    expect(aspect.hair).toBe(HairColor.Blue);
    expect(aspect.haircut).toBe(HaircutStyle.Bald);
    expect(aspect.complexion).toBe(ComplexionKind.Strongman);
    expect(aspect.specie).toBe(SpecieKind.Human);
    expect(aspect.height).toBe(140);
    expect(aspect.age).toBe(50);
  });

  it("generate a human with specific age kind", () => {
    let aspect = Aspect.generateAgeKindHuman(
        SexKind.Female,
        OriginKind.Arabic,
        EyeColor.Brown,
        HairColor.Blue,
        HaircutStyle.Bald,
        ComplexionKind.Strongman,
        140,
        AgeKind.Teenager
    );

    let rightAgeRange = aspect.age >= 12 && aspect.age < 19;

    expect(aspect.sex).toBe(SexKind.Female);
    expect(aspect.origin).toBe(OriginKind.Arabic);
    expect(aspect.eye).toBe(EyeColor.Brown);
    expect(aspect.hair).toBe(HairColor.Blue);
    expect(aspect.haircut).toBe(HaircutStyle.Bald);
    expect(aspect.complexion).toBe(ComplexionKind.Strongman);
    expect(aspect.specie).toBe(SpecieKind.Human);
    expect(aspect.height).toBe(140);
    expect(rightAgeRange).toBe(true);
  });

  it("generate random npc with specific age kind", () => {
    let aspect = Aspect.generateRandomAgeKind(
        AgeKind.Teenager
    );

    let rightAgeRange = aspect.age >= 12 && aspect.age < 19;

    expect(rightAgeRange).toBe(true);
  });

  it("generate random human with specific origin", () => {
    let aspect = Aspect.generateOriginHuman(
        OriginKind.American
    );

    expect(aspect.specie).toBe(SpecieKind.Human);
    expect(aspect.origin).toBe(OriginKind.American);
  });

  it("generate random npc with specific specie", () => {
    let aspect = Aspect.generateRandomSpecie(
        SpecieKind.Goblin
    );

    expect(aspect.specie).toBe(SpecieKind.Goblin);
  });

  it("generate random human with specific origin and sex", () => {
    let aspect = Aspect.generateOriginAndSexHuman(
        OriginKind.American,
        SexKind.Androgynous
    );

    expect(aspect.specie).toBe(SpecieKind.Human);
    expect(aspect.origin).toBe(OriginKind.American);
    expect(aspect.sex).toBe(SexKind.Androgynous);
  });

  it("generate random human with specific origin and age kind", () => {
    let aspect = Aspect.generateOriginAndAgeHuman(
        OriginKind.American,
        AgeKind.Teenager
    );

    let rightAgeRange = aspect.age >= 12 && aspect.age < 19;

    expect(rightAgeRange).toBe(true);
    expect(aspect.specie).toBe(SpecieKind.Human);
    expect(aspect.origin).toBe(OriginKind.American);
  });

  it("generate random human with specific origin age kind and sex", () => {
    let aspect = Aspect.generateOriginAgeAndSexHuman(
        OriginKind.American,
        AgeKind.Teenager,
        SexKind.Female
    );

    let rightAgeRange = aspect.age >= 12 && aspect.age < 19;

    expect(rightAgeRange).toBe(true);
    expect(aspect.specie).toBe(SpecieKind.Human);
    expect(aspect.origin).toBe(OriginKind.American);
    expect(aspect.sex).toBe(SexKind.Female);
  });

  it("generate random npc with specific specie and sex", () => {
    let aspect = Aspect.generateRandomSpecieAndSex(
        SpecieKind.Goblin,
        SexKind.Androgynous
    );

    expect(aspect.specie).toBe(SpecieKind.Goblin);
    expect(aspect.sex).toBe(SexKind.Androgynous);
  });

  it("generate random npc with specific specie and age kind", () => {
    let aspect = Aspect.generateRandomSpecieAndAge(
        SpecieKind.Goblin,
        AgeKind.Teenager
    );

    let rightAgeRange = aspect.age >= 12 && aspect.age < 19;

    expect(rightAgeRange).toBe(true);
    expect(aspect.specie).toBe(SpecieKind.Goblin);
  });

  it("generate random npc with specific specie and sex and age kind", () => {
    let aspect = Aspect.generateRandomSpecieAgeAndSex(
        SpecieKind.Goblin,
        AgeKind.Teenager,
        SexKind.Androgynous
    );

    let rightAgeRange = aspect.age >= 12 && aspect.age < 19;

    expect(rightAgeRange).toBe(true);
    expect(aspect.specie).toBe(SpecieKind.Goblin);
    expect(aspect.sex).toBe(SexKind.Androgynous);
  });

  it("copy an aspect", () => {
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
    
    let copy = aspect.copy();

    expect(copy.sex).toBe(SexKind.Female);
    expect(copy.origin).toBe(OriginKind.Arabic);
    expect(copy.eye).toBe(EyeColor.Brown);
    expect(copy.hair).toBe(HairColor.Blue);
    expect(copy.haircut).toBe(HaircutStyle.Bald);
    expect(copy.complexion).toBe(ComplexionKind.Strongman);
    expect(copy.specie).toBe(SpecieKind.Dwarf);
    expect(copy.height).toBe(140);
    expect(copy.age).toBe(50);
  });
});