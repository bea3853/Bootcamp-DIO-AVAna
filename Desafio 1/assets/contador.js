
// busca id 
const srcNumber = document.getElementById('currentNumber');
let count = 0;

function increment() {
	count += 5;
	//html que esta dentro dele vai mudar 
	srcNumber.innerHTML = count;
}

function decrement() {
	count -=1;
	srcNumber.innerHTML = count;
}

