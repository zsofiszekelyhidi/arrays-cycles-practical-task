// print number while it is less than 10
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// print prime numbers
let number = 100;
nextNumber: 
for (let i = 2; i <= number; i++) {
    for (let j = 2; j < i; j++ ) {
        if ( i % j == 0) continue nextNumber;
    }
    console.log(i);
}

// print odd numbers
let num = 100;
for (let i = 1; i <= num; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}