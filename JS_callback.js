function callBackFunc(num1,num2,callback){
let sum=num1+num2;
if(callback)callback(sum);
}
callBackFunc(50,35,(result)=>console.log(result))