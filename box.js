document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    // 화면 클릭 시 van_gogh 페이지로 이동
    container.addEventListener('click', () => {
        window.location.href = 'van_gogh.html'; // van_gogh 페이지로 이동
    });
});
