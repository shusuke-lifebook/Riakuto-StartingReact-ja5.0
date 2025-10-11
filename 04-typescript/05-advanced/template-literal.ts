type DateFormat = `${number}-${number}-${number}`;

const data1: DateFormat = "2023-09-01";
console.log(data1);
// const data2: DateFormat = "Sep. 1, 2022"; //コンパイルエラー

interface MonthMap {
  [key: `month_${number}`]: string;
}

const monthMap: MonthMap = {
  month_01: "January",
  month_02: "Februaly",
};

monthMap.month_03 = "March";
// monthMap.four = "April"; // コンパイルエラー
console.log(monthMap);
