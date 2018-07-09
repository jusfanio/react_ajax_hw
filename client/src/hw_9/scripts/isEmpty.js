const user = {
    name: 'Alesia',
    age: '26',
    title: 'Hello'
};


function isEmpty(someObject) {
    let counter = 0;

    for (let key in someObject) {
        counter = counter + 1;
        // console.log('KEY:', key)
        // console.log('VALUE:', user[key])
    }

    // if(counter > 0) {
    //     console.log('Object is not empty');
    // } else {
    //     console.log('Object is empty');
    // }

    return counter === 0;
}

// isEmpty(user);
// isEmpty({title: 'Hello'});
// isEmpty({});

const empty = isEmpty({});
console.log(empty);
// const name = prompt('Enter your name', '');
// console.log('name');

if (empty) {
    console.error('Hey! Object is empty!');
}