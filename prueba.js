var frutas = [{name: "Fruta1", precio1: 1, precio2: 3, precio3 : 4},{name: "Fruta2", precio1: 17, precio2: 3, precio3 : 4},
				{name: "Fruta3", precio1: 1, precio2: 2, precio3 : 4}];
var cereales = [{name: "Cereal1", precio1: 10, precio2: 3, precio3 : 5},{name: "Cereal2", precio1: 17, precio2: 5, precio3 : 4},
				{name: "Cereal3", precio1: 10, precio2: 20, precio3 : 4}];
var pantalones = [{name: "Pantalon1", precio1: 1, precio2: 3, precio3 : 4},{name: "Pantalon2", precio1: 1, precio2: 5, precio3 : 5},
				{name: "Pantalon3", precio1: 10, precio2: 2, precio3 : 4}];
var camisas = [{name: "Camisa1", precio1: 10, precio2: 3, precio3 : 4},{name: "Camisa2", precio1: 17, precio2: 3, precio3 : 4},
				{name: "Camisa3", precio1: 10, precio2: 20, precio3 : 4}];
var current = [];

window.onload = function(){
	document.getElementById("select2").innerHTML = "<option>Fruta</option><option>Cereal</>";
	changeSelect2();
	changeSelect3(); 

	document.getElementById("select1").onchange = function(){
		var select1 = getSelectedItem1();
		if(select1 === "Comida"){
			document.getElementById("select2").innerHTML = "<option>Fruta</option><option>Cereal</>";
		}else if(select1 === "Ropa"){
			document.getElementById("select2").innerHTML = "<option>Camisa</option><option>Pantalon</>";
		}

	changeSelect2();
	}

	document.getElementById("select2").onchange = changeSelect2;

	document.getElementById("select3").onchange = changeSelect3;
};

function changeSelect3(){
	var index = document.getElementById("select3").selectedIndex;
	var value = document.getElementById("select3").options[index].value;
	for(let i = 0; i < current.length; i++){
		if(value === current[i].name){
			createChart(current[i].precio1,current[i].precio2,current[i].precio3);
		}
	}
}

function changeSelect2(){
	var select2 = getSelectedItem2();
	var options;
	if(select2 === "Fruta"){
		options = returnHTML(frutas);
		current = frutas;
	}else if(select2 === "Cereal"){
		options = returnHTML(cereales);
		current = cereales;
	}else if(select2 === "Camisa"){
		options = returnHTML(camisas);
		current = camisas;
	}else if(select2 === "Pantalon"){
		options = returnHTML(pantalones);
		current = pantalones;
	}

	document.getElementById("select3").innerHTML = options; 
	createChart(current[0].precio1,current[0].precio2,current[0].precio3);
}

function getSelectedItem1(){
	var index = document.getElementById("select1").selectedIndex;
	var value = document.getElementById("select1").options[index].value;

	console.log(value);
	return value;
}

function getSelectedItem2(){
	var index = document.getElementById("select2").selectedIndex;
	var value = document.getElementById("select2").options[index].value;
	return value;
}

function returnHTML(arr){
	var retorno = "";
	for(let i = 0; i < arr.length; i++){
		retorno+="<option>" + arr[i].name + "</option>";
	}
	return retorno;
}

function createChart(num1,num2,num3){
	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ["Enero", "Febrero", "Marzo"],
	        datasets: [{
	            label: 'Ventas',
	            data: [num1, num2, num3],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
}