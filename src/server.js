import Hello from './test';

const exec = new Hello();
const tt = exec.show('aaa');
function resolverDepoisDe2Segundos(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function adicionar1(x) {
  var a = resolverDepoisDe2Segundos(20);
  var b = resolverDepoisDe2Segundos(30);
  return x + (await a) + (await b);
}
adicionar1(10).then(v => {
  console.log(v); // exibe 60 depois de 2 segundos.
});
console.log('magic! ' + tt);
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
