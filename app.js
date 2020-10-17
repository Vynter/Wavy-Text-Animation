var text = document.querySelector(".txt");
const fulltext = text.textContent;
const tabTxt = fulltext.split("");
text.textContent = "";

for (let i = 0; i < tabTxt.length; i++) {
  text.innerHTML += `<span style="--i:${i + 1}">` + tabTxt[i] + "</span>";
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
