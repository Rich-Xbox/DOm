// let info = prompt("Hohlagan narsangizni yozing va biz teskari qilib beramiz")

// console.log(info.reverse(""))



// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // Foydalanuvchi kiritgan so‘zni teskari qilish
// const input = prompt("Matn kiriting:");
// if (input) {
//     console.log("Teskari matn: " + reverseString(input));
// }
// document.addEventListener("DOMContentLoaded", function () {
//     let firstName = prompt("Ismingizni kiriting:");
//     let lastName = prompt("Familyangizni kiriting:");
//     let age = prompt("Yoshingizni kiriting:");
//     let caseChoice = prompt("Kiritilgan ma'lumotlar qanday bo'lsin?\n1) KATTA\n2) kichik");

//     if (caseChoice === "1") {
//         firstName = firstName.toUpperCase();
//         lastName = lastName.toUpperCase();
//     } else {
//         firstName = firstName.toLowerCase();
//         lastName = lastName.toLowerCase();
//     }

//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//     document.body.style.fontSize = "20px";
//     document.body.style.textAlign = "center";
//     document.body.style.marginTop = "100px";

//     document.body.innerHTML = `
//         <p>1. Ismingiz: ${firstName}</p>
//         <p>2. Familyangiz: ${lastName}</p>
//         <p>3. Yoshingiz: ${age}</p>
//     `;
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let firstName = prompt("Ismingizni kiriting:");
//     let lastName = prompt("Familyangizni kiriting:");
//     let age = prompt("Yoshingizni kiriting:");
//     let caseChoice = prompt("Kiritilgan ma'lumotlar qanday bo'lsin?\n1) KATTA\n2) kichik");

//     if (caseChoice === "1") {
//         firstName = firstName.toUpperCase();
//         lastName = lastName.toUpperCase();
//     } else {
//         firstName = firstName.toLowerCase();
//         lastName = lastName.toLowerCase();
//     }

//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//     document.body.style.fontSize = "14px";
//     document.body.style.position = "absolute";
//     document.body.style.top = "10px";
//     document.body.style.left = "10px";
//     document.body.style.textAlign = "left";

//     document.body.innerHTML = `
//         <p>1. Ismingiz: ${firstName}</p>
//         <p>2. Familyangiz: ${lastName}</p>
//         <p>3. Yoshingiz: ${age}</p>
//     `;
// });

document.addEventListener("DOMContentLoaded", function () {
    let firstName = prompt("Ismingizni kiriting:");
    let lastName = prompt("Familyangizni kiriting:");
    let age = prompt("Yoshingizni kiriting:");
    let caseChoice = prompt("Kiritilgan ma'lumotlar qanday bo'lsin?\n1) KATTA\n2) kichik");

    if (caseChoice === "1") {
        firstName = firstName.toUpperCase();
        lastName = lastName.toUpperCase();
    } else {
        firstName = firstName.toLowerCase();
        lastName = lastName.toLowerCase();
    }

    // document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.fontSize = "14px";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "flex-start";
    document.body.style.alignItems = "flex-start";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";
    
    let container = document.createElement("div");
    container.style.backgroundColor = "#222";
    container.style.padding = "15px";
    container.style.borderRadius = "15px";
    container.style.margin = "10px";
    container.style.color = "white";
    container.style.fontSize = "14px";

    container.innerHTML = `
        <p>1. Ismingiz: ${firstName}</p>
        <p>2. Familyangiz: ${lastName}</p>
        <p>3. Yoshingiz: ${age}</p>
    `;
    
    document.body.appendChild(container);
});