document.getElementById('kirim').addEventListener('click', (event) =>
{

event.preventDefault();
const nama = document.getElementById('name').value;
const email = document.getElementById('email').value;
const pesan = document.getElementById('pesan').value;

const url = `https://wa.me/6285806528052? text=Nama: ${nama}%0AEmail: ${email}%0APesan: ${pesan}`;
    window.open(url, '_blank');
});
