/* 
 Created on : 31 mar. 2022, 16:23:50
 Author     : luis.moz
 */
const printLna = (data) => {
    document.getElementById("carnet").classList.add("lna");
    document.getElementById("carnet").classList.remove("lbv");
    document.getElementById("carnet").classList.add("lna");
    document.getElementById("carnet").classList.remove("lbv");
    document.getElementById("carnet").innerHTML = /*html*/ `
        <img src="img/gallinita.jpg?v=1" />
        <div id="text">
            <div>
                <label class="name">${data.name.toUpperCase()}</label><br />
                ${data.charge}<br />
                Tel.: (503) ${data.tell}<br />
                Cel.: +503 ${data.cell}<br />
                Email: <label class="email">${data.email}</label>
            </div>
        </div>
        <img src="img/certificaciones.jpg?v=1" />
    `;
};
const printLbv = (data) => {
    document.getElementById("carnet").classList.add("lbv");
    document.getElementById("carnet").classList.remove("lna");
    document.getElementById("carnet").classList.add("lbv");
    document.getElementById("carnet").classList.remove("lna");
    document.getElementById("carnet").innerHTML = /*html*/ `

    `;
};
const btnContinue = (data) => {
    if (data.enterprise === "1") {
        printLna(data);
    } else {
        printLbv(data);
    }
};
const btnContinueAssign = () => {
    let data = {
        enterprise: document.getElementById("slcEnterprise").value,
        name: document.getElementById("txtName").value,
        charge: document.getElementById("txtCargo").value,
        tell: document.getElementById("txtTel").value,
        cell: document.getElementById("txtCel").value,
        email: document.getElementById("txtMail").value,
    };
    btnContinue(data);
};
const btnDownload = () => {
    html2canvas(document.getElementsByClassName("content")[0], {
        allowTaint: true,
        useCORS: true,
        scale: 1.09,
    }).then(function (canvas) {
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        document.getElementById("previewImg").appendChild(canvas);
    });
};
const init = () => {
    document.getElementsByTagName("html")[0].addEventListener("click", (e) => {
        if (e.target.getAttribute("continue") !== null) {
            document.getElementById("previewImg").innerHTML = "";
            btnContinueAssign();
            btnDownload();
        } 
    }, false);
};
window.onload = () => {
    init();
};
