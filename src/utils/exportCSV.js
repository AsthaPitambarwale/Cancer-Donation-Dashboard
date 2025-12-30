export const exportToCSV = (donations) => {
  const headers = ["Name", "Amount", "Time"];
  const rows = donations.map(d =>
    [d.name, d.amount, d.time].join(",")
  );

  const csv = [headers.join(","), ...rows].join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "donations.csv";
  a.click();

  window.URL.revokeObjectURL(url);
};
