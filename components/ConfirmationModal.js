import { useRouter } from 'next/router';

export default function ConfirmationModal({reciept, setConfirmationModal}){
    const router = useRouter();

    const handleContinueToShop = () => {
        setConfirmationModal(false);
        router.push("/")
    }

    return (
        <>
            <div className="modal-mask"></div>
            <div className="confirmation-modal">
                { reciept ? 
                <>
                <h1>Order Confirmation</h1>
                <p>Thank you for your order!</p>
                <p>Your Order Number is: {reciept.order.id}</p>
                <p>You will recieve a confirmation email shortly</p>
                <button
                    onClick={handleContinueToShop}
                    className="continue-to-shop"
                >Continue to Shop</button>
                </>
                : null
                }
            </div>
        </>
    )
}