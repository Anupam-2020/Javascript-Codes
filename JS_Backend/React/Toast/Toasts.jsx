import React, { useRef, useState } from 'react';
import './Toasts.css';

const Toasts = () => {
    const [toasts, setToasts] = useState([]);
    const timeoutRef = useRef({});

    const handleToast = (message, type) => {
        let newToast = {
            id: new Date().getTime().toString(),
            message,
            type,
            isVisible: "show"
        }
        setToasts(prev => [...prev, newToast])
        console.log(toasts)


        let interval_id = setTimeout(() => {
            newToast['isVisible'] = 'hide';
            setTimeout(() => {
                newToast['isVisible'] = 'hidden';
                setToasts(prev => prev.map(toast => toast.id === newToast.id ? {...newToast, isVisible: 'hidden'} : toast))
            }, 1200)
        }, 5000)
        timeoutRef.current[newToast.id] = interval_id;
    }


    const closeToast = (id) => {
        let updatedToasts = toasts.map((toast) => toast.id === id ? {...toast, isVisible: 'hidden'}: toast);
        setToasts(updatedToasts);
        clearTimeout(timeoutRef.current[id]);
        delete timeoutRef.current[id];
        console.log(toasts)
    }

    return (
        <div className='container'>
            <div className='toast-container'>
                {toasts && toasts.map((toast, index) => {
                    return (
                        <div key={index}>
                            {toast.isVisible !== "hidden" && <div key={toast.id} className={`toasts ${toast.type} ${toast.isVisible === 'hide' ? 'hide_toast' : 'show_toast'}`}>
                                <p>{toast.message}</p>
                                <p onClick={() => closeToast(toast.id)}>❌</p>
                            </div>}
                        </div>
                    )
                })}
            </div>
            <div className='button-container'>
                <button onClick={() => handleToast('Success', 'success_toast')}>Success Toast</button>
                <button onClick={() => handleToast('Error', 'error_toast')}>Error Toast</button>
                <button onClick={() => handleToast('Warning', 'warning_toast')}>Warning Toast</button>
            </div>
        </div>
    )
}

export default Toasts;