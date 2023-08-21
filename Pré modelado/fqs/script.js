var ctx = document.getElementById('graficoPizza').getContext('2d');
 
var dados = {
  labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  datasets: [{
    data: [12, 19, 3, 5, 2, 7],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(100, 100, 200)',
    ],
    borderWidth: 1
  }]
};
 
var opcoes = {
  responsive: true
};
 
var graficoPizza = new Chart(ctx, {
  type: 'pie',
  data: dados,
  options: opcoes
});