let qrdata = document.getElementById("qr-data");
let qrCode = new QRCode(document.getElementById("qrcode"));
function generateQR() {
    let data = qrdata.value;

    qrCode.makeCode(data);
}

