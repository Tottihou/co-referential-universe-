document.addEventListener('DOMContentLoaded', function() {
    // 禁用右键菜单
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // 禁用复制快捷键
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        return false;
    });
    
    // 禁用剪切快捷键
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        return false;
    });
    
    // 禁用文本选择
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    
    console.log('防护脚本已加载并执行');
});
