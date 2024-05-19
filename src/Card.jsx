
function Card(props){
    return (
        <div className="card">
            <img className="card-image" src="hhtps://via.placeholder.com/150" alt="Project screnshot"></img>
            <h2 className="card-title">{props.item.name}</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Beatae quo aliquam commodi dolorem natus numquam consectetur neque vitae aspernatur repudiandae?</p>
        </div>
    );
}

export default Card