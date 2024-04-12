$(document).ready(function() {
    // 初始化选择器和变量
    var $timeline = $("#timeline-1");
    var $items = $timeline.find(".timeline-item");
    var activeClass = "timeline-item--active";

    // 设置初始背景图片和激活的类
    if ($items.length > 0) {
        $timeline.css('background-image', 'url(' + $items.first().find(".timeline_img").attr("src") + ')');
        $items.first().addClass(activeClass);
    }

    // 监听滚动事件
    $(window).scroll(function() {
        var pos = $(window).scrollTop();
        var max, min;

        $items.each(function(i) {
            var $item = $(this);
            min = $item.offset().top;
            max = $item.outerHeight() + min;
            
            if (i == $items.length - 2 && pos > min + $item.outerHeight() / 2) {
                $items.removeClass(activeClass);
                $timeline.css('background-image', 'url(' + $items.last().find(".timeline_img").attr("src") + ')');
                $items.last().addClass(activeClass);
            } else if (pos <= max - 40 && pos >= min) {
                $timeline.css('background-image', 'url(' + $item.find(".timeline_img").attr("src") + ')');
                $items.removeClass(activeClass);
                $item.addClass(activeClass);
            }
        });
    });
});
