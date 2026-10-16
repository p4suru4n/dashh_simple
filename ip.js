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
  let iki = JSON.parse(data.dua);
  // let iki = data.dua;
  const aktifSet = new Set(iki);
  let ok = document.getElementsByClassName("ping");
  for (let i = 0; i < ip_ccms.length; i++) {
    const ip = ip_ccms[i];

    ok[i].className = "ping " + (aktifSet.has(ip) ? "online" : "offline");
  }

  //   ok = document.getElementsByClassName("isi1");
  //   //
  //   ok[30].textContent = data.tiga[5].data[0].value;
  //   ok[31].textContent = data.tiga[5].data[1].value;
  //   ok[32].textContent = data.tiga[5].data[2].value;
  //   ok[33].textContent = data.tiga[5].data[3].value;
  //   ok[34].textContent = data.tiga[5].data[4].value;
  //   ok[35].textContent = data.tiga[5].data[5].value;
}

// Tampilan IP
const groups = [
  {
    title: "SERVER JAPANAN",
    items: ["PC SERVER JAPANAN", "OMNI JAPANAN", "CLIENT JAPANAN"],
  },
  {
    title: "JALUR 1",
    items: [
      "PC B-PLANT",
      "PC HOPPER",
      "PC STRESSING",
      "PC SPINNING",
      "HF2211 HOPPER",
    ],
  },
  {
    title: "JALUR 2",
    items: [
      "AP JL2",
      "PC B-PLANT",
      "PC HOPPER",
      "PC STRESSING",
      "PC SPINNING",
      "HF2211 HOPPER",
    ],
  },
  {
    title: "JALUR 3",
    items: ["PC B-PLANT", "PC STRESSING", "HF2211 STRESSING"],
  },
  {
    title: "JALUR 4",
    items: ["AP Jl3-4", "PC B-PLANT", "PC STRESSING", "HF2211 STRESSING"],
  },
  {
    title: "JALUR 5",
    items: [
      "PC B-PLANT",
      "PC HOPPER TIMUR",
      "PC HOPPER BARAT",
      "PC STRESSING",
      "PC SPINNING TIMUR",
      "PC SPINNING BARAT",
      "HF2211 HOPPER",
      "AP JL5",
    ],
  },
  {
    title: "JALUR 6",
    items: [
      "PC B-PLANT",
      "PC HOPPER",
      "PC STRESSING",
      "PC SPINNING",
      "AP JL2",
      "HF2211 HOPPER",
    ],
  },
  {
    title: "SERVER WINONG",
    items: [
      "ACCESSPOINT WINONG",
      "PC SERVER WINONG",
      "Tembak TANDON Jl7",
      "Tembak Jl9",
      "OMNI WINONG",
      "AP Jl7A",
    ],
  },
  {
    title: "JALUR 7",
    items: [
      "CLIENT B-PLANT",
      "PC B-PLANT",
      "CLIENT Jl7A",
      "PC STRESSING",
      "AP Jl7A",
      "HF2211 STRESSING",
    ],
  },
  {
    title: "JALUR 8",
    items: ["CLIENT Jl8", "PC STRESSING", "AP Jl8", "HF2211 STRESSING"],
  },
  {
    title: "JALUR 9",
    items: [
      "CLIENT Jl8",
      "PC B-PLANT",
      "PC STRESSING",
      "AP Jl8",
      "HF2211 STRESSING",
    ],
  },
  {
    title: "JALUR 10",
    items: [
      "PC B-PLANT",
      "AP JL5",
      "PC HOPPER",
      "PC STRESSING",
      "PC SPINNING",
      "HF2211 HOPPER UTARA",
      "HF2211 HOPPER SELATAN",
      "HF2211 STRESSING",
    ],
  },
];

document.getElementById("server-container").innerHTML = groups
  .map(
    ({ title, items }) => `
  <h3 class="jalur">${title}</h3>
  <div class="ip-list">
    ${items.map((name) => `<div class="ping offline">${name}</div>`).join("")}
  </div>
`,
  )
  .join("");
