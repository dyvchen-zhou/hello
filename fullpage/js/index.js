$(function() {
    $('#move').fullpage({
        verticalCentered: false,
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        navigation: true,
        scrollingSpeed: 1000,

        //页面加载完成后的回调函数
        afterRender: function() {
            $('.more').on('click', function() {
                $.fn.fullpage.moveSectionDown();
            });
            //第四屏小车推走后的动画
            $('.section:nth-child(4) .cart').on('animationend', function() {
                //1. 提示文字改变
                $('.section:nth-child(4) .text img:last-child').fadeIn();
                //2. 收货地址改变
                $('.section:nth-child(4) .address').fadeIn(function() {
                    $('.section:nth-child(4) .address img:last-child').fadeIn();
                });
            });

            //第八屏的跟随小手移动
            $('.section:nth-child(8)').on('mousemove', function(e) {
                $(this).find('.hand').css({
                    left: e.clientX,
                    top: e.clientY + 20
                })
            }).on('click', '.agin', function() {
                $.fn.fullpage.moveTo(1);
                $('.section').removeClass('now');
                $('.animated').removeClass('animated');
                $('.section [style]').removeAttr('style');
            })
        },

        //下一张图切换图变化的事件
        //离开时的回掉函数
        onLeave: function(index, nextIndex, direction) {
            $('.more').fadeOut(100);

            // 第二屏到第三屏的动画
            if (index === 2 & nextIndex === 3) {
                $('.section:nth-child(2)').find('.sofa').addClass('animated');
            } else if (index === 3 & nextIndex === 4) {
                $('.section:nth-child(3)').find('.sofa').addClass('animated');
            } else if (index === 5 & nextIndex === 6) {
                $('.section:nth-child(5)').find('.card img:last-child').addClass('animated');
                $('.section:nth-child(6)').find('.box').addClass('animated');
            }


        },
        afterLoad: function(link, index) {
            if (index != 8) {
                $('.more').fadeIn(100);
            }
            //用类名控制所有的运动
            $('.section').eq(index - 1).addClass('now');
            //星星淡入效果
            if (index == 7) {
                $('.section .star img').each(function(i, e) {
                    $(e).delay(i * 500).fadeIn(500);
                })
            };
        }
    });
});