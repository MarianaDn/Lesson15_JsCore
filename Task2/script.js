
$(document).ready(function(){
    let $str ='';
    $str = $('#s1').text();
    $str += $('.s2').text();
    $str += $('.second i').text();
    $str += $('[title=hello').text();
    $str += $('[target="_blank"').text();
    $str += $('.extra:last').text();
    alert($str);
})