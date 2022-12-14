//postMessage("I\'m working before postMessage(\'ali\').");
let ZEROS = "00000000";
onmessage = function (e) {
  postMessage(getData(e.data));
};

function getData(lead) {
  let dataLeads = lead.header;
  let size = Math.ceil(lead.rows / lead.rowsForCic);
  dataLeads += getDataCerti();
  for (let index = 1; index <= size; index++) {
    dataLeads += `\r\n5244062,${(ZEROS + index).slice((ZEROS + index).length - 8, (ZEROS + index).length)},12000,TCRPLL,P85,1,GRUP20,0`;
    dataLeads += `\r\n5244061,${(ZEROS + index).slice((ZEROS + index).length - 8, (ZEROS + index).length)},12000,AMXPLL,APZ,1,GRUP20,0`;
    dataLeads += `\r\n5244060,${(ZEROS + index).slice((ZEROS + index).length - 8, (ZEROS + index).length)},12000,AMXGLL,AGA,1,GRUP20,0`;
    dataLeads += `\r\n5244061,${(ZEROS + index).slice((ZEROS + index).length - 8, (ZEROS + index).length)},12000,AMXPLL,APZ,1,GRUP20,0`;
    dataLeads += `\r\n5244060,${(ZEROS + index).slice((ZEROS + index).length - 8, (ZEROS + index).length)},12000,AMXGLL,AGA,1,GRUP20,0`;
  }
  return dataLeads;
}

function getDataCerti() {
  let dataCerti = "";
  //  dataLeads += `\r\n3104460,10983073,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104460,10983073,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,10983073,95000,AMXPLL,APA,1,GRUP20,0`;
  dataCerti += `\r\n3104464,10983073,95000,AMXGLL,AGU,1,GRUP20,0`;
  dataCerti += `\r\n3104465,10983073,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,10983073,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,10983073,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,10983073,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10983073,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11157449,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11157449,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11157449,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11157449,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11157449,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11157449,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11157449,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157449,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157449,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157449,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157449,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11157450,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11157450,95000,AMXPLL,APA,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11157450,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11157450,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11157450,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11157450,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11157450,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157450,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157450,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157450,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11157452,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11157452,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11157452,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11157452,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11157452,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11157452,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11157452,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157452,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157452,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157452,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157452,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11157453,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11157453,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11157453,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11157453,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11157453,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11157453,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11157453,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157453,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157453,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157453,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11157453,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11170544,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104460,01057182,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,01057182,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,01057182,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,01057182,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,01057182,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,01057182,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,01057182,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,01057182,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11039802,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11039802,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11039802,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11039802,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11039802,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11039802,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11039802,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039802,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039802,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039802,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039802,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,00445639,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,00445639,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,00445639,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,00445639,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,00445639,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,00445639,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,00445639,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,00445639,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11005588,97215,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11005588,97215,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11005588,97215,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11005588,97215,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11005588,97215,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11005588,97215,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11005588,97215,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11005588,97215,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11005588,97215,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11005588,97215,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11005588,97215,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10994166,97215,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10994166,97215,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10994166,97215,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10994166,97215,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10994166,97215,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10994166,97215,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10994166,97215,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10994166,97215,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10994166,97215,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10994166,97215,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10994166,97215,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11023456,97215,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11023456,97215,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11023456,97215,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11023456,97215,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11023456,97215,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11023456,97215,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11023456,97215,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11023456,97215,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11037287,97215,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11037287,97215,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11037287,97215,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11037287,97215,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11037287,97215,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11037287,97215,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104460,10257271,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,10257271,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,10257271,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,10257271,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,10257271,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,10257271,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,10257271,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10257271,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10257271,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10257271,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10257271,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11039493,4500,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11039493,4500,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11039493,4500,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11039493,4500,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11039493,4500,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11039493,4500,TCRCLL,M68,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11039493,4500,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039493,4500,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039493,4500,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039493,4500,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039493,4500,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039499,19855,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039499,19855,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039499,19855,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039499,19855,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039499,19855,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039499,19855,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039499,19855,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039499,19855,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104470,11170544,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104471,11170544,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104472,11170544,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104473,11170544,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104474,11170544,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104475,11170544,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104476,11170544,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104477,11039496,7500,TCRMIN,LPW,1,GRUP20,0`;
  dataCerti += `\r\n3104470,11039496,7500,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104471,11039496,7500,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104471,11039496,7500,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104460,10256990,39500,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,10256990,39500,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,10256990,39500,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,10256990,39500,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,10256990,39500,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,10256990,39500,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,10256990,39500,TCRCLB,M68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10256990,39500,TCRMIN,LPW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10256990,39500,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10256990,39500,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,10256990,39500,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104471,06822191,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104472,06822191,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104473,06822191,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104474,06822191,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104475,06822191,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104476,06822191,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104471,04098692,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104472,04098692,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104473,04098692,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104474,04098692,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104475,04098692,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104476,04098692,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104471,02519150,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104472,02519150,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104473,02519150,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104474,02519150,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104475,02519150,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104476,02519150,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104471,10983572,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104472,10983572,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104473,10983572,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104474,10983572,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104475,10983572,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104476,10983572,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104471,04843837,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104472,04843837,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104473,04843837,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104474,04843837,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104475,04843837,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104476,04843837,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104471,06857825,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104472,06857825,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104473,06857825,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104474,06857825,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104475,06857825,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104476,06857825,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104471,10250500,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104472,10250500,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104473,10250500,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104474,10250500,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104475,10250500,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104476,10250500,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104471,06847097,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104472,06847097,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104473,06847097,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104474,06847097,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104475,06847097,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104476,06847097,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104477,06847097,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11039500,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11039500,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11039500,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11039500,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11039500,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11039500,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11039500,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039500,95000,TCRMIN,LQW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039500,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039500,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039500,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11039501,8500,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11039501,8500,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11039501,8500,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11039501,8500,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11039501,8500,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11039501,8500,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11039501,8500,TCRCLB,M69,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039501,8500,TCRMIN,LQW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039501,8500,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039501,8500,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039501,8500,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11039503,8500,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11039503,8500,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11039503,8500,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11039503,8500,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11039503,8500,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11039503,8500,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11039503,8500,TCRCLB,M69,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039503,8500,TCRMIN,LQW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039503,8500,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039503,8500,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039503,8500,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,00013050,56000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,00013050,56000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,00013050,56000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,00013050,56000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,00013050,56000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,00013050,56000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,00013050,56000,TCRCLB,M69,1,GRUP20,0`;
  dataCerti += `\r\n3104469,00013050,56000,TCRMIN,LQW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,00013050,56000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,00013050,56000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039502,2800,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11039502,2800,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11039502,2800,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11039502,2800,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11039502,2800,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11039502,2800,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11039502,2800,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11039502,2800,TCRCLB,M69,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039502,2800,TCRMIN,LQW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039502,2800,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039502,2800,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11039502,2800,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051636,9200,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11051636,9200,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11051636,9200,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11051636,9200,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11051636,9200,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11051636,9200,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11051636,9200,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11051636,9200,TCRCLB,M69,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051636,9200,TCRMIN,LQW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051636,9200,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051636,9200,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051636,9200,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051637,4550,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11051637,4550,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11051637,4550,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11051637,4550,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11051637,4550,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11051637,4550,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11051637,4550,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11051637,4550,TCRCLB,M69,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051637,4550,TCRMIN,LQW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051637,4550,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051637,4550,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051637,4550,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051638,2800,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11051638,2800,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11051638,2800,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11051638,2800,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11051638,2800,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11051638,2800,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11051638,2800,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11051638,2800,TCRCLB,M69,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051638,2800,TCRMIN,LQW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051638,2800,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051638,2800,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051638,2800,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051639,4995,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11051639,4995,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11051639,4995,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11051639,4995,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11051639,4995,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11051639,4995,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11051639,4995,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11051639,4995,TCRCLB,M69,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051639,4995,TCRMIN,LQW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051639,4995,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051639,4995,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051639,4995,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051654,5500,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11051654,5500,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11051654,5500,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11051654,5500,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11051654,5500,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11051654,5500,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11051654,5500,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11051654,5500,TCRCLB,M69,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051654,5500,TCRMIN,LQW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051654,5500,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051654,5500,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051654,5500,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051655,6500,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11051655,6500,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11051655,6500,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11051655,6500,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11051655,6500,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11051655,6500,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11051655,6500,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11051655,6500,TCRCLB,M69,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051655,6500,TCRMIN,LQW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051655,6500,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051655,6500,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11051655,6500,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,01631089,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,01631089,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,01631089,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,01631089,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,01631089,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,01631089,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,01631089,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,01631089,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,01631089,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,01631089,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,01631089,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,07003757,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,07003757,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,07003757,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,07003757,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,07003757,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,07003757,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,07003757,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,07003757,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,07003757,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,07003757,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,07003757,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,03255623,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,03255623,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,03255623,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,03255623,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,03255623,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,03255623,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,03255623,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,03255623,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,03255623,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,03255623,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,03255623,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11053070,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11053070,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11053070,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11053070,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11053070,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11053070,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11053070,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11053070,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11053070,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11053070,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11053070,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11097553,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11097553,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11097553,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11097553,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11097553,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11097553,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11097553,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11097553,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11097553,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11097553,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11097553,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347104,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347104,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11347104,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347104,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11347104,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11347104,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11347104,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11347104,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11347104,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11347104,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347104,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347124,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347124,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11347124,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347124,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11347124,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11347124,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11347124,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11347124,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11347124,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11347124,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347124,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347126,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347126,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11347126,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347126,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11347126,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11347126,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11347126,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11347126,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11347126,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11347126,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347126,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347101,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347101,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11347101,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347101,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11347101,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11347101,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11347101,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11347101,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11347101,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11347101,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347101,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347127,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347127,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11347127,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347127,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11347127,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11347127,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11347127,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11347127,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11347127,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11347127,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347127,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347106,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347106,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11347106,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347106,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11347106,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11347106,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11347106,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11347106,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11347106,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11347106,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347106,95000,TCRMIN,LTW,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347100,95000,TCRINF,I27,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347100,95000,TCRPL1,SIE,1,GRUP20,0`;
  dataCerti += `\r\n3104460,11347100,95000,AMXGRE,A96,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347100,95000,TCRPLL,P68,1,GRUP20,0`;
  dataCerti += `\r\n3104462,11347100,95000,AMXPLL,AN3,1,GRUP20,0`;
  dataCerti += `\r\n3104465,11347100,95000,TCRORL,J40,1,GRUP20,0`;
  dataCerti += `\r\n3104464,11347100,95000,AMXGLL,AOW,1,GRUP20,0`;
  dataCerti += `\r\n3104467,11347100,95000,TCRCLL,C65,1,GRUP20,0`;
  dataCerti += `\r\n3104466,11347100,95000,AMXCLL,ACE,1,GRUP20,0`;
  dataCerti += `\r\n3104468,11347100,95000,TCRCLB,M35,1,GRUP20,0`;
  dataCerti += `\r\n3104469,11347100,95000,TCRMIN,LTW,1,GRUP20,0`;
  return dataCerti;
}