<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>排行榜</title>
    <meta name="renderer" content="webkit">

    <script type="text/javascript" src='../static/js/libs/jquery-3.2.1.min.js'></script>
    <script src="../static/js/libs/flexible.js"></script>
    
    <script type="text/javascript" src='../static/js/libs/lodash.js'></script>
    <script type="text/javascript" src='../static/js/http.js'></script>
    <script type="text/javascript" src='../static/js/req.js'></script>
    <script type="text/javascript">
    getRank();
    </script>
    <link rel="stylesheet" type="text/css" href="../static/style/rank.css">
    <link rel="stylesheet" type="text/css" href="../static/style/init.css">
</head>

<body>
    <div class="main">
        <img class="mainimg" src="../static/images/rankbg.png">
        <div class="myimg">
        </div>
        <div class="nickname">
            <span class="nickname-info"></span>
        </div>
        <div class="myrank">
            <span class="myrank-info">我的排名：第</span>
            <span class="place"></span>
            <span class="myrank-info">名</span>
        </div>
        <div class="again">
            <a href="start.jsp">
                <img src="../static/images/aagain.png">
            </a>
        </div>
        <ul class="placeList">
        </ul>
    </div>
    <audio id="bgmusic" autoplay="autoplay">
        <source src="../static/images/music.mp3" type="audio/mp3">
    </audio>
</body>

</html>