import { Link, useRouteError } from 'react-router-dom';
import './Error.css'

export default function Error() 
{
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Back to home</Link>
    </div>
  );
}
