
// var o = document.getElementsByTagName("b"); 
// // var content = o[0].innerHTML;
// o[0].innerHTML = "hajkdhasd";
// alert(content);

// var x = document.getElementById("p1");
// alert(x.outerHTML);







window.onload = function a(){
    // var y = document.getElementById(btn);
    btn.onclick = function(){
        var x = document.getElementById("p1");
        x.style="color : red;font-size : 1.6rem; padding : 30px";
        console.log(x.innerHTML);
    }
}






// window.onload = function b(){
//     if(btn2.onclick=function(){})
//     { 
//         btn2.onclick = function(){
//             var m = parseInt(document.getElementById("ip1").value);
//             var n =parseInt(document.getElementById("ip2").value);
//             var z = m + n;
//             alert(z);
//         }





function calc(){
    var a = parseInt(document.getElementById("ip1").value);
    var b =parseInt(document.getElementById("ip2").value);
    var c = a+b;
    alert(c);
}
function calt(){
    var a = parseInt(document.getElementById("ip1").value);
    var b =parseInt(document.getElementById("ip2").value);
    var c = a-b;
    alert(c);
}
   

 