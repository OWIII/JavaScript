var arr = [1, 3, 4, 1, 1, 3, 4, 5];
var result = {};

console.log(result);

for (var i = 0; i < arr.length; ++i) {
  var a = arr[i];
  if (result[a] != undefined)
    ++result[a];
  else
    result[a] = 1;
}
for (var key in result) {
	
}
