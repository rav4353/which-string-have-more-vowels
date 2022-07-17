var myName = "raVAnth RAja";
var myName1 = "raVAnth";
var change = myName.toLowerCase();
console.log(change);
var findLength = change.length;
var count = 0;
var change1 = myName1.toLowerCase();
console.log(change1);
var findLength1 = change1.length;
var count1 = 0;

for(i=0;i<findLength; i++) {
    if(change[i] == "a" || change[i] == "e" || change[i] == "i" || change[i] == "o" || change[i] == "u") {
        count++;
    }
}
console.log(count);

for(j=0;j<findLength; j++) {
    if(change1[j] == "a" || change1[j] == "e" || change1[j] == "i" || change1[j] == "o" || change1[j] == "u") {
        count1++;
    }
}
console.log(count1);
if(count > count1){
    console.log(change);
}
else if (count == count1){
    console.log(change);
    console.log(change1);
}
else{
    console.log(change1);
}