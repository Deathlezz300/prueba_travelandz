export const getDates=(fecha1:string,fecha3:string)=>{

    let fecha = new Date(fecha1);

    fecha.setDate(fecha.getDate()+1)

    let Date2=`${fecha.getFullYear()}-${(fecha.getMonth() + 1).toString().padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')}T${fecha.getHours().toString()
        .padStart(2, '0')}:${fecha.getMinutes().toString().padStart(2, '0')}:00`;


    let fecha2=new Date(fecha3);

    let formattedDate = `${fecha2.getFullYear()}-${(fecha2.getMonth() + 1).toString()
        .padStart(2, '0')}-${fecha2.getDate().toString().padStart(2, '0')}T${fecha2.getHours().toString().padStart(2, '0')}:${fecha2.getMinutes().toString().padStart(2, '0')}:00`;

    return {
        Date2,
        formattedDate
    }

}