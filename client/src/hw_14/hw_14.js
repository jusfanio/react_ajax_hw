import './hw_14.scss';


function display() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://evening-dawn-11092.herokuapp.com/');
    xhr.send();
    xhr.onreadystatechange = () => {
        console.log('REDAY STATE CHANGED', xhr.readyState);
        if (xhr.readyState === 4) {
            console.log('RESPONSE', xhr.response);
        }

        data.forEach((object) => {
            const obj = document.createElement('ul');
            container.appendChild(obj);
            for (let i in object) {
                const objEl = document.createElement('li');
                objEl.textContent = object[i];
                obj.appendChild(objEl);
            }
        })
    };
}

display();

