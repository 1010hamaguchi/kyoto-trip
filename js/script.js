document.addEventListener('DOMContentLoaded', function() {
    // スケジュール項目にクリックイベントを追加
    const scheduleItems = document.querySelectorAll('.schedule-item');
    
    scheduleItems.forEach(item => {
        item.addEventListener('click', function() {
            // 既存の詳細表示を削除
            const existingDetails = this.querySelector('.details');
            if (existingDetails) {
                existingDetails.remove();
                return;
            }
            
            // 詳細情報を取得
            const details = this.getAttribute('data-details');
            if (details) {
                // 詳細情報を表示
                const detailsDiv = document.createElement('div');
                detailsDiv.className = 'details';
                detailsDiv.innerHTML = details;
                this.appendChild(detailsDiv);
            }
        });
    });
});
