function movePage(n, v){
    if (v) {
        v = "answer";
    }
    else {
        v = "question";
    }
    window.location.href = `./public/${v}/${n}.html`;
}
