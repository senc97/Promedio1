var num=[1, 3, 4, 5, 99, 12, 55]

for(i=0; i<num.length;i++){
    for (j=0; j<num.length-i-1;j++){
        if(num[j]>num[j+1]){
            [num[j], num[j+1]] = [num[j+1], num[j]];
        }
    }
}

console.log(num);