function submit() {
    let total = 0;
    let caja = Number(document.getElementById("caja").value);
    let remesas_enviadas = Number(document.getElementById("remesas_enviadas").value);
    let pago_remesas = Number(document.getElementById("pago_remesas").value);
    let recargas = Number(document.getElementById("recargas").value);
    let compra_divisas = Number(document.getElementById("compra_divisas").value);
    let venta_divisas = Number(document.getElementById("venta_divisas").value);
    let otros_gastos = Number(document.getElementById("otros_gastos").value);
    document.getElementById("total_sistema").value = caja + remesas_enviadas - pago_remesas + recargas - compra_divisas + venta_divisas - otros_gastos;


    let veinte_mil = Number(document.getElementById("veinte_mil").value) * 20000;
    let diez_mil = Number(document.getElementById("diez_mil").value) * 10000;
    let cinco_mil = Number(document.getElementById("cinco_mil").value) * 5000;
    let dos_mil = Number(document.getElementById("dos_mil").value) * 2000;
    let mil = Number(document.getElementById("mil").value) * 1000;
    let quinientos = Number(document.getElementById("quinientos").value) * 500;
    let cien = Number(document.getElementById("cien").value) * 100;
    let cincuenta = Number(document.getElementById("cincuenta").value) * 50;
    let diez = Number(document.getElementById("diez").value) * 10;
    total = veinte_mil + diez_mil + cinco_mil + dos_mil + mil + quinientos + cien + cincuenta + diez;

    document.getElementById("total_efectivo").value = total;

    let diferencia = Number(document.getElementById("total_efectivo").value)-Number(document.getElementById("total_sistema").value)

    alert("la diferencia es de "+diferencia)
}
