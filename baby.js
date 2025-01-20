// 커스텀 커서
document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("custom-cursor");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

document.addEventListener('DOMContentLoaded', () => {
    const sugar = document.querySelector('.sugar');
    const babyImage = document.getElementById('babyImage');

    // 설탕 애니메이션 종료 후 아기 이미지 깜빡임 추가
    sugar.addEventListener('animationend', () => {
        sugar.style.display = 'none'; // 설탕 이미지 숨김
        babyImage.classList.remove('hidden'); // 아기 이미지 표시
        babyImage.style.animation = 'blink 2s 1'; // 깜빡임 효과 추가

        // 깜빡임 효과 종료 후 이벤트 제거
        babyImage.addEventListener('animationend', () => {
            babyImage.style.animation = ''; // 깜빡임 애니메이션 제거
        });
    });

    // 아기 이미지를 클릭하면 다음 페이지로 이동
    babyImage.addEventListener('click', () => {
        window.location.href = 'box.html'; // 다음 페이지로 이동
    });
});
