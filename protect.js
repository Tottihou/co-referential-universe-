 禁用右键菜单
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

 禁用复制快捷键
document.addEventListener('copy', function(e) {
    e.preventDefault();
    return false;
});

 禁用剪切快捷键
document.addEventListener('cut', function(e) {
    e.preventDefault();
    return false;
});

 可选：禁用文本选择（通过 JS 补充，防止某些浏览器忽略 CSS）
document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.mozUserSelect = 'none';
document.body.style.msUserSelect = 'none';