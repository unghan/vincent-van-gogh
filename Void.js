document.addEventListener('DOMContentLoaded', () => {
    // 술병 클릭 이벤트
    const bottle = document.querySelector('.bottle');

    bottle.addEventListener('click', () => {
        console.log('Bottle clicked'); // 디버깅 메시지
        window.location.href = 'baby.html'; // 페이지 6으로 이동
    });
});
