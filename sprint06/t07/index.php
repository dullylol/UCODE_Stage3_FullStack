<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Quantum space</title>
</head>
<body>
    <p>

    <?php echo "SCRIPT_FILENAME: " . $_SERVER["SCRIPT_FILENAME"];?> <br>
    <?php echo "argv: " . implode(", ", $_SERVER["argv"]);?> <br>
    <?php echo "SERVER_ADDR: " . $_SERVER["SERVER_ADDR"];?> <br>
    <?php echo "SERVER_NAME: " . $_SERVER["SERVER_NAME"];?> <br>
    <?php echo "SERVER_PROTOCOL: " . $_SERVER["SERVER_PROTOCOL"];?> <br>
    <?php echo "QUERY_STRING: " . $_SERVER["QUERY_STRING"];?> <br>
    <?php echo "HTTP_USER_AGENT: " . $_SERVER["HTTP_USER_AGENT"];?> <br>
    <?php echo "REMOTE_ADDR: " . $_SERVER["REMOTE_ADDR"];?> <br>
    <?php echo "PATH_INFO: " . $_SERVER["PATH_INFO"];?> <br>
    
    </p>
    
    </body>

</html>