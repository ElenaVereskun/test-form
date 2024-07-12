const form = document.getElementById("myForm");

function formDataToObject(formData) {
  const dataValues = (values) => (values.length > 1 ? values : values[0]);
  const formElemKeys = Array.from(formData.keys());

  return Object.fromEntries(
    formElemKeys.map((key) => [key, dataValues(formData.getAll(key))])
  );
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const jsonObject = formDataToObject(formData);
  const jsonString = JSON.stringify(jsonObject);

  $(".form")
    .parent()
    .append($("<div>", { text: jsonString }));

  const xhr = new XMLHttpRequest();
  xhr.method = "GET";
  xhr.onload = function (event) {
    if (this.status == 200) {
      alert(jsonString);
    } else {
      alert("Ошибка: " + this.status);
    }
  };
  xhr.open("GET", "my_data.json");
  xhr.send();
});
