<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:useBean id="Results" class="bean.ResultBean" scope="application"/>
<html>
<head>
    <%! int b = 1; %>
    <%!
        public int a() {
            b += 1;
            return b;
        } %>
    <meta charset="UTF-8">
    <title>Форма</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="drawer.js" type="text/javascript"></script>
    <script src="validator.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body onload="draw();addListener();">
<header>
    <h1>${a()}</h1>
    <>#{a()}</>
    <h2>Колоколов Артём Михайлович - P3212</h2>
    <h3>Вариант: 212313</h3>
</header>
<div class="container">
    <div class="col">
        <canvas class="border" height="300px" width="300px" id="zoneCanvas"></canvas>

    </div>
    <div class="col">
        <form action="home" method="get" class="flex" onsubmit="submit1();return false;">
            <div class="container ">
                <div class="row mt-3">
                    <h1>X</h1>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="x" id="x(-2)" value="-2">
                        <label class="form-check-label" for="x(-2)">-2</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="x" id="x(-1.5)" value="-1.5">
                        <label class="form-check-label" for="x(-1.5)">-1.5</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="x" id="x(-1)" value="-1">
                        <label class="form-check-label" for="x(-1)">-1</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="x" id="x(-0.5)" value="-0.5">
                        <label class="form-check-label" for="x(-0.5)">-0.5</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="x" id="x(0)" value="0">
                        <label class="form-check-label" for="x(0)">0</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="x" id="x(0.5)" value="0.5">
                        <label class="form-check-label" for="x(0.5)">0.5</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="x" id="x(1)" value="1">
                        <label class="form-check-label" for="x(1)">1</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="x" id="x(1.5)" value="1.5">
                        <label class="form-check-label" for="x(1.5)">1.5</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="x" id="x(2)" value="2">
                        <label class="form-check-label" for="x(2)">2</label>
                    </div>
                </div>
                <div class="row mt-3">
                    <input maxlength="5" id="y" type="text" name="y" placeholder="Y:-3..3">
                </div>
                <div class="row mt-3">
                    <h1>R</h1>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="r" id="r-1" value="1">
                        <label class="form-check-label" for="r-1">1</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="r" id="r-1.5" value="1.5">
                        <label class="form-check-label" for="r-1.5">1.5</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="r" id="r-2" value="2">
                        <label class="form-check-label" for="r-2">2</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="r" id="r-2.5" value="2.5">
                        <label class="form-check-label" for="r-2.5">2.5</label>
                    </div>
                    <div class="form-check form-check-inline col">
                        <input class="form-check-input" type="radio" name="r" id="r-3" value="3">
                        <label class="form-check-label" for="r-3">3</label>
                    </div>
                </div>
                <div class="row mt-3">
                    <input type="submit"/>
                </div>
            </div>
            <div id="error-message"></div>
        </form>
    </div>
</div>
<script>
    function drawPoints() {
        <%=Results.drawPoints()%>
    }
</script>

<div class="center-box">
    <table class="table table-bordered">

        <jsp:getProperty property="holder" name="Results"/>
    </table>
</div>
</body>
</html>
