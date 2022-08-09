import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static orcInstances = 0;
  
  constructor(
    name: string,
    dexterity: number,
  ) { 
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.orcInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.orcInstances;
  }
}