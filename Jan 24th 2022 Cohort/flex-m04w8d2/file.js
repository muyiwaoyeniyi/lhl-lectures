// querySelector, querySelectorAll, getElementById, getElementsByClassName

// document.querySelector("button").addEventListener("click", (event) => {
//   console.log("mouse over!");
//   document.getElementById("emailField").value === $("#emailField").html();
// });

// NOTE: this will be blank since the script tag shows up before the field
//console.log(document.getElementById("emailField"));

$(document).ready(() => {
  // this callback runs once the document is "ready"
  console.log("ready");

  // $("#emailField").val("123");
  // console.log($("#emailField").val());

  // --

  // https://makitweb.com/simple-tabbed-content-area-with-html-css-and-jquery/
  // $('.nav-item').click(() => {
  $(".nav-item").on("click", (event) => {
    const idName = event.target.innerText.toLowerCase();
    $(".item-detail").addClass("hide");
    $(`#${idName}`).removeClass("hide"); // idName -> about, payment, other
  });
});
