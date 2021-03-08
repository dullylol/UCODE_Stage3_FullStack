  
var varNumber = 100;
var varBigInt = 999999999999999999999999999999999n;
var varString = "String text";
var varBoolean = true;
var varNull = null;
var varUndefined = undefined;
var varObject = { size: 20, color: "red" };
var varSymbol = Symbol("id")

function fun() {}

alert("varNumber is " + typeof(varNumber) + 
    "\nvarBigInt is " + typeof(varBigInt) + 
    "\nvarString is " + typeof(varString) + 
    "\nvarBoolean is " + typeof(varBoolean) + 
    "\nvarNull is " + typeof(varNull) + 
    "\nvarUndefined is " + typeof(varUndefined) + 
    "\nvarObject is " + typeof(varObject) + 
    "\nvarSymbol is " + typeof(varSymbol) + 
    "\nfun is " + typeof(fun));