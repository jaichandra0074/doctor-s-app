
import './styles.css'
function Doctorcard({name,specialization,gender}) {
  return (
    <div className='doctorcard'>
        <div>
        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500" width='100' height='100' alt="" />
        </div>
        <h1>{name}</h1>
        <div>{specialization}</div>
        <p>{gender}</p>
        <button>View more</button>
    </div>
  )
}

export default Doctorcard