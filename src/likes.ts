import { random } from "role-methods";
import { Aspect } from "./aspect";
import { 
    SexKind, 
    OriginKind, 
    EyeColor, 
    HairColor, 
    HaircutStyle, 
    ComplexionKind, 
    SpecieKind, 
    AgeKind, 
    Sexes, 
    Ages, 
    Complexions, 
    Eyes, 
    HairColors, 
    HairCuts, 
    Origins, 
    Species,
    getAgeKind
} from "./enumerations";

const MaxLike = 100;
const MinLike = 0;

export class Likes{
    private _sexMap: Map<SexKind, number>;
    private _originMap: Map<OriginKind, number>;
    private _eyeColorMap: Map<EyeColor, number>;
    private _hairColorMap: Map<HairColor, number>;
    private _hairCutMap: Map<HaircutStyle, number>;
    private _complexionMap: Map<ComplexionKind, number>;
    private _specieMap: Map<SpecieKind, number>;
    private _ageMap: Map<AgeKind, number>;

    constructor(){
        this._sexMap = new Map<SexKind, number>();
        this._originMap = new Map<OriginKind, number>();
        this._eyeColorMap = new Map<EyeColor, number>();
        this._hairColorMap = new Map<HairColor, number>();
        this._hairCutMap = new Map<HaircutStyle, number>();
        this._complexionMap = new Map<ComplexionKind, number>();
        this._specieMap = new Map<SpecieKind, number>();
        this._ageMap = new Map<AgeKind, number>();

        this.initializeMaps();
    }

    static likesSpecie(specie: SpecieKind): Likes{
        let likes = new Likes();
        
        this.minimizeAspectMap(likes._specieMap);
        likes._specieMap.set(specie, MaxLike);
        
        return likes;
    }

    static likesSex(sex: SexKind): Likes{
        let likes = new Likes();
        
        this.minimizeAspectMap(likes._sexMap);
        likes._sexMap.set(sex, MaxLike);
        
        return likes;
    }

    static likesSpecieAndSex(specie: SpecieKind, sex: SexKind): Likes{
        let likes = this.likesSpecie(specie);
        
        this.minimizeAspectMap(likes._sexMap);
        likes._sexMap.set(sex, MaxLike);
        
        return likes;
    }

    static likesConcreteHuman(
        sex: SexKind,
        preferredOrigin: OriginKind, 
        preferredEye: EyeColor, 
        preferredHair: HairColor, 
        preferredHaircut: HaircutStyle,
        preferredComplexion: ComplexionKind,
        preferredAge: AgeKind): Likes{
        
        return this.likesConcreteSpecie(
            SpecieKind.Human,
            sex,
            preferredOrigin,
            preferredEye,
            preferredHair,
            preferredHaircut,
            preferredComplexion,
            preferredAge);
    }

    static likesConcreteSpecie(
        specie: SpecieKind,
        sex: SexKind,
        preferredOrigin: OriginKind, 
        preferredEye: EyeColor, 
        preferredHair: HairColor, 
        preferredHaircut: HaircutStyle,
        preferredComplexion: ComplexionKind,
        preferredAge: AgeKind): Likes{
        let likes = this.likesSpecieAndSex(specie, sex);
        
        likes._originMap.set(preferredOrigin, MaxLike);
        likes._eyeColorMap.set(preferredEye, MaxLike);
        likes._hairColorMap.set(preferredHair, MaxLike);
        likes._hairCutMap.set(preferredHaircut, MaxLike);
        likes._complexionMap.set(preferredComplexion, MaxLike);
        likes._ageMap.set(preferredAge, MaxLike);

        return likes;
    }

    static likesAspect(aspect: Aspect){
        let likes = new Likes();

        likes._specieMap.set(aspect.specie, MaxLike);
        likes._sexMap.set(aspect.sex, MaxLike);
        likes._originMap.set(aspect.origin, MaxLike);
        likes._eyeColorMap.set(aspect.eye, MaxLike);
        likes._hairColorMap.set(aspect.hair, MaxLike);
        likes._hairCutMap.set(aspect.haircut, MaxLike);
        likes._complexionMap.set(aspect.complexion, MaxLike);
        likes._ageMap.set(getAgeKind(aspect.age), MaxLike);
        
        return likes;
    }

    Eval(aspect: Aspect): number{
        let sum = this._sexMap.get(aspect.sex) * 4;
        sum += this._originMap.get(aspect.origin);
        sum += this._eyeColorMap.get(aspect.eye);
        sum += this._hairColorMap.get(aspect.hair);
        sum += this._hairCutMap.get(aspect.haircut);
        sum += this._complexionMap.get(aspect.complexion);
        sum += this._ageMap.get(getAgeKind(aspect.age));
        sum += this._specieMap.get(aspect.specie) * 4;
        
        return sum / 14;
    }

    private initializeMaps(): void{
        this.initializeAspectMap(this._sexMap, Sexes);
        this.initializeAspectMap(this._originMap, Origins);
        this.initializeAspectMap(this._eyeColorMap, Eyes);
        this.initializeAspectMap(this._hairColorMap, HairColors);
        this.initializeAspectMap(this._hairCutMap, HairCuts);
        this.initializeAspectMap(this._complexionMap, Complexions);
        this.initializeAspectMap(this._specieMap, Species);
        this.initializeAspectMap(this._ageMap, Ages);
    }

    private initializeAspectMap<T>(map: Map<T, number>, values: T[]): void {
        for(let value of values){
            map.set(value, random(MaxLike));
        }
    }

    private static minimizeAspectMap<T>(map: Map<T, number>): void {
        for(let key of map.keys()){
            map.set(key, MinLike);
        }
    }
}
