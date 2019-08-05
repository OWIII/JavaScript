
const a = {
  name: 'Artem',
  age: 27,
  work: 'Bquadro'
};

let variable = 'name';

a.colorOfshit = 'black';
delete a.colorOfshit;

console.log(a['name']);
console.log('-----------------------------------------');
 for ( key in a) {
  console.log(a[key]);
}
console.log('-----------------------------------------');

console.log(a[variable]);

let b = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
let c = b[1].toUpperCase();

console.log(b, typeof b[1], c);

console.log('-----------------------------------------');

let arr = [ '1', '2', '3' ];
let number = '1, 2, 3';

console.log(arr == number, arr);

console.log('-----------------------------------------');

let milk = 2;

function func() {
  let milk = 1;	// `a` формально не объявлена
  console.log(milk);
}

func();

console.log(milk);

let abra = ( function grot() {
  return 16;
})();

console.log(abra);

console.log('-----------------------------------------');

function makeAdder(x) {
  function add(y) {
    return y + x;
  }
  return add;
}

let hundred = makeAdder(100);
let fausent = makeAdder(1000);

console.log(hundred(100), fausent(10));

console.log('-----------------------------------------');
/*
function User(){
  var username, password;

  function doLogin(user,pw) {
    username = user;
    password = pw;

    // сделать остальную часть работы по логину
  }

  return publicAPI;
}

var publicAPI = {
  login: doLogin
};


 создать экземпляр модуля `User`
var fred = User();
var artemka = User();

fred.login( "fred", "12Battery34!" );
artemka.login( 'Artem', 'ebopep45');


 for (key in publicAPI){
  console.log(publicAPI[key]);
};
*/

let array2 = [ '1', '2', '3'];
array2.forEach(function(a) {
  console.log(a*a);
});

console.log('-----------------------------------------');


var dog = {
  name: 'Chester',
  breed: 'beagle',
  intro: function(){
    console.log(this);
  }
};

dog.intro();

console.log('-----------------------------------------');

var obj1 = {
  hello: function() {
    console.log('Hello world');
    return this;
  },
  obj2: {
    breed: 'dog',
    speak: function(){
      console.log('woof!');
      return this;
    }
  }
};

//console.log(obj1);
console.log(obj1.hello());  // выводит 'Hello world' и возвращает obj1
//console.log(obj1.obj2);
//console.log(obj1.obj2.speak());  // выводит 'woof!' и возвращает obj2


