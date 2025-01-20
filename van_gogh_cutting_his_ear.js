// 커스텀 커서
document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("custom-cursor");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// 이미지 컨테이너와 상태 관리
const imageContainer = document.querySelector('.image-container');
const fourthImage = document.querySelector('.fourth-image'); // 네 번째 이미지 선택
const cursor = document.getElementById("custom-cursor"); // 커서 선택

// 첫 번째 클릭: 두 번째 이미지 표시 및 팔 올리기
imageContainer.addEventListener('click', (e) => {
    if (!imageContainer.classList.contains('second')) {
        imageContainer.classList.add('second'); // 두 번째 이미지와 팔 보이기
    } else if (imageContainer.classList.contains('second') && !imageContainer.classList.contains('fourth')) {
        imageContainer.classList.add('fourth'); // 네 번째 이미지와 팔 숨기기
    } else if (imageContainer.classList.contains('fourth')) {
        window.location.href = 'ear.html'; // ear.html로 이동
    }
});

// 네 번째 이미지 상태에서만 커서 변경
fourthImage.addEventListener('mouseenter', () => {
    cursor.style.background = "url('ear.png') no-repeat center center"; // 커서를 ear.png로 변경
    cursor.style.backgroundSize = "150px 150px"; // 커서 크기 설정
});

fourthImage.addEventListener('mouseleave', () => {
    cursor.style.background = "url('cursor.png') no-repeat center center"; // 기본 커서로 복구
    cursor.style.backgroundSize = "150px 150px"; // 기본 커서 크기 설정
});
