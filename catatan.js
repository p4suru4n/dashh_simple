const devices = [
  {
    name: "kode fault inventer simoreg",
    data: [
      {
        label: "F001 ",
        value:
          " (Gangguan Suplai): Cek power terminal 5U1/5W1 beserta fuse nya.",
      },
      {
        label: "F004/F005 ",
        value:
          " (Gangguan FieldCard): Cek suplai ke terminal 5U/5W, sekring/GV, atau modul thyristor.",
      },
      {
        label: "F006/F007 ",
        value:
          " (Under/Over Voltage): Cek Tegangan suplai 3Phase pada kontaktor Utama.",
      },
      {
        label: "F040 ",
        value:
          " (Fault Belum di-Reset Sebelum Power Off): Tombol Reset (P) dilayar.",
      },
      {
        label: "F042 ",
        value:
          " (Gangguan Tachometer/Encoder): Cek kabel sambungan Tacho atau encoder.",
      },
      {
        label: " SANGAT DISARANKAN MENGGUNAKAN MULTIMETER YANG BAIK",
        value: "",
      },
    ],
    status: "",
  },
  //   {
  //     name: "Dist-SELATAN",
  //     data: [{ label: "Biaya", value: "" }],
  //     status: "",
  //   },
  //   {
  //     name: "Dist-JL10",
  //     data: [{ label: "Biaya", value: "" }],
  //     status: "",
  //   },
];

const deviceGrid = document.getElementById("deviceGrid");

devices.forEach((device) => {
  const div = document.createElement("div");
  div.className = "device";

  let dataHTML = "";
  device.data.forEach((d) => {
    dataHTML += `<div class="row"><b class="isi">${d.label}</b>: ${d.value}</div>`;
  });

  div.innerHTML = `
    <h3>${device.name.toUpperCase()}</h3>
    ${dataHTML}
    <span class="bt ${device.status}">
      ${device.status.toUpperCase()}
    </span>
  `;

  deviceGrid.appendChild(div);
});
