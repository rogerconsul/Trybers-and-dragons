import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monster: SimpleFighter[],
  ) {
    super(_player);
  }

  fight(): number {
    let result = 1;
    this._monster.forEach((m) => {
      for (let index = 0; index < 999; index += 1) {
        this._player.attack(m);
        if (m.lifePoints <= 0) {
          result = 1;
        }
        m.attack(this._player);
        if (this._player.lifePoints <= 0) {
          result = -1;
        }
      }
    });
    return result;
  }
}