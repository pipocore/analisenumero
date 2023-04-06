let adc = window.document.getElementById('adc');
let number = window.document.getElementById('number');
let res = window.document.getElementById('resultado');
let arrNum = [];

function checarnum(n) {
if (Number(n) >= 1 && Number(n) <= 100) {
return true;
}
else {
  return false;
}
}
function checarlist(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  }
  else {
    return false;
  }
}
function adicionar() {
if (checarnum(number.value) && !checarlist(number.value, arrNum)) {
  arrNum.push(Number(number.value))
  let item = document.createElement('option');
  item.text = `Valor ${number.value} adicionado.`
  adc.appendChild(item);
  res.innerHTML = ''
}
else {
  window.alert('Valor inválido ou já adicionado.')
}
number.value = '';
number.focus()
}

function analisar() {
if (arrNum.length == 0) {
  window.alert('Nenhum valor adicionado.')
}
else {
  let show = document.getElementById('show');
  show.style.height = '600px';
  let tot = arrNum.length
  arrNum.sort((a, b) => a - b);
  let menor = arrNum[0];
  let maior = arrNum[arrNum.length - 1]
  let soma = 0;
  for (let j = 0; j < arrNum.length; j++) {
    soma += arrNum[j]
  }
  media = soma / tot;
  res.innerHTML = '';
  res.innerHTML += `<p>Temos ${tot} números ao todo.</p>`
  res.innerHTML += `<p>O maior valor é ${maior}.</p>`
  res.innerHTML += `<p>O menor valor é ${menor}.</p>`
  res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
  res.innerHTML += `<p>A média dos valores é ${media}.</p>`
}
}