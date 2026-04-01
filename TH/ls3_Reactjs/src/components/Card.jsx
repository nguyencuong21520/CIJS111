import './card.css';
const Card = (props) =>{
    const {name, classN, goal} = props;
    return (
    <div className="card_wrapper">
        <p>Tôi tên là {name}</p>
        <p>Học lớp {classN}</p>
        <p>Tôi muốn thành {goal}</p>
    </div>
    )
}
export default Card;