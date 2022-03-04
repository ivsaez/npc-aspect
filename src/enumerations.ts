export enum AgeKind
{
    Kid,
    Teenager,
    Young,
    Midage,
    Old
}

export enum ComplexionKind
{
    Skinny,
    Thin,
    Fat,
    Athletic,
    Strongman
}

export enum EyeColor
{
    Black,
    Brown,
    Blue,
    Green
}

export enum HairColor
{
    White,
    Black,
    Brown,
    Red,
    Blond,
    Blue
}

export enum HaircutStyle
{
    Shaved,
    Short,
    StraightLong,
    CurvyLong,
    Bald
}

export enum OriginKind
{
    European,
    African,
    Asian,
    American,
    Arabic,
    Oceanic
}

export enum SexKind
{
    Male,
    Female,
    Androgynous
}

export enum SpecieKind
{
    Human,
    Dwarf,
    Elf,
    Goblin,
    Orc,
    Troll
}

export const Complexions: ComplexionKind[] = [
    ComplexionKind.Athletic,
    ComplexionKind.Fat,
    ComplexionKind.Skinny,
    ComplexionKind.Strongman,
    ComplexionKind.Thin
];

export const Eyes: EyeColor[] = [
    EyeColor.Black,
    EyeColor.Blue,
    EyeColor.Brown,
    EyeColor.Green
];

export const HairColors: HairColor[] = [
    HairColor.Black,
    HairColor.Blond,
    HairColor.Blue,
    HairColor.Brown,
    HairColor.Red,
    HairColor.White
];

export const HairCuts: HaircutStyle[] = [
    HaircutStyle.Bald,
    HaircutStyle.CurvyLong,
    HaircutStyle.Shaved,
    HaircutStyle.Short,
    HaircutStyle.StraightLong
];

export const Origins: OriginKind[] = [
    OriginKind.African,
    OriginKind.American,
    OriginKind.Arabic,
    OriginKind.Asian,
    OriginKind.European,
    OriginKind.Oceanic
];

export const Sexes: SexKind[] = [
    SexKind.Androgynous,
    SexKind.Female,
    SexKind.Male
];

export const Species: SpecieKind[] = [
    SpecieKind.Dwarf,
    SpecieKind.Elf,
    SpecieKind.Goblin,
    SpecieKind.Human,
    SpecieKind.Orc,
    SpecieKind.Troll
];

export const GoodSpecies: SpecieKind[] = [
    SpecieKind.Dwarf,
    SpecieKind.Elf,
    SpecieKind.Human
];

export const BadSpecies: SpecieKind[] = [
    SpecieKind.Human,
    SpecieKind.Goblin,
    SpecieKind.Orc,
    SpecieKind.Troll
];

export const Ages: AgeKind[] = [
    AgeKind.Kid,
    AgeKind.Midage,
    AgeKind.Old,
    AgeKind.Teenager,
    AgeKind.Young
];