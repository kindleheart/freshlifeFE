$(function () {
    // 得到商品价格
    var priceStr = $('#span1').text();
    var price = parseFloat(priceStr.substring(1));

    $('#reduced').click(function () {
        var result = document.getElementById('qty');
        var qty = result.value;
        if( !isNaN( qty ) && qty > 0 ) result.value--;
        var total = parseInt(result.value) * price;
        // 保留两位小数
        $('#span5').text(total.toFixed(2));
    });
    $('#increase').click(function () {
        var result = document.getElementById('qty');
        var qty = result.value;
        if( !isNaN( qty )) result.value++;
        var total = parseInt(result.value) * price;
        // 保留两位小数
        $('#span5').text(total.toFixed(2));
    });
    $('#desc').click(function () {
        $('#comment').removeClass('active');
        $(this).addClass('active');
        $('#goods-desc').show();
        $('#goods-comment').hide();
    });
    $('#comment').click(function () {
        $('#desc').removeClass('active');
        $(this).addClass('active');
        $('#goods-desc').hide();
        $('#goods-comment').show();
    });
});