document.addEventListener('DOMContentLoaded', () => {
    let content = [
        'First content block data',
        'Second content block data',
        'Third content block data',
        'Fourth content block data'
    ];

    document.querySelector('.content-block p').textContent = content[0];
    document.querySelectorAll('.control-block p').forEach((block) => {
        block.addEventListener('click', function () {
            document.querySelector('.content-block p').textContent = content[this.getAttribute('data-id')];
        });
    });
});
