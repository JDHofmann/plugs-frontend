
export default function Prices({skus, selectedOption}){

    const renderAllPrices = () => {
        return skus.map(s => <p key={s.id} className={s.id === selectedOption ? "selected" : null }>{s.price}</p>)
    }

    return (
        <>
            {renderAllPrices()}
        </>
    )
}