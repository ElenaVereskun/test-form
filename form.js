document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
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

    xhr.open("GET", "/");

    xhr.onload = function (event) {
      if (this.status == 200) {
        alert(jsonString);
      } else {
        alert("Ошибка: " + this.status);
      }
    };

    xhr.send();
  });
});
