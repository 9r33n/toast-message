// Toast function
function toast({
    title = '', 
    message = '', 
    type = 'info', 
    duration = 3000
}) {
    const main = document.getElementById('toast');
    // kiểm tra xem có tồn tại main không
    if (main) {
        // tạo thẻ div
        const toast = document.createElement('div');
        // auto remove toast
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000)

        // remove toast when clicked
        toast.onclick = function(event) {
            if (event.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-exclamation'
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
    
        // add toast  và toast--${type} vào thẻ div
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .5s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__mess">
                    ${message}
                </p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
        `;
        // thêm toast vào main
        main.appendChild(toast);
    }
}

// tạo function show success
function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Hello, welcome to my toast',
        type: 'success',
        duration: 3000,
    });
}

// tạo function show error
function showErrorToast() {
    toast({
        title: 'Error',
        message: 'You failed to do something',
        type: 'error',
        duration: 3000,
    });
}