var task01 = function (a, b, c) {
    if (a<0,b<0,c<0) {task01=a*b*c} 
    else if (a<0,b<0) {task01=a*b}
    else if (a<0,c<0) {task01=a*c}
    else if (b<0,c<0) {task01=b*c}
    else if (a<0) {task01=a}
    else if (b<0) {task01=b}
    else if (c<0) {task01=c}
    else {task01="undefined"}
    };
    task01(5,1,4);
    console.log(task01);
