var button = document.getElementById("reveal-button");

button.onclick = function() {
var position = document.getElementById("position");
var answer = document.getElementById("answer");

var result = fibonacci(position);

answer.innerHTML = result;
}

function fibonacci(n){
    {
		if ( n < 1 ) { return "position must not be a negative number";
		} else if ( n == 1 ) {
			return 0; 
		} else if ( n < 3 ) {
				return 1;
		} else if ( n >= 3 ) {
				return fibonacci(n-1)+fib(n-2);
		}
	}
}