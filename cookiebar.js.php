  
  function DVCCreateCookie(name, value, days) {
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          var expires = "; expires=" + date.toGMTString();
      }
      else var expires = "";
      document.cookie = name + "=" + value + expires + "; path=/";
  }
  
  function DVCGetCookie(c_name) {
      if (document.cookie.length > 0) {
          c_start = document.cookie.indexOf(c_name + "=");
          if (c_start != -1) {
              c_start = c_start + c_name.length + 1;
              c_end = document.cookie.indexOf(";", c_start);
              if (c_end == -1) {
                  c_end = document.cookie.length;
              }
              return unescape(document.cookie.substring(c_start, c_end));
          }
      }
      return "";
  }
  
  var DVC_show;
  DVC_show=(DVCGetCookie('dvc_no_c_warning')=='yes')?false:true;
  
  if(DVC_show)if(typeof jQuery == 'undefined') {
     var script = document.createElement('script');
     script.type = "text/javascript";
     script.src = "https://cookiebar.devstars.com/jquery-3.2.1.min.js";
     document.getElementsByTagName('head')[0].appendChild(script);
  }
    if(DVC_show){
    document.write('<style type="text/css">');
    document.write(".DVCBar {position:fixed;width:100%;background-color:#2b2c43;left:0;bottom:0;;z-index:16000161;padding-top:20px;padding-bottom:20px;display:block;font-style:normal;font-weight:normal;overflow:hidden;}\n.DVCBar > div:first-child {width:80%;color:#ffffff;padding-left:20px;box-sizing:border-box;}\n.DVCBar > div:first-child > div:first-child {font-size:24px;font-family:Nexa, Poppins, sans-serif, arial;line-height:32px;font-weight:bold;}\n.DVCBar > div:first-child > div:last-child {padding-top:5px;}\n.DVCBar > div:first-child > div:last-child,\n.DVCBar > div:first-child > div:last-child a {font-size:14px;font-family:'Poppins', sans-serif, arial;line-height:20px;font-weight:normal;}\n.DVCBar > div:first-child > div:last-child a {display:inline;color:#ffffff;cursor:pointer;text-decoration:underline;}\n.DVCBar > div:last-child {position:absolute;bottom:20px;right:20px;}\n.DVCBar > div:last-child > a {display:inline-block;font-size:14px;line-height:15px;font-family:Nexa, Poppins, sans-serif, arial;padding-top:7px;padding-bottom:7px;padding-left:12px;padding-right:12px;background-color:#156bf3;color:#ffffff;text-decoration:none;cursor:pointer;;font-weight:normal;}\n\n@media (max-width:1024px){\n  .DVCBar > div:first-child {width:70%;}\n  .DVCBar > div:first-child > div:last-child br {display:none;}\n}\n\n@media (max-width:767px){\n    .DVCBar {padding-top:10px;padding-bottom:10px;}\n  .DVCBar > div:first-child {width:100%;padding-right:10px;padding-left:10px;}\n  .DVCBar > div:first-child > div:first-child {font-size:20px;line-height:26px;width:50%;min-height:25.1px;}\n  .DVCBar > div:first-child > div:last-child {padding-top:5px;}\n  .DVCBar > div:first-child > div:last-child,\n  .DVCBar > div:first-child > div:last-child a {font-size:11px;line-height:16px;}\n  .DVCBar > div:last-child {bottom:auto;top:10px;right:10px;}\n  .DVCBar > div:last-child > a {font-size:11px;line-height:12px;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;}\n}");
    document.write('</style>');
  }
    if(DVC_show)document.write("  <i class=\"DVCBar\">\n    <div>\n      <div>Cookies<\/div>\n      <div>On our site we use cookies, to help deliver the best experience for you and to also let us know how visitors use our website. If you are happy for us to use cookies whilst you view our site, please hit &quot;Agree&quot;. If you would like more information, please find this in our&nbsp;<a href=\"\/privacy-policy\/\">Privacy Policy<\/a>.<\/div>\n    <\/div>\n    <div>\n      <a href=\"javascript:;\" onclick=\"DVCCloseBar()\">Agree<\/a>\n    <\/div>\n  <\/i>\n  ");
  
  function DVCCloseBar(){
    jQuery('.DVCBar').fadeOut(500);
    DVCCreateCookie('dvc_no_c_warning', 'yes', 730);
  }


