//regex
//eslint-disable-next-line
const month_year =
  /([a-zA-Z]+)-([0-9]+).?BILL/gm || /([a-zA-Z]+-[0-9]+).?BILL/gm;
//eslint-disable-next-line
const account_number = /(ACC).?(#)\:.?([0-9]+\-[0-9]+\-[0-9]+)/gm;
//eslint-disable-next-line
const account_name_and_id = /([A-Z]+ [A-Z]+ [A-Z]+)\-([0-9]+)/gim;
//eslint-disable-next-line
const prev_usage = /PREV+\:.?([0-9]+)/gm;
//eslint-disable-next-line
const new_usage = /NEW+\:.?([0-9]+)/gm;
//eslint-disable-next-line
const usage_rate = /([a-z]+).?([0-9]+.?[0-9]+)/gm;
//eslint-disable-next-line
const usage_qty = /(USED)\:.?([1-9]+)/gm;
//eslint-disable-next-line
const usage = /(USED)\:.?([1-9]+).?([a-z]+).?([0-9]+.?[0-9]+)/gm;
//eslint-disable-next-line
const water_charge = /(WATER).?(AMT)\:.?([0-9]+.?[0-9]+)/gm;
//eslint-disable-next-line
const fire_tax = /(1%).?([A-Z]+)\:.?([1-9]+).?([0-9]+)/gm;
//eslint-disable-next-line
const rural_tax = /(2%).?([A-Z]+)\:.?([1-9]+).?([0-9]+)/gm;
//eslint-disable-next-line
const service_charge = /SERVICE.?CHARGE+\:.?([0-9]+).?([0-9]+)/gm;
//eslint-disable-next-line
const month_total = /MONTH.?TOT+\:.?([0-9]+).?([0-9]+)/gm;
//eslint-disable-next-line
const prev_balance = /PREV.?BAL+\:.?([0-9]+).?([0-9]+)/gm;
//eslint-disable-next-line
const balance_due = /BAL.?DUE+\:.?([0-9]+).?([0-9]+)/gm;
//eslint-disable-next-line
const due_by = /DUE.?BY+\:.?([A-Z]+)/gm;

export const checkECG = (data) => {
  console.log(data);
};
