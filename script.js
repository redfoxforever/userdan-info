// USERDAN INFO YIG'ISH ---->

let i = 3

let userName = ""

const job = {    
}

for (let x = 1; x <= i; x++) {
    userName = prompt("Ismingini yozing", "Name")
    while (!isNaN(userName)) {
        userName = prompt("Ismingini yozing", "Name")
    }

    console.log(`Foydalanuvchi ${x}`);
    console.log(`Ismi ${userName}`);

    userAge = +prompt("Yoshingizni kiriting", "17")
    while (isNaN(userAge)) {
        userAge = +prompt("Yoshingizni kiriting", "17")
    }
    
    console.log(`Yoshi ${userAge}`);

    job[x] = {
        name: userName,
        age: userAge
    }    
}

console.log(job);