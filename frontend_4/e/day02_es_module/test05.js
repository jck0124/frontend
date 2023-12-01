// nodejs는 dom처리, fetch처리 안되고
//  => fs 처리
// json 데이터를 읽어 올때도 require할 수 있다.
// json 데이터는 js가 아니고
// 모든 언어에서 사용 가능한 데이터 형식

const datas = require("./datas/user.json");
// node가 알아서 js가 사용할 수 있는 데이터로 형변환 해서 읽어 온다.
// .json 확장자 생략 가능
// 확장자를 생략하면 .js > .mjs 순차적으로 찾는다.
// user.js 있다면 user.json 을 실행하지 못한다. // 오류
// 데이터를 사용할 때는 확장자를 생략하지 않는다.

console.log(datas);
console.log(datas.firstname);

const makeup = require("./datas/makeup.json");
console.log(typeof makeup);
console.log(makeup.length);

makeup.forEach((item) => console.log(item.product_type));
// 조작이 가능하다.
// fs
