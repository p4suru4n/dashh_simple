let ip_ccms = [
  2, 200, 211, 11, 12, 14, 15, 19, 20, 21, 22, 24, 25, 29, 31, 32, 39, 40, 41,
  42, 49, 51, 52, 53, 54, 55, 56, 156, 50, 61, 62, 64, 65, 60, 69, 222, 3, 215,
  210, 220, 224, 207, 71, 234, 72, 70, 79, 208, 82, 80, 89, 209, 91, 92, 90, 99,
  101, 100, 102, 104, 105, 106, 107, 108,
];

async function refreshStatus() {
  const res = await fetch("https://wake-cookies-mens-quiz.trycloudflare.com/api/status");
  // const res = await fetch("/api/status");
  const data = await res.json();
  // const now = Date.now();
  // const online = now - data.lastSeen < 5000;
  //console.log(data.dua);
  // devices = data
  animasikan(data);
}

refreshStatus();
setInterval(refreshStatus, 30 * 1000);

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
      { label: "", value: "" },
      { label: "OFF (mnt)", value: "" },
      { label: "ON (mnt)", value: "" },
      { label: "Hour Meter", value: "" },
    ],
    status: "off",
  },
  {
    name: "Tandon-SELATAN",
    data: [
      { label: "Status", value: "" },
      { label: "", value: "" },
      { label: "OFF (mnt)", value: "" },
      { label: "ON (mnt)", value: "" },
      { label: "Hour Meter", value: "" },
    ],
    status: "off",
  },
  {
    name: "ARTESIS",
    data: [
      { label: "Status", value: "" },
      { label: "Level Air", value: "" },
      { label: "OFF (mnt)", value: "" },
      { label: "ON (mnt)", value: "" },
      { label: "Hour Meter", value: "" },
    ],
    status: "off",
  },
];

const deviceGrid = document.getElementById("deviceGrid");

devices.forEach(device => {
  const div = document.createElement("div");
  div.className = "device";

  let dataHTML = "";
  device.data.forEach(d => {
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
  let ok = document.getElementsByClassName('isi')
  ok[0].textContent = data.satu[0].data[0].value + " Jt"
  ok[1].textContent = data.satu[0].data[1].value

  ok[5].textContent = data.satu[1].data[0].value + " Jt"
  ok[6].textContent = data.satu[1].data[1].value

  ok[10].textContent = data.satu[2].data[0].value + " Jt"
  ok[11].textContent = data.satu[2].data[1].value

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

  ok = document.getElementsByClassName('bt')
  ok[3].className = 'bt ' + data.satu[3].status
  ok[3].textContent = data.satu[3].status.toUpperCase()
  ok[4].className = 'bt ' + data.satu[4].status
  ok[4].textContent = data.satu[4].status.toUpperCase()
  ok[5].className = 'bt ' + data.satu[5].status
  ok[5].textContent = data.satu[5].status.toUpperCase()

  let iki = JSON.parse(data.dua)
  //let iki = data.dua
  const aktifSet = new Set(iki);
  ok = document.getElementsByClassName('ping')

  for (let i = 0; i < ip_ccms.length; i++) {
    const ip = ip_ccms[i];

    ok[i].className =
      'ping ' + (aktifSet.has(ip) ? 'online' : 'offline');
  }

}
