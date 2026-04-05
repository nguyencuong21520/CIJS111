import './Card.css';

const Card = (props) => {
  const { title, description, lessons, handleCardClick } = props;
  return (
    <article className="card" onClick={() => handleCardClick(title)}>
      <span className="card__tag">{title}</span>

      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>

      <div className="card__footer">
        <span className="card__meta">{lessons} Lessons</span>
        <button className="card__button" type="button">Explore</button>
      </div>
    </article>
  );
};

export default Card;