
export default function Prices({skus, selectedOption}){

    return skus.map(s => <p key={s.id} className={s.id === selectedOption ? "selected" : null }>{s.price}</p>)
}