function figurePayout(affiliate) {
  const owed = affiliate.sales * affiliate.commission
  if (owed > 100) {
    sendPayout(affiliate.bank_code, owed)
  }
}

function affiliatePayout(affiliates) {
  for (let a = 0; a < affiliates.length; a++) {
    figurePayout(affiliates[a])
  }
}

function main(affiliates) {
  affiliatePayout(affiliates)
}
