function calcEurUsd(){
    let euro = euroField.value;
    let resultEur = euro * 1.094;
    usdField.value = resultEur.toFixed(2).replace(".",",");
}

function calcUsdEur(){
    let usd = usdField.value
    let resultUsd = usd * 0.914;
    euroField.value = resultUsd.toFixed(2).replace(".",",");
}