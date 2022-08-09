import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static instanceOfNecromancer = 0;
  energyType: EnergyType = 'mana';

  constructor(
    name: string,
  ) {
    super(name);
    Necromancer.instanceOfNecromancer += 1;
  }

  get name(): string {
    return this.name;
  }

  static get energyType(): EnergyType {
    return this.energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instanceOfNecromancer;
  }
}
