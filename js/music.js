const ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
    preload: 'auto',
    listMaxHeight: '336px',
    volume: '0.5',
    mutex: true,
    lrcType: 3,
    /* 下方更改为你自己的歌单就行 */

    audio: [{
        name: "让风告诉你",
        artist: "花玲 / 喵☆酱 / 宴宁 / kinsen",
        url: "http://music.163.com/song/media/outer/url?id=1818031620.mp3",
        theme: "#171513"
    },
    {
        name: "卡农",
        artist: "dylanf",
        url: "http://music.163.com/song/media/outer/url?id=478507889.mp3",
        theme: "#0057a7"
    },
    {
        name: "我是真的爱上你",
        artist: "阿冗",
        url: "http://music.163.com/song/media/outer/url?id=1953873776.mp3",
        theme: "#171513"
    },
    {
        name: "目及皆是你",
        artist: "多多poi",
        url: "http://music.163.com/song/media/outer/url?id=1929105811.mp3",
        theme: "#e3ae55"
    },
    {
        name: "Rubia",
        artist: "周深",
        url: "http://music.163.com/song/media/outer/url?id=1815684465.mp3",
        theme: "#395732"
    },
    {
        name: "晴天",
        artist: "周杰伦",
        url: "https://drive.imsyy.top/api?path=%2F%E9%9F%B3%E4%B9%90%2F%E6%96%87%E4%BB%B6%E5%BC%95%E7%94%A8%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%99%B4%E5%A4%A9.mp3&raw=true",
        theme: "#08362e"
    },
    {
        name: "必杀技",
        artist: "Ecrolyn",
        url: "http://music.163.com/song/media/outer/url?id=1357399743.mp3",
        theme: "#08362e"
    },
    {
        name: "室内系的TrackMaker",
        artist: "Hanser",
        url: "http://music.163.com/song/media/outer/url?id=537787665.mp3",
        theme: "#171513"
    },
    {
        name: "絆",
        artist: "紫依violet",
        url: "http://music.163.com/song/media/outer/url?id=1363176707.mp3",
        theme: "#383a37"
    },
    {
        name: "打上花火",
        artist: "米津玄師",
        url: "http://music.163.com/song/media/outer/url?id=496869422.mp3",
        theme: "#f0a059"
    },
    {
        name: "如一",
        artist: "不是花火呀",
        url: "http://music.163.com/song/media/outer/url?id=1498076242.mp3",
        theme: "#c21c0f"
    },
    {
        name: "In Love",
        artist: "July",
        url: "http://music.163.com/song/media/outer/url?id=26127161.mp3",
        theme: "#000000"
    },
    {
        name: "Pluto",
        artist: "Drop Tower,Nyte",
        url: "http://music.163.com/song/media/outer/url?id=33418878.mp3",
        theme: "#86b5bb"
    },
    {
        name: "헤어지지 못하는 여자, 떠나가지 못하는 남자 ",
        artist: "리쌍 LeeSSang,정인 Jung In",
        url: "http://music.163.com/song/media/outer/url?id=22842426.mp3",
        theme: "#295249"
    },
    {
        name: "小爱",
        artist: "小柚iu",
        url: "http://music.163.com/song/media/outer/url?id=1424536482.mp3",
        theme: "#e3ae55"
    },
    {
        name: "脆弱星球",
        artist: "杨胖雨",
        url: "http://music.163.com/song/media/outer/url?id=1453086724.mp3",
        theme: "#171513"
    },
    ]
});

/* 底栏歌词 */
// setInterval(function () {
//     $("#lrc").html("<span class='lrc-show'><i class='iconfont icon-music'></i> " + $(".aplayer-lrc-current").text() + " <i class='iconfont icon-music'></i></span>");
// }, 500);

/* 音乐通知及控制 */
ap.on('play', function () {
    music = $(".aplayer-title").text() + $(".aplayer-author").text();
    iziToast.info({
        timeout: 8000,
        iconUrl: './img/icon/music.png',
        displayMode: 'replace',
        message: music
    });
    $("#play").html("<i class='iconfont icon-pause'>");
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
    if ($(document).width() >= 990) {
        $('.power').css("cssText", "display:none");
        $('#lrc').css("cssText", "display:block !important");
    }
});

ap.on('pause', function () {
    $("#play").html("<i class='iconfont icon-play'>");
    if ($(document).width() >= 990) {
        $('#lrc').css("cssText", "display:none !important");
        $('.power').css("cssText", "display:block");
    }
});

//音量调节
function changevolume() {
    var x = $("#volume").val();
    ap.volume(x, true);
    if (x == 0) {
        $("#volume-ico").html("<i class='iconfont icon-volume-x'></i>");
    } else if (x > 0 && x <= 0.3) {
        $("#volume-ico").html("<i class='iconfont icon-volume'></i>");
    } else if (x > 0.3 && x <= 0.6) {
        $("#volume-ico").html("<i class='iconfont icon-volume-1'></i>");
    } else {
        $("#volume-ico").html("<i class='iconfont icon-volume-2'></i>");
    }
}

$("#music").hover(function () {
    $('.music-text').css("display", "none");
    $('.music-volume').css("display", "flex");
}, function () {
    $('.music-text').css("display", "block");
    $('.music-volume').css("display", "none");
})

/* 一言与音乐切换 */
$('#open-music').on('click', function () {
    $('#hitokoto').css("display", "none");
    $('#music').css("display", "flex");
});

$("#hitokoto").hover(function () {
    $('#open-music').css("display", "flex");
}, function () {
    $('#open-music').css("display", "none");
})

$('#music-close').on('click', function () {
    $('#music').css("display", "none");
    $('#hitokoto').css("display", "flex");
});

/* 上下曲 */
$('#play').on('click', function () {
    ap.toggle();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#last').on('click', function () {
    ap.skipBack();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#next').on('click', function () {
    ap.skipForward();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

/* 打开音乐列表 */
$('#music-open').on('click', function () {
    if ($(document).width() >= 990) {
        $('#box').css("display", "block");
        $('#row').css("display", "none");
        $('#more').css("cssText", "display:none !important");
    }
});