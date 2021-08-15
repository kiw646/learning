<html>  
<head>   
<title> Random Image Generator </title>  
<link rel="stylesheet" href="./moon.css">
</head>  
<script>  
function getRandomImage() {  
//declare an array to store the images  
var randomImage = new Array();  
  
function resize(img){
 
 // 원본 이미지 사이즈 저장
 var width = img.width;
 var height = img.height;

 // 가로, 세로 최대 사이즈 설정
 var maxWidth = width * 0.5;   // 원하는대로 설정. 픽셀로 하려면 maxWidth = 100  이런 식으로 입력
 var maxHeight = height * 0.5;   // 원래 사이즈 * 0.5 = 50%

 // 가로나 세로의 길이가 최대 사이즈보다 크면 실행  
 if(width > maxWidth || height > maxHeight){

    // 가로가 세로보다 크면 가로는 최대사이즈로, 세로는 비율 맞춰 리사이즈
    if(width > height){
       resizeWidth = maxWidth;
       resizeHeight = Math.Round((height * resizeWidth) / width);

    // 세로가 가로보다 크면 세로는 최대사이즈로, 가로는 비율 맞춰 리사이즈
    }else{
       resizeHeight = maxHeight;
       resizeWidth = Math.Round((width * resizeHeight) / height);
    }

 // 최대사이즈보다 작으면 원본 그대로
 }else{
    resizeWidth = width;
    resizeHeight = height;
 }

 // 리사이즈한 크기로 이미지 크기 다시 지정
 img.width = resizeWidth;
 img.height = resizeHeight;
}
//insert the URL of images in array  
randomImage[0] = "https://pbs.twimg.com/media/EmRZZquUcAAsVaL.jpg";  
randomImage[1] = "https://i.pinimg.com/474x/90/be/d7/90bed79280939d2c134b4edf565fa1ca.jpg";  
randomImage[2] = "https://i.pinimg.com/736x/74/33/1c/74331cf0fb193662fa89a7321a5a56ff.jpg";  
randomImage[3] = "https://img.hankyung.com/photo/202104/BF.26214565.1.jpg";
randomImage[4] = "https://file1.bobaedream.co.kr/multi_image/girl/2020/02/24/15/CFV5e5371e952647.jpg";
randomImage[5] = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb0EZGY%2Fbtq5SbpMBjo%2FlNqmLFuzSVjTMb45BcJDkk%2Fimg.jpg";
randomImage[6] = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBNymk%2Fbtq5RDz2ed4%2F4ekhI7F1h8aeE5Ke78UR50%2Fimg.jpg";
randomImage[7] = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeCXPbc%2Fbtq3auZf6Mo%2FmYbQDygGskpnTokbX4TEIK%2Fimg.jpg";
randomImage[8] = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQasvC%2Fbtq27hM8If6%2FkKs0SIFLSkvsTrBp7hR74K%2Fimg.jpg";
randomImage[9] = "https://mblogthumb-phinf.pstatic.net/MjAxOTAyMDJfODgg/MDAxNTQ5MDc3MjA1ODAz.AqSlRVIeT24KXUUtJwcH9GN4zgpgToopIniUrRXXsVcg.273Y5VlVJCOgJQIMNxlH5dcrX1YRaBNAl9fvdS4glncg.JPEG.chltjsrb7496/0017.jpg?type=w2";
randomImage[10] = "https://dampick.com/files/attach/images/2021/06/17/a4cc45268c1d3a20c40e4957e17df7c1.jpg";
randomImage[11] = "https://dampick.com/files/attach/images/2021/06/17/069a7b1161cc8864ec8092a90191dfda.jpg";
randomImage[12] = "https://dampick.com/files/attach/images/2021/06/17/069a7b1161cc8864ec8092a90191dfda.jpg";
randomImage[13] = "https://i3.ruliweb.com/img/21/06/20/17a286bf6b1504982.jpg";
randomImage[14] = "https://i2.ruliweb.com/img/21/06/20/17a286c00b7504982.jpg";
randomImage[15] = "https://i.pinimg.com/736x/ad/41/af/ad41aff49b5f5eefefbd2738ea8126b5.jpg";
randomImage[16] = "https://i1.wp.com/eldermod.net/wp-content/uploads/kboard_attached/7/202101/600a69d9e7c041762077.jpg?w=1200&ssl=1";
randomImage[17] = "https://www.picnew.org/images/2020/08/22/ol00.jpg";
randomImage[18] = "https://skypark365.com/UploadFiles/20201116065703wsws1605447038_1363408090.jpg";
randomImage[19] = "https://skypark365.com/UploadFiles/20201116065703wsws1605447038_1363408090.jpg";
randomImage[20] = "https://image.fmkorea.com/files/attach/new/20200930/486616/826571299/3119074534/7e13a4985d7cd4f1feb39a65b18327fc.jpeg";
randomImage[21] = "https://pbs.twimg.com/media/EsYGoO8UcAAj3F8?format=jpg&name=large";
randomImage[22] = "https://image.fmkorea.com/files/attach/new/20170727/5665468/122498/723878790/5b76f172f09bb2a68d715634b909cd8f.jpg";
randomImage[23] = "https://image.fmkorea.com/files/attach/new/20170727/5665468/122498/723878790/b2cfd8a2fb51aa49cbd6cd238a4d7c3b.jpg";
randomImage[24] = "https://image.fmkorea.com/files/attach/new/20170727/5665468/122498/723878790/75ad20a64301e56f3b3d22586d248274.jpg";
randomImage[25] = "https://image.fmkorea.com/files/attach/new/20170727/5665468/122498/723878790/e52134f966a44c7e19998830a52118cc.jpg";
randomImage[26] = "https://image.fmkorea.com/files/attach/new/20170727/5665468/122498/723878790/5e1cba9148a1ff37d7c29f3095501051.jpg";
randomImage[27] = "https://image.fmkorea.com/files/attach/new/20170727/5665468/122498/723878790/eae3e29027b822752bf7185cf7cb00c8.jpg";
randomImage[28] = "https://image.fmkorea.com/files/attach/new/20170727/5665468/122498/723878790/23f7530e25c0882bc17e514a93b7325d.jpg";
randomImage[29] = "https://image.fmkorea.com/files/attach/new/20170727/5665468/122498/723878790/63c508fc0abe62eac01d14f271bbf559.jpg";
randomImage[30] = "https://image.fmkorea.com/files/attach/new/20170727/5665468/122498/723878790/826a077ed3f98ea6c7d870b9ed742b06.jpg";
randomImage[31] = "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/129266729_108992291059847_4299199747054627894_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=R6fES7WwGWgAX-2nrnt&_nc_oc=AQlBXAW6q8gceEedLv4nhvkSmNE6EEDdcwwcrrYL0Pd6OlNjVqWKGrET8nI5s-LcAmQ&_nc_ht=scontent-gmp1-1.xx&oh=898a45015722da7b2b9724ef0de0a7da&oe=613C4A7A";
randomImage[32] = "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/129426318_108992281059848_5176072638347976305_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=01y7JBTQEZcAX_AKh5X&_nc_ht=scontent-gmp1-1.xx&oh=562e75b4cc7f859bd5182077a0cbcd5b&oe=613CF082";
randomImage[33] = "https://deokhu.com/wp-content/uploads/2020/07/검스-소녀00.jpg";
randomImage[34] = "https://cdn.imweb.me/upload/S20200917470775016a51b/653e3b05f5136.jpg";
randomImage[35] = "https://i2.ruliweb.com/img/21/04/22/178f6fdf5dd504982.jpg";
randomImage[36] = "https://images.kick-off.co.kr/202012/587B1729-C8AA-45DE-BE9B-9706D6D4C9D9.png";
randomImage[37] = "https://images.kick-off.co.kr/202012/B7B953AD-C021-44B2-8C8C-6BAEC78A2D08.png";
randomImage[38] = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdXODyX%2FbtqU52wPE5j%2FRXuKFUF98W0CtrYBkkVuJk%2Fimg.jpg";
randomImage[39] = "https://www.picnew.org/images/2020/11/02/363029a.jpg";
randomImage[40] = "https://www.picnew.org/images/2020/11/02/43.jpg";
randomImage[41] = "https://image5jvqbd.fmkorea.com/files/attach/new/20200404/486616/2192031598/2856735178/cc9cc6587d23bee3d4eb9a77a61b3116.jpg";
randomImage[42] = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcNXcoT%2Fbtq2L3hGTgH%2FIBKGxzlfNXeOiBl5lUrar1%2Fimg.jpg";
randomImage[43] = "https://file1.bobaedream.co.kr/national/2018/09/15/18/swtc1537005456.jpg";
randomImage[44] = "https://file1.bobaedream.co.kr/national/2018/09/15/18/swtc1537005528.jpg";
randomImage[45] = "http://www.gameaz.co.kr/Files/Images/20190309/63439215520489644.jpg";
randomImage[46] = "http://www.gameaz.co.kr/Files/Images/20190309/63439215520489643.jpg";
randomImage[47] = "http://www.gameaz.co.kr/Files/Images/20190309/63439215520489641.jpg";
randomImage[48] = "http://www.gameaz.co.kr/Files/Images/20190309/63439215520489640.jpg";
randomImage[49] = "https://www.picnew.org/images/2021/05/09/01.jpg";
randomImage[50] = "https://www.picnew.org/images/2021/05/09/04.jpg";
randomImage[51] = "http://i30.tcafe2a.com/2009/20200919082407_a85c3e3098cfe06d7294a552bfa4be87_uv9r.png";
randomImage[52] = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbBUz8X%2Fbtq3XszipW5%2FfIZ9YaK2nC38psBoszbu8k%2Fimg.jpg";
randomImage[53] = "https://i1.wp.com/kkzz.kr/wp-content/uploads/mangboard/2020/10/22/F1852_9.jpg?w=1200&ssl=1";
randomImage[54] = "https://tofac.net/data/file/94/thumb-2728312459_uleFV6yW_2917d9ee7485a62febdc837a3d733df0301a3d89_600x734.jpg";
randomImage[55] = "http://www.zeplanter.com/data/file/photo/thumb-1608001231054_600x900.jpg";
randomImage[56] = "https://appzzang.me/data/file/hot/thumb-1846491567_NPbaeHfk_5fbd79470d79bf028f41226bbdfdfd20_800x600.jpg";
randomImage[57] = "https://appzzang.me/data/file/hot/1846491567_yBUA3jpt_39732915624279733.jpeg";
randomImage[58] = "https://appzzang.me/data/file/hot/1846491567_I2eBfkrd_asCQh7S.jpg";
randomImage[59] = "https://jamdda.com/files/attach/images/w/558/115/016/634dcec89b9fb41d1ddbcb73d914aabb61b79df9.jpg";
randomImage[60] = "https://photo.jtbc.joins.com/news/2015/08/31/20150831103005381.jpg";
randomImage[61] = "https://1.bp.blogspot.com/-FRy-Q378xA4/X7iMsvRswvI/AAAAAAAFMH8/WkvpEEZ1AWAMK7vElplGnu2jug0kmOmBACLcBGAsYHQ/s0/1.jpg";
randomImage[62] = "https://1.bp.blogspot.com/-2BLtInPC7Q8/X7iMtT07_7I/AAAAAAAFMII/iqJoINrl3wQiGj9csQQ8hnbSMZbbgnpxwCLcBGAsYHQ/s0/4.jpg";
randomImage[63] = "http://www.ma.zeplanter.com/data/file/photo/thumb-15938964133652_600x900.jpg";
randomImage[64] = "http://www.etoland.co.kr/data/daumeditor02/200315/86222815842565210.jpg";
randomImage[65] = "http://www.etoland.co.kr/data/daumeditor02/200315/86222815842565211.jpg";
randomImage[66] = "http://www.etoland.co.kr/data/daumeditor02/200315/86222815842565212.jpg";
randomImage[67] = "http://www.etoland.co.kr/data/daumeditor02/200315/86222815842565213.jpg";
randomImage[68] = "http://www.etoland.co.kr/data/daumeditor02/200315/86222815842565214.jpg";
randomImage[69] = "http://www.etoland.co.kr/data/daumeditor02/200315/86222815842565215.jpg";
randomImage[70] = "http://www.etoland.co.kr/data/daumeditor02/200315/86222815842565217.jpg";
randomImage[71] = "http://www.etoland.co.kr/data/daumeditor02/200315/86222815842565218.jpg";
randomImage[72] = "https://appzzang.me/data/file/hot/thumb-3731675371_4kiMpo5L_EAB280EC8AA4EBAAA8EB8DB8_1_800x1200.jpg";
randomImage[73] = "https://data.ygosu.com/editor/attach/20200622/20200622202315_odtgupoo.jpg";
randomImage[74] = "https://data.ygosu.com/editor/attach/20200622/20200622202943_grmdwseh.jpg";
randomImage[75] = "https://data.ygosu.com/editor/attach/20200622/20200622202943_fsuikfhm.jpg";
randomImage[76] = "https://1.bp.blogspot.com/-fDYNE4SaeQ4/X7E-WepZzsI/AAAAAAAIQQ0/ZCQLPPIBVvs-GJ1vRemtpaOgMDODC5sgwCLcBGAsYHQ/s1600/1.jpg";
randomImage[77] = "https://ggang365.com/data/editor/2012/thumb-41e697c39fa25c3356f98cc0e083a088_1607860183_9909_835x836.jpg";
randomImage[78] = "https://ggang365.com/data/editor/2012/thumb-41e697c39fa25c3356f98cc0e083a088_1607860180_5049_835x835.jpg";
randomImage[79] = "https://cdn.imweb.me/upload/S20200917470775016a51b/d28c5ba5c50a6.jpg";
randomImage[80] = "https://image.fmkorea.com/files/attach/new/20210116/494354581/227573697/3331175511/df47e662765a38a956837e8555726f69.jpg";
randomImage[81] = "http://t1.daumcdn.net/thumb/R1000x0/?fname=https://i.imgur.com/lbmjM2j.png";
randomImage[82] = "https://cdn.clien.net/web/api/file/F01/9553919/d9b5a2156701c.jpg?w=780&h=30000";
randomImage[83] = "http://thimg.todayhumor.co.kr/upfile/202010/16019084486eeaef21367743468430cb15c244bd21__mn106230__w800__h1067__f116906__Ym202010.jpg";
randomImage[84] = "http://thimg.todayhumor.co.kr/upfile/202010/1601908455d7c611e697e048d4a8fee90c276f3cd8__mn106230__w800__h1067__f90923__Ym202010.jpg";
randomImage[85] = "https://i3.ruliweb.com/img/19/10/19/16de3ccc39d48e32e.jpg";
randomImage[86] = "http://www.zeplanter.com/data/file/photo/thumb-16025364521821_600x899.jpg";
randomImage[87] = "https://www.fomos.kr/contents/images/board/2018/0129/1517215637833109.jpg";
randomImage[88] = "https://www.picnew.org/images/2020/08/25/0156acc.jpg";
randomImage[89] = "https://www.picnew.org/images/2020/08/25/0156acc.jpg";
randomImage[90] = "https://img.bamnol.com/files/attach/images/15249/597/458/002/c0804672870cee9558ba643c6e7201e9.jpg";
//generate a number and provide to the image to generate randomly  
var number = Math.floor(Math.random()*randomImage.length);  
  
//return the images generated by a random number  
return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'"onload="resize(this)" />';  
}  
  
</script>  
<body>  
<center><h2 style="color:green"> Random Image Generator </h2></center>  
<h4> Click the button to generate and display random images on the webpage </h4>  
<!-- call user-defined getRandomImage function after 2 seconds -->    
<button onclick = "setInterval(getRandomImage, 2000)"> Generate Image </button>  
<br> <br>  
<span id="result" align="center"> </span>   
    
</body>    
</html>  