import { checkAirtelTigo } from "./smsExtract/airteltigo";
import { checkMTN } from "./smsExtract/mtn";
import { checkVodafone } from "./smsExtract/vodafone";
import { checkGWater } from "./smsExtract/gWater";
import { checkECG } from "./smsExtract/ecg.js";
import { checkTwiter } from "./smsExtract/twitterlink.js";
import {
  identifier_vodafone,
  withdarawal_airteltigo,
  customer_airteltigo,
  receipt_airteltigo,
  service_charge_g_water,
  prev_acc_g_water,
  fire_rural_g_water,
  ecg_message,
  twitter_link,
} from "./smsExtract/constants.js";

const checkNetwork = (data) => {
  if (data.startsWith(identifier_vodafone)) {
    return checkVodafone(data);
  }

  if (
    data.startsWith(withdarawal_airteltigo) ||
    data.startsWith(customer_airteltigo) ||
    data.startsWith(receipt_airteltigo)
  ) {
    return checkAirtelTigo(data);
  }

  if (
    data.includes(service_charge_g_water) ||
    data.includes(prev_acc_g_water) ||
    data.includes(fire_rural_g_water)
  ) {
    return checkGWater(data);
  }

  if (data.includes(ecg_message)) {
    return checkECG(data);
  }

  return checkMTN(data);
};

export const extract = (data) => {
  if (data.includes(twitter_link)) {
    return checkTwiter(data);
  }

  return checkNetwork(data);
};
