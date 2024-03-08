import Swal, { SweetAlertIcon } from 'sweetalert2'; 

export const showAlert=(message:string,type:SweetAlertIcon)=>{

    Swal.fire({
        title:message,
        icon:type,
        confirmButtonText:'Ok',
    })

}