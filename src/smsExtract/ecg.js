//regex
//eslint-disable-next-line
const month_pattern =
  /([a-zA-Z]+)-([0-9]+).?BILL/gm || /([a-zA-Z]+-[0-9]+).?BILL/gm;
//eslint-disable-next-line
const year_pattern =
  /([a-zA-Z]+)-([0-9]+).?BILL/gm || /([a-zA-Z]+-[0-9]+).?BILL/gm;
//eslint-disable-next-line
const account_number_pattern = /(ACC).?(#)\:.?([0-9]+\-[0-9]+\-[0-9]+)/gm;
//eslint-disable-next-line
const account_name_and_id_pattern =
  /([A-Z]+ [A-Z]+ ?[A-Z]+ ?[A-Z]+)\-([0-9]+)/gim;
//eslint-disable-next-line
const prev_usage_pattern = /PREV+\:.?([0-9]+)/gm;
//eslint-disable-next-line
const new_usage_pattern = /NEW+\:.?([0-9]+)/gm;
//eslint-disable-next-line
const usage_rate_pattern = /([a-z]+).?([0-9]+.?[0-9]+)/gm;
//eslint-disable-next-line
const usage_qty_pattern = /(USED)\:.?([1-9]+)/gm;
//eslint-disable-next-line
const usage_pattern = /(USED)\:.?([1-9]+).?([a-z]+).?([0-9]+.?[0-9]+)/gm;
//eslint-disable-next-line
const water_charge_pattern = /(WATER).?(AMT)\:.?([0-9]+.?[0-9]+)/gm;
//eslint-disable-next-line
const fire_tax_pattern = /(1%).?([A-Z]+)\:.?([1-9]+).?([0-9]+)/gm;
//eslint-disable-next-line
const rural_tax_pattern = /(2%).?([A-Z]+)\:.?([1-9]+).?([0-9]+)/gm;
//eslint-disable-next-line
const service_charge_pattern = /SERVICE.?CHARGE+\:.?([0-9]+).?([0-9]+)/gm;
//eslint-disable-next-line
const month_total_pattern = /MONTH.?TOT+\:.?([0-9]+).?([0-9]+)/gm;
//eslint-disable-next-line
const prev_balance_pattern = /PREV.?BAL+\:.?([0-9]+).?([0-9]+)/gm;
//eslint-disable-next-line
const balance_due_pattern = /BAL.?DUE+\:.?([0-9]+).?([0-9]+)/gm;
//eslint-disable-next-line
const due_by_pattern = /DUE.?BY\:.?(?<day>([0-9]+)\-([a-zA-Z]+)\-([0-9]+))/gm;
//eslint-disable-next-line
const number_pattern = /\d+.?\d+.?\d+/g;
//eslint-disable-next-line
const billable_period_pattern = /([A-Z]+)-\d+ /g;

export const checkECG = (data) => {

  let billable_period = String(data.match(billable_period_pattern)).trim();
  let digits = data.match(number_pattern);
  let due_by = String(data.match(due_by_pattern)).substring(8) 
  let account_name = String(data.match(account_name_and_id_pattern)).slice(0, -4);
  let usage_qty = String(data.match(usage_qty_pattern)).substring(6)

  console.log({ bill_period: billable_period });
  console.log({ account_number: digits[1] });
  console.log({ account_name: account_name });
  console.log({ account_id: digits[2] });

  console.log({ prev_usage: digits[3] });
  console.log({ new_usage: digits[4] });
  console.log({ usage_qty: usage_qty });
  console.log({ usage_rate: digits[5] });

  console.log({ water_charge: digits[6] });
  console.log({ fire_tax: digits[7] });
  console.log({ rural_tax: digits[8] });

  console.log({ service_charge: digits[9] });
  console.log({ month_total: digits[10] });
  console.log({ prev_balance: digits[11] });
  console.log({ last_paid: digits[12] });
  console.log({ balance_due: digits[13] });
  console.log({ due_by: due_by});
};
