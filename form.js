$(document).ready(function () {
  $("btn-primary").click(function () {
    sendAjaxForm("result_form", "ajax_form", "action_ajax_form.json");
    return false;
  });
});

function sendAjaxForm(result_form, ajax_form, url) {
  $.ajax({
    dataType: "json",
    url: url,
    data: $(ajax_form).serialize(),
    success: function (data) {
      $(result_form).html(data);
    },
  });
}
