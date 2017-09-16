<!DOCTYPE html>
<html>
<head>
	<title>FizzBuzz</title>
</head>
<body>
<script>

var num = 10;

for(i = 0; i < num; i++) {
	if(i % 2 && i % 3) {
		console.log("Fizzbuzz");
	}
	else if(i % 2) {
		console.log("Fizz");
	}
	else if(i % 3) {
		console.log("Buzz");
	}
	else{
		console.log(i);
	}
}
</script>

</body>
</html>