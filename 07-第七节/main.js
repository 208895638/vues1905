var a = 10;
var b = 20;
var c = function(){
    alert(b);
}
// $(function(){
//     $("#app").html("模块")
// })
//  export 用于导出变量

// export {
//     a,
//     b,
//     c
// }
// export var d = 10 ;
// export var e = 20 ;
// export var fun = function(){
//     alert(e)
// } ;
export {
    a
}
export {
    b
}
export default {
    a,
    b,
    c
}