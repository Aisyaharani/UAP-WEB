harga = [
  { key: "001", value: 10000 },
  { key: "002", value: 20000 },
  { key: "003", value: 30000 },
];

function calculate() {
  const num1 = parseFloat(document.getElementById("kode").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (num1 == "001") {
    result = 10000 * num2;
  } else if ((num1 = "002")) {
    result = 20000 * num2;
  } else if ((num1 = "003")) {
    result = 30000 * num2;
  }
  // const result = harga.key[num1] + num2;

  alert(`Sum of form inputs: ${result}`);
}
