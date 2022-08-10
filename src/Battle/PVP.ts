import Fighter from '../Fighter';
import Battle from './Battle';

// Use um dos players para ser parâmetro do super na inicialização e use o método fight do super para dar o veredito da batalha, ou seja, se super.fight() retornar 1 o player quer foi usado como parâmetro do super na inicialização ganhou, e se retornar -1 a vitória foi do player que não foi o parâmetro do super;

export default class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);
  }

  fight(): number {
    for (let index = 0; index < 999; index += 1) {
      this._player1.attack(this._player2);
      if (this._player2.lifePoints <= 0) {
        return 1;
      }
      this._player2.attack(this._player1);
      if (this._player1.lifePoints <= 0) {
        return -1;
      }
    }
    return 0;
  }
}