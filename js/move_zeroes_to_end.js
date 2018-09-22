//Write an algorithm that takes an array and moves all of the zeros to the end, 
//preserving the order of the other elements.

function moveZeroes(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 0) {
            list.splice(i, 1);
            list.push(0);
        }
    }

    return list;
}

moveZeroes([false,1,0,null,1,2,0,1,3,"a"]);