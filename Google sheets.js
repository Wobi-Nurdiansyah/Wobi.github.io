const scriptURL = 'https://script.google.com/macros/s/AKfycbwc0sSNS3RWFtcDy6k_sSkceNykIKWpoV6ZkM5EEULDJ_ZRaV4VNAtRwe14JqBp2-rH/exec'
const form = document.forms['submit-to-google-sheet']
const btnKirim = document.querySelector('.btn-Kirim')
const btnLoading = document.querySelector('.btn-Loading')
const myAlert = document.querySelector('.my-alert')

form.addEventListener('submit', e => {
  e.preventDefault();
 //tombol di klik 
 //tampilkan  tombol Loding, hilangkan tombol Kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then((response) => {
      //tampilkan tombol Kirim, hilangkan tombol Loding
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // tampilkan alert
      myAlert.classList.toggle('d-none');
      //resset form
      form.reset();
      console.log('Success!', response)
    })
    .catch((error) => console.error('Error!', error.message))
});
