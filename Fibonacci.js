
	var button = document.getElementById("reveal");
	
	var form = document.getElementById("fibonacciform");
	form.onsubmit = function() {
		return false;
	}

	button.onclick = function() {
    	
		//declare var input for fibonacci position
		var position = document.getElementById("position").value;
		//declare var output for fibonacci position
		var answer = document.getElementById("answer");
		var answer2 = document.getElementById("answer2");
		//declare var result
		var result = fibonacci(position);
		
		
		//result return
		answer.innerHTML = "<p>  Result is </p>";
   		answer2.innerHTML = result;


	}


	// function fibonacci(n) {
	// 	if ( n < 1 ) { return "Input must be a number greater than 0.";
	// 	} else if ( n == 1 ) {
	// 		return 0; 
	// 	} else if ( n < 3 ) {
	// 			return 1;
	// 	} else if ( n >= 3 ) {
	// 			return fibonacci(n-1)+fibonacci(n-2);
	// 	}
	// }


    // // _.memoize function
    // function fibonacci(n){
    //     return n < 2 ? n:fibonacci(n-1) + fibonacci(n-2);
    // }

	function fibonacci(n, res = [0, 1, 1]) {
    	if (res[n]) {
        	return res[n];
    	}

    	res[n] = fibonacci(n - 1, res) + fibonacci(n - 2, res);
    	return res[n];
	}
	
	
  