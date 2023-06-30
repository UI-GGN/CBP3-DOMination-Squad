const arrayToCsv = (headers, data) => {
  const csvRows = [];

  const headerValues = headers.map((header) => header.label);
  csvRows.push(headerValues.join(','));

  for (const row of data) {
    const rowValues = headers.map((header) => {
      const escaped = ('' + row[header.key]).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(rowValues.join(','));
  }
  return csvRows.join('\n');
};

const download = (data, fileName) => {
  const blob = new Blob([data], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('hidden', '');
  a.setAttribute('href', url);
  a.setAttribute('download', fileName + '.csv');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const generateCSV = (header, data, filename) => {
  const csvData = arrayToCsv(header, data);
  download(csvData, filename);
};
