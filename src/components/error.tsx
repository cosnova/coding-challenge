type ErrorDivType = {
  message?: string
}
export const ErrorDiv = ({ message }: ErrorDivType) => {
  return (
    <div>
      <h2 className="color-error">Error</h2>
      <div>An unexpected error happened</div>
      <div>This is a code test so please be patient</div>
      message && <div>{message}</div>
    </div>
  );
}
