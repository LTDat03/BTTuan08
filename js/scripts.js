$(document).ready(function () {
  $("#book-btn").click(function () {
    var id = document.getElementById("expamleInputID").value;
    var pass = document.getElementById("expamleInputPass").value;
    var date = document.getElementById("expamleInputDate").value;
    var num = document.querySelectorAll('input[type="checkbox"]:checked');
    var specialist = document.getElementById("expamleInputChuyenKhoan").value;
    if (validId(id) && validPass(pass) && validDate(date)) {
      var newPatient =
        "<tr><td>" +
        1 +
        "</td><td>" +
        id +
        "</td><td>" +
        password +
        "</td><td>" +
        date +
        "</td><td>" +
        numService.length * 500000 +
        "</td><td>" +
        specialist +
        "</td></tr>";
      $(".table > tbody:last").append(newPatient);
      $("#modal").modal("hide");
    }
  });

  $("#modal").on("hidden.bs.modal", function () {
    $(this).find("form").trigger("reset");
  });

  function validId(id) {
    if (/^BN-\d{5}$/.test(id)) {
      return true;
    }
    return false;
  }

  function validPass(pass) {
    if (/^.{6}$/.test(pass)) {
      return true;
    }
    return false;
  }

  function validDate(date) {
    if (date > new Date().toISOString().substring(0, 10)) {
      return true;
    }
    $("#pickDate").focus();
    return false;
  }
});
