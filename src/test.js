import { check } from 'prettier';

class Hello {
  constructor() {
    this.a = 12;
  }

  show(p) {
    console.log(p);
    return p + '12313';
  }
}

export default Hello;

function checkString(variavel) {
  return typeof variavel === 'string';
}

checkString('ddd');
