import { formatCurrancy } from "../scripts/utils/money.js";

if (formatCurrancy(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}


if(formatCurrancy(0)==='0.00'){
  console.log("passed");
} else {
  console.log("failed");
}

if(formatCurrancy(2000.5)==='20.01'){
  console.log("passed");
} else {
  console.log("failed");
}

if(formatCurrancy(2000.4)==='20.00'){
  console.log("passed");
} else {
  console.log("failed");
}
