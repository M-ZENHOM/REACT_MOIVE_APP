import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen space-y-5 justify-center items-center text-3xl">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="btn" onClick={() => navigate("/", { replace: true })}>
        GO TO HOME
      </button>
    </div>
  );
};
