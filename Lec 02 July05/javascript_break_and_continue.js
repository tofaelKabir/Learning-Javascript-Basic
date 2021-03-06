/*
break --> used in Switch/Loops - will stop the execution or transfer the execution outside the loop
Continue --> used in Loops -- it skip that condition and transfers the execution to the next iteration
*/

console.log("\n------------ for loop ------------")
for (var i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("\n------------ Use of Break 01 ------------")
//we can also use loop at the beginning of for loop but generally used when use
// more loop to identify then as loop1, loop2 ....
loop: for (var i = 1; i <= 5; i++) {

    if (i == 4) {
        break loop;
    }
    console.log(i);
}

console.log("\n------------ Use of Break 02 ------------")
for (var i = 1; i <= 5; i++) {
    if (i != 1) { //if value of i  is not equal to 1, it will break
        //no execution through the loop
        break;
    }
    console.log(i);
}

console.log("\n------------ Use of Continue 01 ------------")
for (var i = 1; i <= 5; i++) {
    if (i == 4) {
        continue;
    }
    console.log(i);
}

console.log("\n------------ nested loop 01 ------------")
loop1:for (var i = 1; i <= 5; i++) {
    loop2:for (var j = 1; j <= 3; j++) {
        console.log("i -- > " + i + "  j -- > " + j);
    }
}

console.log("\n------------ nested loop 02 ------------")
loop3:for (var i = 1; i <= 5; i++) {
    loop4:for (var j = 1; j <= 3; j++) {
        //nested loop

        if (j == 2) {
            continue;
        }
        console.log("i -- > " + i + "  j -- > " + j);
    }
}

console.log("\n------------ nested loop 03 ------------")
loop5:for (var i = 1; i <= 5; i++) {
    loop6:for (var j = 1; j <= 3; j++) {
        //nested loop

        if (j == 3) {
            break;
        }
        console.log("i -- > " + i + "  j -- > " + j);
    }
}

//we can also use break and continue for while and do while loop
//#8 nested loop
// Here loop7, loop8 is called javascript label

console.log("\n------------ nested loop 04 with specific break ------------")
loop7: for (var i = 1; i <= 5; i++) {
    if (i == 3) {
        //we can use condition of j and break loop 1 too, we can use continue instead of break
        break loop7; //what will happen if you break loop2?
    }
    loop8: for (var j = 1; j <= 3; j++) {
        //nested loop


        console.log("i -- > " + i + "  j -- > " + j);
    }
}

console.log("\n------------ nested loop 05 with specific break ------------")
loop7: for (var i = 1; i <= 5; i++) {
    loop8: for (var j = 1; j <= 3; j++) {
        //nested loop
        if (i == 3) {
            //we can use condition of j and break loop 1 too, we can use continue instead of break
            break loop7; //what will happen if you break loop8?
        }

        console.log("i -- > " + i + "  j -- > " + j);
    }
}
