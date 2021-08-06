let countCorrect = 0
var slideIndex = 1
// Slide show 
showSlides(slideIndex);

// Chuyển tới trang tiếp
// Nó là 1 hàm nhận vào 1 số 
function plusSlides() {
    // Ngoài việc chuyển slide -> Hay nói cách khác người dùng đã trả lời xong 
    // Em phải kiểm tra đáp án đó có đúng k :)
    $(".group").click(function () {
        this.style.backgroundColor = "red"
    })
    $(".correct").click(function () {
        this.style.backgroundColor = "green"
    })
}

const result = document.getElementById("result")
function showResult(n) {
    showSlides(slideIndex += n)
    result.innerText = countCorrect
}


function changePage(n) {
    showSlides(slideIndex += n)
    // result.innerText = countCorrect
}

function showSlides(n) {
    var i;
    var page = document.getElementsByClassName("quiz-container")
    if (n > page.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = page.length }
    for (i = 0; i < page.length; i++) {
        page[i].style.display = "none";
    }
    page[slideIndex - 1].style.display = "block";
}

// Còn nhiều vấn đề lắm mà mấy bạn k đầu tư time nên k làm hết dc 

$(".correct").click(function () {
    countCorrect++
})


let container = document.getElementById("container")
let cover = document.getElementById("cover")
let username = document.getElementById("username")
let nameUser = document.getElementById("name")
function GoToMainScreen() {
    container.style.display = "flex"
    cover.style.display = "none"
    nameUser.innerText = username.value
}
