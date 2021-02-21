
	//identify and declare variable for button 
    var button = document.getElementById("reveal");
	//identify and declare variable for form
	var form = document.getElementById("fibonacciform");

    //validation
	form.onsubmit = function() {
		return false;
	}

    //onclick

	button.onclick = function() {
    	
		//declare var input for fibonacci position
		var position = document.getElementById("position").value;
		//declare var output for fibonacci position
		var answer = document.getElementById("answer");
		var answer2 = document.getElementById("answer2");
		//declare var result, call fibonacci function
		var result = fibonacci(position);
		
		
		//result return
		answer.innerHTML = "<p>  Result is </p>";
   		answer2.innerHTML = result;


	}


    //Recursive-array fibonacci function
	function fibonacci(n, res = [0, 1, 1]) {
    	if (res[n]) {
        	return res[n];
    	}

    	res[n] = fibonacci(n - 1, res) + fibonacci(n - 2, res);
    	return res[n];
	}
	
	
  