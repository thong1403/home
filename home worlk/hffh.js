// Bài 1: Viết một chương trình JavaScript đơn giản để nối tất cả các phần tử của mảng sau thành một chuỗi.
// myColor = ["Red", "Green", "White", "Black"];
// Đầu ra mong đợi :
// "Red, Green, White, Black"
// "Red + Green + White + Black"

// myColor = ["Red", "Green", "White", "Black"];
// let a = [];
// for(let i= 0;i<myColor.length-1;i=i+1){
//     a = a + myColor[i] + ",";
// }console.log(a);
//ex2
// let inTer = prompt("nhập vào số bất kì").split("");
// let inTer1 = inTer.join("-");
// console.log(inTer1);

//ex3



//ex4
// let a = prompt("nhập chuỗi bất kì").split(",");
// let tong = 0;
// for(let i=0;i<=a.length-1;i=i+1){
//     tong = tong + Number(a[i]);
// }console.log(tong);

//ex5
// let a = prompt("nhập vào một chuỗi").split(",");
// let min = a[0];
// for (let i = 0; i <= a.length - 1; i = i + 1) {
//     if (min >= a[i]) {
//         min = a[i];
//     }

// } alert(`so nho nhat la ${min}`)

//ex6

// let a = ["1","5","88","45","2"];
// let name = prompt("nhập một số trong mảng");
// name = a.indexOf(name);
// if(name !== -1){
//     alert("có trong mảng");
// }else{
// alert("không có trong mảng");
// }

//ex8
// let a = prompt("nhập một chuỗi").split(",");
// let b =[];
// for (let i = 0; i <= a.length - 1; i = i + 1) {
//     let c = (`<${a[i]}>`+ ",")
//    b =b+ c;
// }console.log (b);

//ex 9
// let a = prompt('nhập dãy số');
// let b = a.split(',');
// let c = [];
// for (let i = 0; i < b.length; i++) {
//     if (Number(b[i]) % 2 == 1) {
//         c.push(b[i]);
//     }
// }
// console.log(`${b} => ${c}`);

// bài 7
// let a = [5,7,300,90,24,50,75];

// console.log('xin chào đây là kích thước đàn cừu của tôi');
// console.log(a);

// let max_val = Math.max.apply(null, a);
// console.log(`con cừu lớn nhất của tôi có kích thước ${max_val}, hãy cạo nó`);

// a[a.indexOf(max_val)] = 8;
// console.log('sau khi cạo lông đây là đàn cừu của tôi');
// console.log(a);
// let MONTH1 = 0;
// for(let i = 0; i < 3; i++) {
//     MONTH1++
//     for(let i = 0; i <a.length; i++){
//     a[i] = a[i] + 50;
//     }
//     console.log('month'+MONTH1);
//     console.log('sau 1 tháng bầy cừu của tôi đã lớn, đây là kích thước đàn cừu của tôi');
//     console.log(a);
//     let max_val = Math.max.apply(null, a);
//     console.log(`con cừu lớn nhất của tôi có kích thước ${max_val}, hãy cạo nó`);
//     a[a.indexOf(max_val)] = 8;
//     console.log('sau khi cạo lông đây là đàn cừu của tôi');
//     console.log(a);
// }
// let sum = 0;
//  for(let i = 0; i < a.length; i++) {
//      sum += a[i];
//  }
//  console.log(`đàn của tôi có tổng kích thước ${sum}`);
//  let tien = sum * 2;
//  console.log(`tôi sẽ lấy ${sum} x 2$ = ${tien}`);





