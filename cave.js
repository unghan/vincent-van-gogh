document.addEventListener('DOMContentLoaded', () => {
    // 화면 클릭 이벤트
    const container = document.querySelector('.container');

    container.addEventListener('click', () => {
        console.log('Screen clicked'); // 디버깅 메시지
        window.location.href = 'Void.html'; // 다음 페이지로 이동
    });
});
