let message = 'hello';
message = 12345;

//숫자형
let n = 123;
n = 12.345;
console.log(n);

//숫자형 |number Type은 정수 및 부동소수점 숫자(floating point number)를 나타냄.
//숫자형과 관련된 연산은 다양한데, 곱셈 *, 나눗셈 /, 뺄셈 - 등이 대표적이다.

//숫자형엔 일반적인 숫자 외에 Infinity, -Infinity, NaN 같은 '특수 숫자 값(special numeric value)'이 포함.

// - Infinity는 어떤 숫자보다 더 큰 특수 값, 무한대를 나타냄

//alert( 1 / 9);
// alert(Infinity);
// NaN은 계산 중에 에러가 발생했다는 것을 나타내주는 값이다. 부정확하거나 정의되지 않은 수학 연산을 사용하면 게산중에 에러 발생.
alert('No Number' / 2);

//NaN은 여간해선 바뀌지 않다. NaN에 어떤 추가 연산을 해도 결국 NaN이 반환
alert('No number' / 2 + 5);

//자바스크립트는 수학연산은 안전하다.

//BigInt : 내부 표현 방식 때문에 자바스크립트에선 (253-1)(9007199254740991) 보다 큰 값 혹은 -(253-1) 보다 작은 정수는 '숫자형’을 사용해 나타낼 수 없습니다.
// 암호 관련 작업 같이 아주 큰 숫자가 필요한 상황이거나 아주 높은 정밀도로 작업을 해야 할 때는 이런 큰 숫자가 필요하다.

//BigInt형은 표준으로 채택된 지 얼마 안 된 자료형으로 길이에 상관없이 정수를 나타낼 수 있다.

// 끝에 'n'이 붙으면 BigInt형 자료이다.

const bigInt = 12345125128937418923749812734n;

//호환된 이슈
// Firefox, Chrome, Edge, Safari에서만 BigInt를 지원한다.

//문자형
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another $(str)`;

// 자바스크립트에서 큰따옴표, 작은따옴표는 기본적인 따옴표로 자바스크립트에서는 이 둘에 차이를 둘지 않는다.
// 역 따옴표로 변수나 표현식을 감싼 후 ${…}안에 넣어주면, 아래와 같이 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있습니다.

let name = 'Won';

let name = "John";

// 변수를 문자열 중간에 삽입
alert(`Hello, ${name}!`); // Hello, John!

// 표현식을 문자열 중간에 삽입
alert(`the result is ${1 + 2}`); // the result is 3


let nameFiledChecked = true;
let ageFileChecked = false;

let isGreater = 4 > 1;
alert(isGreater);


//undefined 값
// Undefined 값도 null 값처럼 자신맘ㄴ의 자료형을 형성

let age;
alert(age);// 'undefined'가 출력됨.

let age = 100;

age = undefined;

alert(age); // undefined

//객체와 심볼 : 객체형을 제외한 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있기 때문에 원시(primitive) 자료형이라 부른다.
// 반면 객체는 데이터 컬렉션이나 복잡한 객체(entity)를 표현
// 심볼(symbol)형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용


//요약
// 숫자형 – 정수, 부동 소수점 숫자 등의 숫자를 나타낼 때 사용합니다. 정수의 한계는 ±253 입니다.
//     bigint – 길이 제약 없이 정수를 나타낼 수 있습니다.
//     문자형 – 빈 문자열이나 글자들로 이뤄진 문자열을 나타낼 때 사용합니다. 단일 문자를 나타내는 별도의 자료형은 없습니다.
//     불린형 – true, false를 나타낼 때 사용합니다.
//     null – null 값만을 위한 독립 자료형입니다. null은 알 수 없는 값을 나타냅니다.
//     undefined – undefined 값만을 위한 독립 자료형입니다. undefined는 할당되지 않은 값을 나타냅니다.
//     객체형 – 복잡한 데이터 구조를 표현할 때 사용합니다.
//     심볼형 – 객체의 고유 식별자를 만들 때 사용합니다.
//     typeof 연산자는 피연산자의 자료형을 알려줍니다.
//
//     typeof x 또는 typeof(x) 형태로 사용합니다.
//     피연산자의 자료형을 문자열 형태로 반환합니다.
//     null의 typeof 연산은 "object"인데, 이는 언어상 오류입니다. null은 객체가 아닙니다.