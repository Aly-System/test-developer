<?php

$alert = '';

session_start();

if(!empty($_session ['activo']))
{

    header('location: sistema/');

}
else{

if(!empty($_post))

{

    if(empty($_post['usuario']) || empty($_post['clave']))
    
    {
 $alert= 'Igrese su usuario y su clave';
} else {

require_once "conexcion.php";

$user = mysqli_real_escape_string ($conection,$_post['usuario']);
$pass = md5(mysqli_real_escape_string ($conection,$_post['clave']));

$query = mysqli_query($conection, "select * from usuario where usuario = '$user' and clave = '$pass'");
$result = mysqli_num_rows($query);

if($result >0)
{
$data = mysqli_fetch_array($query);

$_session['active'] = true;
$_session['idUser'] = $data ['idusuario'];
$_session['nombre'] = $data ['nombre'];
$_session['email'] = $data ['email'];
$_session['user'] = $data ['usuario'];
$_session['rol' ] =$data ['rol'];

 header('location: sistema/');
}

else {

    $alert = 'El usuario o la clave son incorrectos';
    session_destroy();
}

}

}
}
?>
<!doctype html>

<html lang = "en"> 

<head>

    <meta charset = "#uft-8">
    <title> Login / Sistema Facturacion</title>
    <link rel="stylesheet" type ="text/css" href="css/style.css">
    </head>

    <body>
        
    </body>
    <body>

        <section id = "container">
        <form action="" method = "post"> 
        <h3> Inicio de sesion</h3>
        <img src="img/login.png" alt="Login">
        
        <input type="text" name="usuario" placeholder="Usuario">
        <input type="password" name="clave" placeholder= "Contraseña">
        <div class="alert" ><?php echo isset($alert)? $alert: ''; ?></div>
        <input type="submit" value="Ingresar">

        </form>

        </section>

    </body>

</html>