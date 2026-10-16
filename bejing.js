let ip_ccms = [
  2, 200, 211, 11, 12, 14, 15, 19, 20, 21, 22, 24, 25, 29, 31, 32, 39, 40, 41,
  42, 49, 51, 52, 53, 54, 55, 56, 156, 50, 61, 62, 64, 65, 60, 69, 222, 3, 210,
  194, 220, 224, 207, 71, 217, 72, 70, 79, 208, 82, 80, 89, 193, 91, 92, 90, 99,
  101, 100, 102, 104, 105, 106, 107, 108,
];

// Ambil data JSON
async function refreshStatus() {
  const res = await fetch(
    "https://reproduced-clean-benefits-descending.trycloudflare.com/api/status",
    // "/api/status",
  );
  // const res = await fetch("/api/status");
  const data = await res.json();
  animasikan(data);
}

// Refresh Halaman Setiap 1 menit
refreshStatus();
setInterval(refreshStatus, 60 * 1000);

function animasikan(data) {
  let ok = document.getElementsByClassName("isi1");
  //
  ok[30].textContent = data.tiga[5].data[0].value;
  ok[31].textContent = data.tiga[5].data[1].value;
  ok[32].textContent = data.tiga[5].data[2].value;
  ok[33].textContent = data.tiga[5].data[3].value;
  ok[34].textContent = data.tiga[5].data[4].value;
  ok[35].textContent = data.tiga[5].data[5].value;
}

// Tampilan IP

// Tampilan B-Plant
const devices1 = [
  {
    name: "B-PLANT JL1",
    data: [
      { label: "EMG", value: "" },
      { label: "MIX", value: "" },
      { label: "BUCK", value: "" },
      { label: "MAT", value: "" },
      { label: "SILO", value: "" },
      { label: "PROX", value: "" },
    ],
    status: "off",
  },
  {
    name: "B-PLANT JL2",
    data: [
      { label: "EMG", value: "" },
      { label: "MIX", value: "" },
      { label: "BUCK", value: "" },
      { label: "MAT", value: "" },
      { label: "SILO", value: "" },
      { label: "PROX", value: "" },
    ],
    status: "off",
  },
  {
    name: "B-PLANT JL3",
    data: [
      { label: "EMG", value: "" },
      { label: "MIX", value: "" },
      { label: "BUCK", value: "" },
      { label: "MAT", value: "" },
      { label: "SILO", value: "" },
      { label: "PROX", value: "" },
    ],
    status: "off",
  },
  {
    name: "B-PLANT JL4",
    data: [
      { label: "EMG", value: "" },
      { label: "MIX", value: "" },
      { label: "BUCK", value: "" },
      { label: "MAT", value: "" },
      { label: "SILO", value: "" },
      { label: "PROX", value: "" },
    ],
    status: "off",
  },
  {
    name: "B-PLANT JL5",
    data: [
      { label: "EMG", value: "" },
      { label: "MIX", value: "" },
      { label: "BUCK", value: "" },
      { label: "MAT", value: "" },
      { label: "SILO", value: "" },
      { label: "PROX", value: "" },
    ],
    status: "off",
  },
  {
    name: "B-PLANT JL6",
    data: [
      { label: "EMG", value: "" },
      { label: "MIX", value: "" },
      { label: "BUCK", value: "" },
      { label: "MAT", value: "" },
      { label: "SILO", value: "" },
      { label: "PROX", value: "" },
    ],
    status: "off",
  },
];

const deviceGrid1 = document.getElementById("deviceGrid1");

devices1.forEach((device1) => {
  const div = document.createElement("div");
  div.className = "device";

  let dataHTML = "";
  device1.data.forEach((d) => {
    dataHTML += `<div class="row1">${d.label}: <b class="isi1">${d.value}</b></div>`;
  });

  div.innerHTML = `
    <h3>${device1.name}</h3>
    ${dataHTML}
    <span class="bt ${device1.status}">
      ${device1.status.toUpperCase()}
    </span>
  `;

  deviceGrid1.appendChild(div);
});
