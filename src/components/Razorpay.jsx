import React, { useEffect } from 'react';

export const Razorpay = () => {

    const options = {
        key: 'rzp_test_fVZrFMvjkcR4Fa',
        amount: '100000', //  = INR 1
        name: 'Consultant fees',
        description: 'some description',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function(response) {
            alert(response.razorpay_payment_id);
        },
        prefill: {
            name: 'Gaurav',
            contact: '9999999999',
            email: 'demo@demo.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <button className='px-6 py-2 bg-blue-500 rounded-lg text-xl' onClick={openPayModal}>Pay with Razorpay</button>
        </>
    );
}