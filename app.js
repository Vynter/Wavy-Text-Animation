let text = document.querySelector(".txt");
var text2 = document.querySelector(".txt2");
const fulltext = text.textContent;
const tabTxt = fulltext.split("");
const fulltext2 = text2.textContent;
const tabTxt2 = fulltext2.split("");
text.textContent = "";
text2.textContent = "";

for (let i = 0; i < tabTxt.length; i++) {
  text.innerHTML += `<span style="--i:${i + 1}">` + tabTxt[i] + "</span>";
  text2.innerHTML += `<span style="--i:${i + 1}">` + tabTxt2[i] + "</span>";
}
console.log(text);
// const text = document.querySelector(".txt");
// const strText = text.textContent;
// const splitText = strText.split("");
// console.log(splitText);
// text.textContent = "";/*on vide le contenu de fancy */
// for (let i = 0; i < splitText.length; i++) {
//     text.innerHTML += "<span>" + splitText[i] + "</span>";

// }

var text2 = document.querySelector("::after");
console.log(text2);
