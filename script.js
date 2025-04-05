document.getElementById('kirim').addEventListener('click', (event) =>
{

event.preventDefault();
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let pesan = document.getElementById('pesan').value;

const url = `https://wa.me/6285806528052?text=Nama: ${nama}%0AEmail: ${email}%0APesan: ${pesan}`;
    window.open(url, '_blank');
});
