
<form action="index.php" method="post">
 <p>Votre nom : <input type="text" name="first_name" /></p>
 <input type="submit" value="OK"></p>
 <input type="hidden" name="reset" value="true"/>
 <p><input type="submit" value="Reset"></p>
</form>


<?php
session_start();

if (isset($_POST['reset']) && $_POST['reset'] == 'true') {
    session_unset();  // Remove all session variables
    session_destroy(); // Destroy the session
}
if(isset($_POST['first_name']) && !empty($_POST['first_name'])){
    $name = $_POST['first_name'];
    $_SESSION['first_name'] = $name;
    echo "Bonjour $name";}
        elseif(isset($_GET['first_name']) && !empty($_GET['first_name'])) {
    $name = $_GET['first_name'];
    echo "Bonjour $name";}
            elseif(isset($_SESSION['first_name']) && !empty($_SESSION['first_name'])){
                $name = $_SESSION['first_name'];
                echo"Bonjour $name";}
                    else{echo "Bonjour anonyme";}

?>