const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const typedValue = document.getElementById("searchBar").value;
  // const typedValue = $('#searchBar').val();
  this.innerText = "Is searching";
  // $(this).attr('disabled',true);
  (function () {
    let allWords = document.getElementById("sampleText").innerText.split(" ");
    if (allWords.includes(typedValue)) {
      document.getElementById("result").innerText = typedValue;
    }
  })();
  this.innerText = "Search";
  // $(this).removeAttr('disabled');
});

/* function searchValueFromPara(typedValue) {
  let allWords = document.getElementById("sampleText").innerText.split(" ");
  if (allWords.includes(typedValue)) {
    document.getElementById("result").innerText = typedValue;
  }
}
 */

// const btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   const typedValue = document.getElementById("searchBar").value;
//   // const typedValue = $('#searchBar').val();
//   this.innerText = "Is searching";
//   // $(this).attr('disabled',true);
//   (function () {
//     let allWords = document.getElementById("sampleText").innerText.split(" ");
//     if (allWords.includes(typedValue)) {
//       document.getElementById("result").innerText = typedValue;
//     }
//   })();
//   this.innerText = "Search";
//   // $(this).removeAttr('disabled');
// });




/* function searchValueFromPara(typedValue) {
  let allWords = document.getElementById("sampleText").innerText.split(" ");
  if (allWords.includes(typedValue)) {
    document.getElementById("result").innerText = typedValue;
  }
}
 */
