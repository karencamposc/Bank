function Login(){

   let usuarios = [ {nombre:'karen', contraseña:'hola', balance:'1000'}, {nombre:'karla', contraseña:'holi',balance:'5000'}, {nombre:'katya', contraseña:'hola123',balance:'3000'} ]; 

let usuarioInput=document.getElementById('user').value
let contraseñaInput=document.getElementById('password').value
/*let textoValidado = validarTexto();

if (textoValidado == false){
   return mal ;
}
if (usuario=="karen" && contraseña=="hola"){
   document.write('BIENVENIDA KAREN') */

for(let i = 0; i <= usuarios.length; i++){
   if(usuarios[i].nombre === usuarioInput && usuarios[i].contraseña === contraseñaInput){
      window.location.replace("home.html"); 
} else {
   document.write('USUARIO O CONTRASEÑA ERRONEOS')
}   
   }
}

/*function mensaje(mensaje){
   document.getElementById("error").innerText = "error"
}*/

function salir(){
   window.location.replace("index.html"); 
}

function depositar(monto){
   let monto = document.getElementById('montoInput')
   if (usuarioLogueado.saldo + monto > 9990){
      //mensaje("error")
   } else {
      saldo += monto
      //mensaje("todo ok")
   }
}

function retirar(monto){
   if (usuarioLogueado.saldo - monto < 99){
      //mensaje("error")
   } else {
      saldo -= monto
      //mensaje("ok")
   }
}

const usuarioLogueado = {}
   let array2 = [ {"nombre":'karen', "contraseña":'hola', "saldo":1000}, {"nombre":'karla', "contraseña":'holi',"saldo":5000}, {"nombre":'katya', "contraseña":'hola123',"saldo":3000} ]; 

function obtenerUsuario(){
   usuarioLogueado = array2.find()
}
/* function validarTexto(usuario, contraseña){
   let cadena= getElementById
   var patron = 0  (de firefoz)

 if (patron.test(cadena) == false){
      return true;
   } else {
      return false;
   }
} */
