var bus_acq = 0;

function acquire_business() {
  bus_acq += 10;
  if (bus_acq == 100) {
    document.body.innerHTML = "<p style=\"text-align:center;font-size:48px;\">We did it!</p>";
  }
  else {
    document.getElementById("amt_bus").innerHTML = bus_acq;
  }
}
