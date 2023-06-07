import React from 'react';

export default function Alert(props) {

    const capitialise = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    const getAlertClass = (type) => {
        switch (type) {
            case 'success':
                return 'alert-success';
            case 'info':
                return 'alert-info';
            case 'warning':
                return 'alert-warning';
            case 'danger':
                return 'alert-danger';
            default:
                return 'alert-primary';
        }
    };

    return (
        props.alert && (
            <div className={`alert ${getAlertClass(props.alert.type)} alert-dismissible fade show`} role="alert">
                <strong>{capitialise(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        )
    );
}
