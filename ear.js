// 첫 번째 배경과 두 번째 배경 선택
const firstBackground = document.querySelector('.background.first');
const secondBackground = document.querySelector('.background.second');

// 첫 번째 이미지 확대 및 깜빡임 종료 후 두 번째 이미지 표시
firstBackground.addEventListener('animationend', (event) => {
    if (event.animationName === 'blinkEffect') {
        firstBackground.classList.add('hidden'); // 첫 번째 배경 숨기기
        secondBackground.classList.remove('hidden'); // 두 번째 배경 표시
    }
});

// 두 번째 이미지 확대 및 깜빡임 종료 후 페이지 전환
secondBackground.addEventListener('animationend', (event) => {
    if (event.animationName === 'blinkEffect') {
        window.location.href = 'cave.html'; // cave.html로 이동
    }
});
