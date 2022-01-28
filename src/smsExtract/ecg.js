//regex
//eslint-disable-next-line
const month_year_pattern =
  /([a-zA-Z]+)-([0-9]+).?BILL/gm || /([a-zA-Z]+-[0-9]+).?BILL/gm;
//eslint-disable-next-line
const account_number_pattern = /(ACC).?(#)\:.?([0-9]+\-[0-9]+\-[0-9]+)/gm;
//eslint-disable-next-line
const account_name_and_id_pattern = /([A-Z]+ [A-Z]+ [A-Z]+)\-([0-9]+)/gim;
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
const due_by_pattern = /DUE.?BY+\:.?([A-Z]+)/gm;

export const checkECG = (data) => {
  console.log(data);

  let month = data.match(month_year_pattern);
  let year = data.match(month_year_pattern);
  let account_number = data.match(account_number_pattern);
  let account_name_and_id = data.match(account_name_and_id_pattern);
  let prev_usage = data.match(prev_usage_pattern);
  let new_usage = data.match(new_usage_pattern);
  let usage_rate = data.match(usage_rate_pattern);
  let usage_qty = data.match(usage_qty_pattern);
  let usage = data.match(usage_pattern);
  let water_charge = data.match(water_charge_pattern);
  let fire_tax = data.match(fire_tax_pattern);
  let rural_tax = data.match(rural_tax_pattern);
  let service_charge = data.match(service_charge_pattern);
  let month_total = data.match(month_total_pattern);
  let prev_balance = data.match(prev_balance_pattern);
  let balance_due = data.match(balance_due_pattern);
  let due_by = data.match(due_by_pattern);

  console.log({ month: month });
  console.log({ year: year });
  console.log({ account_number: account_number });
  console.log({ account_name_and_id: account_name_and_id });

  console.log({ prev_usage: prev_usage });
  console.log({ new_usage: new_usage });
  console.log({ usage_rate: usage_rate });
  console.log({ usage_qty: usage_qty });

  console.log({ usage: usage });
  console.log({ water_charge: water_charge });
  console.log({ fire_tax: fire_tax });
  console.log({ rural_tax: rural_tax });

  console.log({ service_charge: service_charge });
  console.log({ month_total: month_total });
  console.log({ prev_balance: prev_balance });
  console.log({ balance_due: balance_due });
  console.log({ due_by: due_by });
};
