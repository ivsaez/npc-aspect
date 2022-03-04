import {
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
import { random, randomFromList } from "role-methods";

export class Aspect{
    _sex: SexKind;
    _origin: OriginKind;
    _eye: EyeColor;
    _hair: HairColor;
    _haircut: HaircutStyle;
    _complexion: ComplexionKind;
    _specie: SpecieKind;
    _height: number;
    _age: number;

    constructor(
        sex: SexKind = SexKind.Male,
        origin: OriginKind = OriginKind.European,
        eye: EyeColor = EyeColor.Black,
        hair: HairColor = HairColor.Black,
        haircut: HaircutStyle = HaircutStyle.Shaved,
        complexion: ComplexionKind = ComplexionKind.Thin,
        specie: SpecieKind = SpecieKind.Human,
        height: number = 180,
        age: number = 30)
    {
        this._sex = sex;
        this._origin = origin;
        this._eye = eye;
        this._hair = hair;
        this._haircut = haircut;
        this._complexion = complexion;
        this._height = height;
        this._age = age;
        this._specie = specie;
    }

    get sex(){
        return this._sex;
    }

    get origin(){
        return this._origin;
    }

    get eye(){
        return this._eye;
    }

    get hair(){
        return this._hair;
    }

    get haircut(){
        return this._haircut;
    }

    get complexion(){
        return this._complexion;
    }

    get specie(){
        return this._specie;
    }

    get height(){
        return this._height;
    }

    get age(){
        return this._age;
    }

    static generateHuman(
        sex: SexKind,
        origin: OriginKind,
        eye: EyeColor,
        hair: HairColor,
        haircut: HaircutStyle,
        complexion: ComplexionKind,
        height: number,
        age: number): Aspect{
        
        return new Aspect(
            sex,
            origin,
            eye,
            hair,
            haircut,
            complexion,
            SpecieKind.Human,
            height,
            age
        );
    }

    static generateAgeKindHuman(
        sex: SexKind,
        origin: OriginKind,
        eye: EyeColor,
        hair: HairColor,
        haircut: HaircutStyle,
        complexion: ComplexionKind,
        height: number,
        ageKind: AgeKind): Aspect{
        
        return this.generateHuman(
            sex,
            origin,
            eye,
            hair,
            haircut,
            complexion,
            height,
            this.getRandomAgeByAgeKind(ageKind)
        );
    }

    static generateRandomAgeKind(ageKind: AgeKind): Aspect{
        
        let selectedSpecie = randomFromList(Species);
        return new Aspect(
            randomFromList(Sexes),
            randomFromList(Origins),
            randomFromList(Eyes),
            randomFromList(HairColors),
            randomFromList(HairCuts),
            randomFromList(Complexions),
            selectedSpecie,
            this.getRandomHeightBySpecie(selectedSpecie),
            this.getRandomAgeByAgeKind(ageKind));
    }

    static generateOriginHuman(origin: OriginKind): Aspect{
        return this.generateOriginAndSexHuman(
            origin,
            randomFromList(Sexes));
    }

    static generateRandomSpecie(specie: SpecieKind): Aspect{
        return this.generateRandomSpecieAndSex(
            specie, 
            randomFromList(Sexes));
    }

    static generateOriginAndSexHuman(origin: OriginKind, sex: SexKind): Aspect{
        return this.generateOriginAgeAndSexHuman(
            origin, 
            randomFromList(Ages), 
            sex);
    }

    static generateOriginAndAgeHuman(origin: OriginKind, age: AgeKind): Aspect{
        return this.generateOriginAgeAndSexHuman(
            origin, 
            age, 
            randomFromList(Sexes));
    }

    static generateOriginAgeAndSexHuman(origin: OriginKind, age: AgeKind, sex: SexKind): Aspect{
        return new Aspect(
            sex,
            origin,
            randomFromList(Eyes),
            randomFromList(HairColors),
            randomFromList(HairCuts),
            randomFromList(Complexions),
            SpecieKind.Human,
            this.getRandomHeightBySpecie(SpecieKind.Human),
            this.getRandomAgeByAgeKind(age));
    }

    static generateRandomSpecieAndSex(specie: SpecieKind, sex: SexKind): Aspect{
        return this.generateRandomSpecieAgeAndSex(
            specie, 
            randomFromList(Ages), 
            sex);
    }

    static generateRandomSpecieAndAge(specie: SpecieKind, age: AgeKind): Aspect{
        return this.generateRandomSpecieAgeAndSex(
            specie, 
            age, 
            randomFromList(Sexes));
    }

    static generateRandomSpecieAgeAndSex(specie: SpecieKind, age: AgeKind, sex: SexKind): Aspect{
        return new Aspect(
            sex,
            randomFromList(Origins),
            randomFromList(Eyes),
            randomFromList(HairColors),
            randomFromList(HairCuts),
            randomFromList(Complexions),
            specie,
            this.getRandomHeightBySpecie(specie),
            this.getRandomAgeByAgeKind(age));
    }

    private static getRandomAgeByAgeKind(age: AgeKind): number{
        switch(age){
            case AgeKind.Kid:
                return 5 + random(7);
            case AgeKind.Teenager:
                return 12 + random(7);
            case AgeKind.Young:
                return 19 + random(17);
            case AgeKind.Midage:
                return 36 + random(30);
            case AgeKind.Old:
                return 66 + random(35);
        }
    }

    private static getRandomHeightBySpecie(specie: SpecieKind): number
    {
        let baseHeight = 150;
        let increase = 51; 
        
        if(specie == SpecieKind.Dwarf || specie == SpecieKind.Goblin)
        {
            baseHeight = 100;
            increase = 61;
        }
        
        return baseHeight + random(increase);
    }
}