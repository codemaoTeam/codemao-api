var refreshCache = function () {
    $.ajax({
        url: location.origin,
        dataType: 'json',
        data: {},
        cache: false,
        ifModified: true,
        success: function (response) {
            alert('刷新成功！')
        }
    });
}