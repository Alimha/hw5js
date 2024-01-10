//задание №1

let users = {
    
}

for(let i = 1; i <= 5; i++) {
    let name = prompt('Введите имя')
    let age = +prompt('Введите возраст')
    users[i] = {
       name: name,
       age: age 
    }
}

for(let key in users) {
    console.log(`Пользователь ${key}`);
    for(let newKey in users[key]) {
        console.log(newKey == 'name' ? `Ваше имя ${users[key][newKey]}` : `Ваш возраст ${users[key][newKey]}`);
    }
}

