<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Charset</title>
</head>
<body>
    <h2>Charset</h2>
    
    <form action="index.php" method="post">

        <label>Change charset:</label>
        <input type="text" name="input_string" placeholder="Input string">

        <br><br>

        <label>Select charset or several charsets:</label>
        <select name="charsets[]" size="3" multiple>
            <option value="UTF-8">UTF-8</option>
            <option value="ISO-8859-1">ISO-8859-1</option>
            <option value="Windows-1252">Windows-1252</option> 
        </select>
        <input type="submit" name="change_charset" value="Change charset">
        
    </form>

    <form>
        <input type="submit" value="Clear">
    </form>
    
    <br>

    <?php
        if ($_POST) {
            echo '<label>Input string:</label>
            <textarea placeholder="$ and € are a currency">'
            . $_POST["input_string"] .
            '</textarea>
            <br>';

            if ($_POST["charsets"]) {
                foreach($_POST["charsets"] as $charset) {

                    if ($charset == "UTF-8") {
                        echo '<label>UTF-8:</label>
                        <textarea placeholder="$ and € are a currency">'
                        . mb_convert_encoding($_POST["input_string"], "UTF-8") .
                        '</textarea>
                        <br>';

                    }

                    if ($charset == "ISO-8859-1") {
                        echo '<label>ISO-8859-1:</label>
                        <textarea placeholder="$ and EUR are a currency">'
                        . mb_convert_encoding($_POST["input_string"], "ISO-8859-1") .
                        '</textarea>
                        <br>';
                    }

                    if ($charset == "Windows-1252") {
                        echo '<label>Windows-1252:</label>
                        <textarea placeholder="$ and � are a currency">'
                        . mb_convert_encoding($_POST["input_string"], "Windows-1252") .
                        '</textarea>
                        <br>';
                    }

                }
            }
        }
    ?>

</body>
</html>