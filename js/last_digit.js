function lastDigit(a, b) {
    let c = Math.pow(a,b);
    let d = c.toString();
    console.log(c)
    console.log(d[d.length -1]);
}

lastDigit((2^200),(2^300))