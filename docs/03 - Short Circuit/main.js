// Short Circuit
if(f1() && f2() && f3() && f4()) {
    console.log("Cool!");
}
else {
    console.log("Not so cool...");
}



function f1() {
    console.log("f1");
    return true;
}

function f2() {
    console.log("f2");
    return false;
}

function f3() {
    console.log("f3");
    return true;
}

function f4() {
    console.log("f4");
    return true;
}
