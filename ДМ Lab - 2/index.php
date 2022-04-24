<!DOCTYPE html>
<html lang ="en">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа</title>
    <script type="text/javascript" src="/scripts/scripts.js"></script>
</head>
<body>
<h1>Лабораторная работа по ДМ №2</h1>
<form method="" action="">
    <table>
        <tr>
            <td>Введите матрицу:<td><br>
            <td><textarea id="mass" value=""></textarea></td>
            <td>Правила ввода: Матрицу нужно вводить в формате: </td>
            <td>a a a a<br>
                a a a a<br>
                a a a a<br>
                a a a a<br></td>
            <td> После ввода каждой строки, кроме последней, нажимать Enter. Принимаемые значения: 0 и 1.
        </tr>
        <tr>
        <td><input type="button" value="Сделать рассчет" onclick="rasschet();"></td>
        </tr>
    </table>
</form>
<div id = "OutResult"> </div>
</body>
</html>
