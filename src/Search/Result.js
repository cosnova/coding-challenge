const formatPrice = (price) => {
  return (""+price).replace('.', ',');
}

const formatCurrency = (currency) => {
  if (!currency) {
    return "EUR";
  }
  return currency;
}

const formatName = (name) => {
  return name.replaceAll("<br>", ' ');
}

const Result = (props) => {
  return (
    <a className="result" href={props.product_link}>
      <div className="result__image-container">
        <img
          className="result__image"
          src={props.api_featured_image}
          alt={props.description} />
      </div>
      <div className="result__name">{formatName(props.name)}</div>
      <div className="result__price">
        {formatPrice(props.price)} {formatCurrency(props.currency)}
      </div>
    </a>
  );
}

export default Result;
