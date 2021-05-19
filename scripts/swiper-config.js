let mySwiper = new Swiper ('.swiper-container', {
    // 以下にオプションを設定
    loop: true,               //ループするか
    initialSlide: 1,          //初期スライド
    autoHeight: true,        //各スライドの高さを維持するか
    //ページネーション表示の設定
    pagination: { 
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets',          //ページネーションの種類
    clickable: true,          //クリックに反応させる
    renderBullet: function(index, className) {
        //中の文字を表示
        return '<div class="' + className + '">' + ["暗黒", "領主", "城主", "帝王", "固有"][index] + '</div>';　 }
    },
})