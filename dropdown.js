window.addEventListener('resize', function() {
  var dropdownMenus = document.querySelectorAll('.dropdown-menu');
  dropdownMenus.forEach(function(dropdownMenu) {
    if (window.innerWidth < 768) {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = '';
    }
  });
});

// 初期ロード時にもチェック
document.addEventListener('DOMContentLoaded', function() {
  var dropdownMenus = document.querySelectorAll('.dropdown-menu');
  dropdownMenus.forEach(function(dropdownMenu) {
    if (window.innerWidth < 768) {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = '';
    }
  });
});