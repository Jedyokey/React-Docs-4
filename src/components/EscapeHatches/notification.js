import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

export const showNotification = (message, theme) => {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top", // "top" or "bottom"
        position: "right",
        style: {
            background: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'black',
        },
    }).showToast();
}