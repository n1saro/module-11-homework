const FirstAray = [4,5,2,8,10]

function getAray(FirstAray) {
    for(let i = 0;i < FirstAray.length;i++) {
        let item = FirstAray[i];
        if(item % 2 == 0) {
            console.log(item)
        }
    }
}

getAray()