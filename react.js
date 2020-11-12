
function Car(props){
  return (
      <div className="card">
        <div className="card-img">
            <img src={props.car.img} alt={props.car.name}/>
        </div>
        <h3>{props.car.name}</h3>
        <p>{props.car.price}$</p>
      </div>
  )
}



ReactDOM.render(<Car car={{ "name": "BMW M2 Coupe", "price": "20000$", "img": "https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg" }} /> , document.getElementById('root'))