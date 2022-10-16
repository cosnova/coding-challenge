import Result from "./Result";

const Results = (props) => {
  if (!props.results.length) {
    return <div>Es können keine Produkte angezeigt werden.</div>;
  }
  return (
    <>
      {props.results.map((result, i) => {
        return <Result key={i} {...result} />;
      })}
    </>
  );
}

export default Results;
