class cubo{
    //atributos 
    atributos = {
        medidaLados: 0,
        areaTotal: 0,
        areaBase: 0,
        areaLateral: 0
    }

    function Cubo(params) {
        this.areaTotal = calculaAreaTotal();
        this.calculaBase = calculaBaseTotal();
        this.calculaLateral = calculaLateralTotal();
    }
}