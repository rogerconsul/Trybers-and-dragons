import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  // lifePoints: number,
  // strength: number,
  // attack(enemy: Fighter): void,
  // receiveDamage(attackPoints: number): number
  defense: number,
  energy?: Energy,
  special?(enemy: Fighter): void,
  levelUp(): void,
}