let  a = prompt("son kiriting kamida ikki honali")
let result = 0
a = a + ""
 i=0;

 while( i< a.length  )
 {
result=result+ Number(a[i])
i++
}
console.log(result);
document.write(`soningizni yigindisi ${result}`);
