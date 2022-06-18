document.write("</br>");
document.write("</br>");
document.write("</br>");
document.write("Convert Value");
document.write("</br>");
document.write("</br>");
// document.getElementById("km").value;

function ConvertToMeter() {
  var km = document.getElementById("data").value;
  var x = 1000;
  var meter = km * x;
  document.getElementById("mValue").value = `${meter}`;
  window.setTimeout("location.reload(true);", 10000);
}

function ConvertToKm() {
  var meter = document.getElementById("dataMeter").value;
  var x = 0.001;
  var km = meter * x;
  document.getElementById("kmValue").value = `${km}`;
  window.setTimeout("location.reload(true);", 10000);
}

function ConvertToCm() {
  var meter = document.getElementById("dataMeter1").value;
  var x = 100;
  var cm = meter * x;
  document.getElementById("cmValue").value = `${cm}`;
  window.setTimeout("location.reload(true);", 10000);
}

function ConvertKmToCm() {
  var km = document.getElementById("dataKm").value;
  var x = 100000;
  var cm = km * x;
  document.getElementById("CmValue").value = `${cm}`;
  window.setTimeout(() => {
    location.reload(true);
  }, 10000);
}
