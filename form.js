document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form")
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    const jsonString = JSON.stringify(jsonData);

    $(".form")
      .parent()
      .append($("<div>", { text: jsonString }));

    const xhr = new XMLHttpRequest();
    const params = new URLSearchParams(jsonData);

    xhr.open('GET', 'index.html' + '?' + params, true);

    xhr.onload = function () {
      if (this.status == 200) {
        alert(jsonString);
      } else {
        alert("Ошибка: " + this.status);
      }
    };
    xhr.send();
  });
});
