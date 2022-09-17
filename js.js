const HEADER = "ID,CIC,LINEA,TIOAUX,PCT,FLAG_RBM,TIP_BENEFICIO,CATEGORIA";
const ROWS_FOR_CIC = 5;
let w;
let textContent;
let intervalID;
let lead;
window.onload = function () {
    btnDownload.onclick = function () {
        try {
            btnDownload.disabled = true;
            startWorker();
            prepareData();

        } catch (e) {
            btnDownload.disabled = false;
            putMessage(e.message, "red");
            stopWorker();
        }
    }
}
function prepareData() {
    let rows = txtNumberOfRows.value;
    lead = {
        header: HEADER,
        rows: rows,
        rowsForCic: ROWS_FOR_CIC
    }
    w.postMessage(lead);
    putMessage("Generating file", "orange");
    intervalID = setInterval(addMessage, 500);
}

function addMessage() {
    spnMessage.innerHTML = String(spnMessage.textContent + ".").bold();
}

function putMessage(message, color) {
    spnMessage.style.color = color;
    spnMessage.innerHTML = message.bold();
}

function startWorker() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            w = new Worker("worker.js");
        }
        w.onmessage = function (e) {
            texto = e.data;
            if (texto != "") {
                downloadFile(texto);
                clearInterval(intervalID);
                putMessage("Finished!", "green");
                stopWorker();
                btnDownload.disabled = false;
            }
        };
        w.onerror = function (e) {
            clearInterval(intervalID);
            putMessage(e.message, "red"); //"Error!, check the console.");
            stopWorker();
            btnDownload.disabled = false;
        };
    } else {
        putMessage("Sorry! No Web Worker support.", "red");
    }
}

function downloadFile(texto) {
    let blob = new Blob([texto], { "type": "text/plain" });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${lead.rows}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function stopWorker() {
    if (w) {
        w.terminate();
        w = undefined;
    }
}