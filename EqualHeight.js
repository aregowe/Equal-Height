$(document).ready(function () {
    $(window).on("resize", function () {
        $(".prodbox").each(function (a) {
            a++;
            $rowNumber = (Math.ceil(a / 4) - 1) * 4;
            $maxHeight = Math.max($(".prodbox").eq($rowNumber).height(), $(".prodbox").eq($rowNumber + 1).height(), $(".prodbox").eq($rowNumber + 2).height(), $(".prodbox").eq($rowNumber + 3).height());
            $(this).height($maxHeight)
        })
    }).resize()
});