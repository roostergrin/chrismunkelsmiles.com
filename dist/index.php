<!DOCTYPE html>
<html <?php language_attributes(); ?> role='main'>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body>
  <div id='app' role='application'></div>
  <?php wp_footer(); ?>
  <script type="text/javascript">
    WebFontConfig = {
      google: { families: [ 'Georgia:400,600' ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
    var $buoop = {notify:{e:-6,f:-4,o:-4,s:-2,c:-4},insecure:true,api:5};

    function $buo_f(){
      var e = document.createElement("script");
      e.src = "//browser-update.org/update.min.js";
      document.body.appendChild(e);
    };

    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  </script>
<!-- Review Feed Rotating Widget Code -->
<script type="text/javascript" src="https://birdeye.com/embed/v4/158932203595021/8/1234567985183"></script>
<div id="bf-revz-widget-1234567985183">
  <div class="bf-dv">
    <span class="bf-spn"> powered by <a class="bf-pwr" href="http://birdeye.com" target="_blank">BirdEye</a></span>
  </div>
</div>
<script>
let checkingInterval = setInterval(myTimer, 1000);
function myTimer() {
	let revWidget = document.getElementById('bf-revz-widget-1234567985183')
	if (!!revWidget) {
    revWidget.style.position = 'fixed';
		revWidget.style.bottom = '20px';
		revWidget.style.left = '20px';
    myStopFunction();
    }
}
function myStopFunction() {
	clearInterval(checkingInterval)
}
</script>
<!-- Review Feed Rotating Widget Code -->
<!-- Webchat Code -->
<script type="text/javascript" src="https://birdeye.com/embed/v1/158932203595021/1/2011845117/EPmdsV4sDuAbU7knLOPrgb0phP13VIAK"></script>
<div id="bf-revz-widget-2011845117"></div>
<!-- Webchat Code -->
</body>
</html>
