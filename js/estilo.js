<form>
<p>Nombre de Usuario</p>
<input id='email'>
<button type='submit' id='validate'>Aceptar</button>
</form>
<h2 id='result'></h2>

<script>
let d = new Date();
document.body.innerHTML = "<h1>Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
"</h1>"
</script>