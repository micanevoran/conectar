const btn = document.getElementById('btnSend')

document.getElementById('formEmail')
 .addEventListener('submit', function(event) {
    event.preventDefault()
    btn.value = 'Enviando Mensaje...'
    const serviceID = 'service_2tj88hb'
    const templateID = 'template_dz3ia48'
    const formData = new FormData(this);
    formData.forEach((value, key) => console.log(`${key}: ${value}`));
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar'
        Swal.fire({
          icon: "success",
          title: "Su mensaje se ha enviado con éxito",
          showConfirmButton: false,
          timer: 1500
      })
      }, (err) => {
        btn.value = 'Enviar'
        Swal.fire({
          icon: "error",
          title: "Ups, algo salió mal",
          text: "No ha sido posible enviar su mensaje. Intente nuevamente",
        })
      })
  })

