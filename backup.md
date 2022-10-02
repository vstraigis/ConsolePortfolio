<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/main.css">
    <title>V.straigis Terminal</title>
    <link rel="icon" type="image/png" href="/assets/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/assets/favicon-16x16.png" sizes="16x16" />

</head>

<body>
    <div class="container">
        <div class="bar">
            <div class="term">
                <form>
                    <input id="textinput" type="text" autocomplete="off">
                </form>
            </div>
        </div>




</body>

</html>
//----------------------------------

body {
  background-color: #f5a2f5;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;
}

body::before {
  content: "";
  background-image: url(/assets/ImageBackground.jpg);
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  transform: scale(1.1);
  position: fixed;
  z-index: -1;
  top: -20px;
  right: -25px;
}

.term {
  position: absolute;
  top: 20%;
  left: 20%;
  color: rgb(21, 255, 0);
  width: 60%;
  height: 550px;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 0 0 8px 8px;
  backdrop-filter: blur(6.8px);
  -webkit-backdrop-filter: blur(6.8px);
  box-shadow: 0 -35px 0 0 rgb(46, 46, 50);
  overflow: hidden;
}

#textinput {
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  color:rgb(21, 255, 0);
  font-size: 16px;
  width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 0);
  border-radius: 0;
  border: 0;
  background: rgba(0, 0, 0, 0);
	display: block;
	border: none;
	border-radius: 0;
	width: 100%;
	color: rgb(21, 245, 10);
	font-size: 14px;
  outline: none;
  font-family: 'Roboto Mono', monospace;
  
}