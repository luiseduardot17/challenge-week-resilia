import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Faixa etária"],
  ["De 18 a 21 anos", 20],
  ["De 22 a 25 anos", 20],
  ["De 26 a 29 anos", 20],
  ["De 30 a 33 anos", 20],
  ["Acima de 33 anos", 20],
];

export const options = {
  pieHole: 0.4,
  is3D: false,
  pieSliceText: 'none',
  backgroundColor: '#FFDD00',
  legend: {position: 'right', alignment: 'center', textStyle: { color: 'black',
    fontName: "Archivo",
    fontSize: 18,
    bold: true,
    italic: false}},
  slices: {
    0: { color: '#E56E25' },
    1: { color: '#F18A1F' },
    2: { color: '#3BA3D2' },
    3: { color: '#4EB966' },
    4: { color: '#EFB119' },
  }
};

export function Grafico() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
  );
}