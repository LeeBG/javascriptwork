var name;
//1급객체(변수에 저장, 함수의 파라메터 전달, 최상단에 존재,독립적으로 메모리에 뜰 수 있다.)
// 브라우저가 window 객체이다.

function start() {
    console.log(1, this);
    hello();

    function hello() {
        console.log(2, this);
        var num = 10;
        console.log(this.num);
    }
}

start(); //window.은 생략돼있다.
//window가 start()를 호출했기에
//위의 this는 window이다.

//this. 호출한 놈의  this