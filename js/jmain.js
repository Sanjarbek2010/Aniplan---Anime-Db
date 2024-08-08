$(document).ready(function () {
    $(".e1").hover(function () {
        $(".hiding-text").removeClass("active")
        $(".text1").addClass("active")
    })
    $(".e1").mouseleave(function () {
        $(".hiding-text").removeClass("active")
        $(".text1").addClass("active")
    })
    $(".e2").hover(function () {
        $(".hiding-text").removeClass("active")
        $(".text2").addClass("active")
    })
    $(".e2").mouseleave(function () {
        $(".hiding-text").removeClass("active")
        $(".text1").addClass("active")
    })
    $(".e3").hover(function () {
        $(".e2").css(
            "margin-left", "-220px",

        )
        $(".e3").mouseleave(function () {
            $(".e2").css(
                "margin-left", "0",

            )
        })
        $(".hiding-text").removeClass("active")
        $(".text3").addClass("active")
    })
    $(".e3").mouseleave(function () {
        $(".hiding-text").removeClass("active")
        $(".text1").addClass("active")
    })
    $(".e4").hover(function () {
        $(".e2").css(
            "margin-left", "-220px",

        )
        $(".e3").css(
            "margin-left", "-220px",

        )
        $(".hiding-text").removeClass("active")
        $(".text4").addClass("active")
    })
    $(".e4").mouseleave(function () {
        $(".e2").css(
            "margin-left", "0",

        )
        $(".e3").css(
            "margin-left", "0",

        )
        $(".hiding-text").removeClass("active")
        $(".text1").addClass("active")
    })
    $(".ep2").click(function () {
        $(".hiding-text").removeClass("active")
        $(".text4").addClass("active")
    })
});
