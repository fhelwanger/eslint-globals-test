setTimeout(() => {
  console.log('test');
});

fetch('https://api.github.com/users/fhelwanger')
  .then(resp => resp.json())
  .then(json => JSON.stringify(json));

const worker = new Worker('worker.js');
worker.postMessage('test');

localStorage.setItem('key', 'value');
