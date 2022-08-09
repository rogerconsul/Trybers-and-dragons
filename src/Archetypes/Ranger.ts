import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static instanceOfRanger = 0;
  energyType: EnergyType = 'stamina';

  constructor(
    name: string,
  ) {
    super(name);
    Ranger.instanceOfRanger += 1;
  }

  get name(): string {
    return this.name;
  }

  static get energyType(): EnergyType {
    return this.energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instanceOfRanger;
  }
}
