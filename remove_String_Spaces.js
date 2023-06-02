function noSpace(s){
    let x='';
    for(let i=0;i<s.length;i++){
        if((s[i]>='A'&&s[i]<='Z')||(s[i]>='a'&&s[i]<='z')||(s[i]>='0'&&s[i]<='9')) x+=s[i];

    }
    return x;
}
