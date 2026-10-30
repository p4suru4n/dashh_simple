// Ambil data JSON
async function refreshStatus() {
  const res = await fetch(
    "https://hearts-conferencing-annual-simpson.trycloudflare.com/api/status",
    // "/api/status",
  );
  // const res = await fetch("/api/status");
  const data = await res.json();
  animasikan(data);
}

// Refresh Halaman Setiap 1 menit
refreshStatus();
setInterval(refreshStatus, 60 * 1000);

function detikKeMenit(detik1) {
  let detik = Math.floor(detik1 / 2);
  const jam = Math.floor(detik / 3600);
  const menit = Math.floor(detik / 60);
  const sisaDetik = detik % 60;

  return `${jam} j ${menit} m ${sisaDetik} s`;
}

function animasikan(data) {
  let ok = document.getElementsByClassName("isi1");
  //
  ok[0].textContent = detikKeMenit(data.hourm.hoisb);
  ok[1].textContent = detikKeMenit(data.hourm.travb);
  ok[2].textContent = detikKeMenit(data.hourm.endc);
}

// Tampilan IP

// Tampilan B-Plant
const devices1 = [
  {
    name: "HOIST JL3 TIMUR",
    data: [
      { label: "HOIST", value: "" },
      { label: "TRAVELING", value: "" },
      { label: "ENDCARRIAGE", value: "" },
      { label: "", value: "" },
      { label: "", value: "" },
      { label: "", value: "" },
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
