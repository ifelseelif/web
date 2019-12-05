<%--
  Created by IntelliJ IDEA.
  User: karto
  Date: 25.10.2019
  Time: 12:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:useBean id="Results" class="bean.ResultBean" scope="application"/>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Результат</title>
</head>
<body>

<div class="center-box">
    <div>
        <table class="table table-bordered">
            <jsp:getProperty property="holder" name="Results"/>
        </table>
    </div>
    <div>
        <button id="btn" class="btn btn-outline-primary" onclick="goToPage();">Back to main</button>
    </div>
</div>
<script type= "text/javascript">
    function goToPage()
    {
        window.location = '/home';
    }
</script>
</body>
</html>
