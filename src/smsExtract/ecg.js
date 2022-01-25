const month_year =  /([a-zA-Z]+)-([0-9]+).?BILL/gm  ||   /([a-zA-Z]+-[0-9]+).?BILL/gm  
const account_number = /(ACC).?(#)\:.?([0-9]+\-[0-9]+\-[0-9]+)/gm
const account_name_and_id = /([A-Z]+ [A-Z]+ [A-Z]+)\-([0-9]+)/gmi

const prev_usage = /PREV+\:.?([0-9]+)/gm
const new_usage = /NEW+\:.?([0-9]+)/gm

const usage_rate = /([a-z]+).?([0-9]+.?[0-9]+)/gm
const usage_qty = /(USED)\:.?([1-9]+)/gm
const usage = /(USED)\:.?([1-9]+).?([a-z]+).?([0-9]+.?[0-9]+)/gm
const water_charge = /(WATER).?(AMT)\:.?([0-9]+.?[0-9]+)/gm
const fire_tax = /(1%).?([A-Z]+)\:.?([1-9]+).?([0-9]+)/gm
const rural_tax = /(2%).?([A-Z]+)\:.?([1-9]+).?([0-9]+)/gm

const service_charge = /SERVICE.?CHARGE+\:.?([0-9]+).?([0-9]+)/gm
const month_total = /MONTH.?TOT+\:.?([0-9]+).?([0-9]+)/gm
const prev_balance = /PREV.?BAL+\:.?([0-9]+).?([0-9]+)/gm
const balance_due = /BAL.?DUE+\:.?([0-9]+).?([0-9]+)/gm
const due_by = /DUE.?BY+\:.?([A-Z]+)/gm
