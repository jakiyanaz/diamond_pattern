//printing diamond pattern in browser console
let n = 5;
let string = "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


//printing diamond pattern in index.html body
let rows = 5;
let printstuf = "";
let num=1;
for(i=1; i<=rows; i++){
    for(s=1; s<=rows-i; s++){
        printstuf += "&nbsp;"+"&nbsp;"+"&nbsp;";
    }
    document.write(printstuf);
    printstuf="";

    for(m=1; m<=num; m++){
        printstuf += "*"+"&nbsp;";
        // num += 2;
    }
    document.write(printstuf);
    num += 2;
    printstuf="";
    document.write("<br>");
}

for(i=1; i<rows; i++){
    for(s=1; s<=i; s++){
        printstuf += "&nbsp;"+"&nbsp;"+"&nbsp;";
    }
    document.write(printstuf);
    printstuf="";

    for(j=1; j<=num-4; j++){
        printstuf += "*"+"&nbsp;";
    }
    document.write(printstuf);
    num -= 2;
    printstuf="";
    document.write("<br>");
}