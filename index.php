<?php
    if (count($_REQUEST)>0) {
        foreach ($_REQUEST as $key=>$value) {
            if (strlen($value)>0) {
                echo "<div>$key: $value</div>";
            }
        }
    }
?>

<form action="" method="post">
    <input type="text" name="foo">
    <input type="text" name="foo2">
    <input type="text" name="foo3">
    <input type="text" name="foo4">
    <input type="text" name="foo5">
    <input type="submit">
</form>
