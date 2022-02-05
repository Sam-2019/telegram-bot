//eslint-disable-next-line
const numbers_pattern = /:([0-9]+)/gm;
//eslint-disable-next-line
const name_pattern =
  /Customer:([a-zA-Z]+) ([a-zA-Z]+) ([a-zA-Z]+) ([a-zA-Z]+)/gm;

export const checkECG = (data) => {
  let numbers = data.match(numbers_pattern);
  let name = String(data.match(name_pattern)).substring(9);

  // console.log({ meter_number: numbers[0].substring(1) });
  // console.log({ credit: numbers[1].substring(1) });
  // console.log({ name: name });

  return {
    Bill: data,

    name: name ? name : null,
    meter_number: numbers ? numbers[0].substring(1) : null,
    credit: numbers ? numbers[1].substring(1) : null,
  };
};
