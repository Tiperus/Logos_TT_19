let MyMath = {};
MyMath.a = 5;
MyMath.b = 2;
MyMath.sum(){ let sum=this.a+this.b; return sum};
MyMath.multiplication(){let multiplication=this.a*this.b; return multiplication};
MyMath.division(){let division=this.a/this.b; return division};
MyMath.subtraction(){let subtraction=this.a-this.b; return subtraction};


console.log(MyMath);

console.log(MyMath.sum());
console.log(MyMath.multiplication());
console.log(MyMath.division());
console.log(MyMath.subtraction());