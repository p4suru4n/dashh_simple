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

/* ===== 6 DEVICE ON/OFF ===== */
const devices = [
  {
    name: "Dist-UTARA",
    data: [
      { label: "Biaya", value: "" },
      { label: "kvar", value: "" },
      { label: "", value: "" },
      { label: "", value: "" },
      { label: "", value: "" },
    ],
    status: "on",
  },
  {
    name: "Dist-SELATAN",
    data: [
      { label: "Biaya", value: "" },
      { label: "kvar", value: "" },
      { label: "", value: "" },
      { label: "", value: "" },
      { label: "", value: "" },
    ],
    status: "on",
  },
  {
    name: "Dist-JL10",
    data: [
      { label: "Biaya", value: "" },
      { label: "kvar", value: "" },
      { label: "", value: "" },
      { label: "", value: "" },
      { label: "", value: "" },
    ],
    status: "on",
  },
  {
    name: "Tandon-UTARA",
    data: [
      { label: "Status", value: "" },
      { label: "Level Air", value: "" },
      { label: "Mati", value: "" },
      { label: "Hidup", value: "" },
      { label: "Hour Meter", value: "" },
    ],
    status: "off",
  },
  {
    name: "Tandon-SELATAN",
    data: [
      { label: "Status", value: "" },
      { label: "Level Air", value: "" },
      { label: "Mati", value: "" },
      { label: "Hidup", value: "" },
      { label: "Hour Meter", value: "" },
    ],
    status: "off",
  },
  {
    name: "ARTESIS",
    data: [
      { label: "Status", value: "" },
      { label: "Level Air", value: "" },
      { label: "Mati", value: "" },
      { label: "Hidup", value: "" },
      { label: "Hour Meter", value: "" },
    ],
    status: "off",
  },
];

const deviceGrid = document.getElementById("deviceGrid");

devices.forEach((device) => {
  const div = document.createElement("div");
  div.className = "device";

  let dataHTML = "";
  device.data.forEach((d) => {
    dataHTML += `<div class="row">${d.label}: <b class="isi">${d.value}</b></div>`;
  });

  div.innerHTML = `
    <h3>${device.name}</h3>
    ${dataHTML}
    <span class="bt ${device.status}">
      ${device.status.toUpperCase()}
    </span>
  `;

  deviceGrid.appendChild(div);
});

function animasikan(data) {
  let ok = document.getElementsByClassName("isi");
  // LISTRIK
  ok[0].textContent = data.satu[0].data[0].value + " Jt";
  ok[1].textContent = data.satu[0].data[1].value;

  ok[5].textContent = data.satu[1].data[0].value + " Jt";
  ok[6].textContent = data.satu[1].data[1].value;

  ok[10].textContent = data.satu[2].data[0].value + " Jt";
  ok[11].textContent = data.satu[2].data[1].value;

  // TANDON
  ok[15].textContent = data.satu[3].data[0].value;
  ok[17].textContent = data.satu[3].data[2].value;
  ok[18].textContent = data.satu[3].data[3].value;
  ok[19].textContent = data.satu[3].data[4].value;
  ok[20].textContent = data.satu[4].data[0].value;
  ok[22].textContent = data.satu[4].data[2].value;
  ok[23].textContent = data.satu[4].data[3].value;
  ok[24].textContent = data.satu[4].data[4].value;
  ok[25].textContent = data.satu[5].data[0].value;
  ok[26].textContent = data.satu[5].data[1].value;
  ok[27].textContent = data.satu[5].data[2].value;
  ok[28].textContent = data.satu[5].data[3].value;
  ok[29].textContent = data.satu[5].data[4].value;

  ok = document.getElementsByClassName("bt");
  ok[3].className = "bt " + data.satu[3].status;
  ok[3].textContent = data.satu[3].status.toUpperCase();
  ok[4].className = "bt " + data.satu[4].status;
  ok[4].textContent = data.satu[4].status.toUpperCase();
  ok[5].className = "bt " + data.satu[5].status;
  ok[5].textContent = data.satu[5].status.toUpperCase();

  let iki = JSON.parse(data.dua);
  // let iki = data.dua;
  const aktifSet = new Set(iki);
  ok = document.getElementsByClassName("ping");
  for (let i = 0; i < ip_ccms.length; i++) {
    const ip = ip_ccms[i];

    ok[i].className = "ping " + (aktifSet.has(ip) ? "online" : "offline");
  }

  ok = document.getElementsByClassName("isi1");
  //
  ok[30].textContent = data.tiga[5].data[0].value;
  ok[31].textContent = data.tiga[5].data[1].value;
  ok[32].textContent = data.tiga[5].data[2].value;
  ok[33].textContent = data.tiga[5].data[3].value;
  ok[34].textContent = data.tiga[5].data[4].value;
  ok[35].textContent = data.tiga[5].data[5].value;
}
