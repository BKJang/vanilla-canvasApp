const canvas = document.getElementById('jsCanvas');

let painting = false;

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
}

// 캔버스에 마우스를 클릭했을 때 이벤트
function onMouseDown(event) {
    //마우스를 클릭했을 때  painting flag를 true로 변경
    startPainting();
}

// 캔버스에서 마우스를 클릭했다가 뗐을 때 이벤트
function onMouseUp(event) {
    //마우스를 클릭했다가 띠면 painting flag를 false로 변경
    stopPainting();
}

// 캔버스에서 마우스가 벗어났을 때 이벤트
function onMouseLeave(event) {
    //마우스가 캔버스에서 벗어나면 painting flag를 false로 변경
    stopPainting();
}

// 마우스가 캔버스 내부에서 인지할 수 있도록 이벤트 리스너 추가
if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', onMouseLeave);
}