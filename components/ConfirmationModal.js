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
                <h1>Order Confirmation</h1>
                <p>Order Number: {reciept.order.id}</p>
                <button
                    onClick={handleContinueToShop}
                    className="continue-to-shop"
                >Continue to Shop</button>
            </div>
        </>
    )
}