if(document.images){img1on=new Image();img1on.src="../images//about-on.gif";img2on=new Image();img2on.src="../images//serviceMenu-on.gif";img3on=new Image();img3on.src="../images//appointments-on.gif";img4on=new Image();img4on.src="../images//gc-on.gif";img5on=new Image();img5on.src="../images//events-on.gif";img6on=new Image();img6on.src="../images//news_up-on.gif";img7on=new Image();img7on.src="../images//news_down-on.gif";img8on=new Image();img8on.src="../images//elements-hawaii-logo-on.jpg";img1off=new Image();img1off.src="../images//about-off.gif";img2off=new Image();img2off.src="../images//serviceMenu-off.gif";img3off=new Image();img3off.src="../images//appointments-off.gif";img4off=new Image();img4off.src="../images//gc-off.gif";img5off=new Image();img5off.src="../images//events-off.gif";img6off=new Image();img6off.src="../images//news_up-off.gif";img7off=new Image();img7off.src="../images//news_down-off.gif";img8off=new Image();img8off.src="../images//elements-hawaii-logo.jpg"}function imgOn(imgName){if(document.images){document.images[imgName].src=eval(imgName+"on.src")}}function imgOff(imgName){if(document.images){document.images[imgName].src=eval(imgName+"off.src")}}var timer_id;function scroll_iframe(frm,inc,dir){if(timer_id)clearTimeout(timer_id);if(window.frames[frm]){if(dir=="v")window.frames[frm].scrollBy(0,inc);else window.frames[frm].scrollBy(inc,0);timer_id=setTimeout("scroll_iframe('"+frm+"',"+inc+",'"+dir+"')",31)}}function stopScroll(){if(timer_id)clearTimeout(timer_id)}function MM_preloadImages(){var d=document;if(d.images){if(!d.MM_p)d.MM_p=new Array();var i,j=d.MM_p.length,a=MM_preloadImages.arguments;for(i=0;i<a.length;i++)if(a[i].indexOf("#")!=0){d.MM_p[j]=new Image;d.MM_p[j++].src=a[i]}}}function MM_findObj(n,d){var p,i,x;if(!d)d=document;if((p=n.indexOf("?"))>0&&parent.frames.length){d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p)}if(!(x=d[n])&&d.all)x=d.all[n];for(i=0;!x&&i<d.forms.length;i++)x=d.forms[i][n];for(i=0;!x&&d.layers&&i<d.layers.length;i++)x=MM_findObj(n,d.layers[i].document);if(!x&&d.getElementById)x=d.getElementById(n);return x}function MM_nbGroup(event,grpName){var i,img,nbArr,args=MM_nbGroup.arguments;if(event=="init"&&args.length>2){if((img=MM_findObj(args[2]))!=null&&!img.MM_init){img.MM_init=true;img.MM_up=args[3];img.MM_dn=img.src;if((nbArr=document[grpName])==null)nbArr=document[grpName]=new Array();nbArr[nbArr.length]=img;for(i=4;i<args.length-1;i+=2)if((img=MM_findObj(args[i]))!=null){if(!img.MM_up)img.MM_up=img.src;img.src=img.MM_dn=args[i+1];nbArr[nbArr.length]=img}}}else if(event=="over"){document.MM_nbOver=nbArr=new Array();for(i=1;i<args.length-1;i+=3)if((img=MM_findObj(args[i]))!=null){if(!img.MM_up)img.MM_up=img.src;img.src=(img.MM_dn&&args[i+2])?args[i+2]:((args[i+1])?args[i+1]:img.MM_up);nbArr[nbArr.length]=img}}else if(event=="out"){for(i=0;i<document.MM_nbOver.length;i++){img=document.MM_nbOver[i];img.src=(img.MM_dn)?img.MM_dn:img.MM_up}}else if(event=="down"){if((nbArr=document[grpName])!=null)for(i=0;i<nbArr.length;i++){img=nbArr[i];img.src=img.MM_up;img.MM_dn=0}document[grpName]=nbArr=new Array();for(i=2;i<args.length-1;i+=2)if((img=MM_findObj(args[i]))!=null){if(!img.MM_up)img.MM_up=img.src;img.src=img.MM_dn=args[i+1];nbArr[nbArr.length]=img}}}function MM_goToURL(){var i,args=MM_goToURL.arguments;document.MM_returnValue=false;for(i=0;i<(args.length-1);i+=2)eval(args[i]+".location='"+args[i+1]+"'")}