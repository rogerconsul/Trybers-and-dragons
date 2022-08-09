import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static instanceOfWarrior = 0;
  energyType: EnergyType = 'stamina';

  constructor(
    name: string,
  ) {
    super(name);
    Warrior.instanceOfWarrior += 1;
  }

  get name(): string {
    return this.name;
  }

  static get energyType(): EnergyType {
    return this.energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instanceOfWarrior;
  }
}
