const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

//css 사이즈가 아닌 canvas 자체적으로 width와 height를 줘야 동작한다.(pixel modifier)
canvas.width = 470;
canvas.height = 470;


ctx.strokStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

// 캔버스에서 마우스가 벗어났을 때 이벤트
// 캔버스에서 마우스를 클릭했다가 뗐을 때 이벤트
function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

// 캔버스 위에서 마우스를 움직일 때 이벤트
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    //움직이면서 path를 만듬
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        //마우스를 클릭했을 때 그리기 시작
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

// 캔버스에 마우스를 클릭했을 때 이벤트
function onMouseDown(event) {
    //마우스를 클릭했을 때  painting flag를 true로 변경
    startPainting();
}

// 마우스가 캔버스 내부에서 인지할 수 있도록 이벤트 리스너 추가
if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}