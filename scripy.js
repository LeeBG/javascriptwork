// ECMA 5버전 2015버전(ES5) 바닐라 자바스크립트 - 너무나 자유분방함
// 마이크로소프트에서 구현한 자바스크립트기반의  "타입스크립트"
// 

var num = 10;
console.log(num);

//자료형(X) - 원시자료형이 없음
//크기가 정해져 있는 타입이 없음
//모든 변수는 레퍼런스변수
//C언어에서 포인터쓰는이유는 데이터의 크기를 모르기 때문임
//미리 공간을 확보할 수 없는 언어 = 동적언어(python,javascript)
//미리 공간을 확보하는 언어 = 정적언어 (java)
//컴파일 시점에 메모리 확보가 되지 않기 때문에 인터프리터 언어가생김
//javascript 원시자료형이 없으니까 자료형 - 객체이다(인터프리터)-동적언어
//크기를 못정하니까
//데이터 타입이 없음. 이해하는 것


var a1 = 10; //변수를 정의할 때 실행시에 정해짐
//a1은 referece 주소값(ex.100번지=>50번지=값이있음)  실제로 a1을 찾아가면
//주소값을 담을수 있는 데이터 크기

var a2 = 10.5;
var a3 = "문자열";
var a4 = '문자열';
var a5 = true; //false;
var a6 = [1, 2, 3, "문자"]; //자바에서는 collection 전부 레퍼런스타입이라 문자열도 상관 x
console.log(a6);
console.log(a6[0]);
var a7 = {
    username: "ssar",
    age: 10,
    point: 10.5,
    hobby: ["농구", "축구"],
};
console.log(a7);
console.log(a7.hobby[1]);

function hello(n) { //리턴타입을 명시하지 않아도 됨,함수의 매개변수는 var도 안적어도됨
    console.log("hello함수 호출됨");
    return n;
}

var num = hello(10);
console.log(num);


var a8 = hello;
a8(); //넣어도 되고 안 넣어도 된다. -지나치게 자유분방함


// var a9 = ()=> {       //익명함수 : 
//     console.log("a9실행됨");
// };
// a9();


var a9 = function() {
    console.log("a9 실행됨")
};

a9();