function n(a) {
    a++;
    if(a === 3){
        return n(a);
    }else {
        return a;
    }
}