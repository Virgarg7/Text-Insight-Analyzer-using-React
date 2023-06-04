import React from 'react';

export default function Alert(props) {
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
                <strong>{props.alert.type}</strong> {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        )
    );
}
