/**********************************************************************************
window.onload = function () {
    aExportFile.onclick = function () {
        exportFile(this);
    }
}

function exportFile(link) {
    let texto = getData();
    if (texto != "") {
        let blob = new Blob([texto], { "type": "text/plain" });
        link.download = "query.sql";
        link.href = URL.createObjectURL(blob);
    }
}


function getData() {
    let querySQL = "";
    for (let index = 0; index < 500_000; index++) {
        querySQL += `insert into xt21.piloto_cic values('99${index}');`+'\r\n';
    }
    return querySQL;
}
**********************************************************************************/
let HEADER = "ID,CIC,LINEA,TIOAUX,PCT,FLAG_RBM,TIP_BENEFICIO,CATEGORIA";
let ROWS = 10;//2_000_000;//6_000_000;
let ROWS_FOR_CIC = 5;
let ZEROS = "00000000";
window.onload = function () {
    aExportFile.onclick = function () {
        exportFile(this);
    }
}

function exportFile(link) {
    let texto = getData();
    if (texto != "") {
        let blob = new Blob([texto], { "type": "text/plain" });
        link.download = "2_000_000.csv";
        link.href = URL.createObjectURL(blob);
    }
}


function getData() {
    let dataLeads = HEADER;
    let size = Math.ceil(ROWS / ROWS_FOR_CIC);
    dataLeads += getDataCerti();
    for (let index = 1; index <= size; index++) {
        dataLeads += `\r\n5244062,${(ZEROS + index).slice((ZEROS + index).length-8,(ZEROS + index).length)},12000,TCRPLL,P85`;
        dataLeads += `\r\n5244061,${(ZEROS + index).slice((ZEROS + index).length-8,(ZEROS + index).length)},12000,AMXPLL,APZ`;
        dataLeads += `\r\n5244060,${(ZEROS + index).slice((ZEROS + index).length-8,(ZEROS + index).length)},12000,AMXGLL,AGA`;
        dataLeads += `\r\n5244061,${(ZEROS + index).slice((ZEROS + index).length-8,(ZEROS + index).length)},12000,AMXPLL,APZ`;
        dataLeads += `\r\n5244060,${(ZEROS + index).slice((ZEROS + index).length-8,(ZEROS + index).length)},12000,AMXGLL,AGA`;
    }
    return dataLeads;
}

/*
2
6
8
*/