import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static instanceOfMage = 0;
  energyType: EnergyType = 'mana';

  constructor(
    name: string,
  ) {
    super(name);
    Mage.instanceOfMage += 1;
  }

  get name(): string {
    return this.name;
  }

  static get energyType(): EnergyType {
    return this.energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.instanceOfMage;
  }
}
