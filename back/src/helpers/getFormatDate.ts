export const getFormatedDate=(date:string)=>{
    
    const fechaInicial = new Date(date);
    
    const año = fechaInicial.getFullYear();
    const mes = ('0' + (fechaInicial.getMonth() + 1)).slice(-2); // Agregar un 0 al mes si es necesario
    const día = ('0' + fechaInicial.getDate()).slice(-2); // Agregar un 0 al día si es necesario

    
    const formatoDeseado = año + "-" + mes + "-" + día;

    return formatoDeseado

}