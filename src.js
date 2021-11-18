const calcularDepreciacionNIIF=(precioInicial,
    precioFinal,vidaUtil,numeroPeriodoAconsultar)=>{
        if (vidaUtil<=0){
            precioDepreciado=0;
        }
        else if (vidaUtil<numeroPeriodoAconsultar){
            precioDepreciado=precioFinal;
        }
        else{
        let precioAdepreciar=precioInicial-precioFinal;
        let depreciacionAnual=precioAdepreciar/vidaUtil;
        precioDepreciado=precioInicial-(depreciacionAnual*numeroPeriodoAconsultar);}
        console.log(precioDepreciado);
        return precioDepreciado;
    }

calcularDepreciacionNIIF(1200000,200000,10,4);
calcularDepreciacionNIIF(1200000,200000,0,4);
calcularDepreciacionNIIF(1200000,200000,10,40);
