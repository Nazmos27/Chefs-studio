import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center my-40">
      <h1 className="md:text-5xl text:2xl">Oops!</h1>
      <p className="md:text-2xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-red-600">
        <i>{error.statusText || error.message}</i>
      </p>
      <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1683219271~exp=1683219871~hmac=96d75d4fdedd535d51c9e5636b573ee89f21b89d20c18c119926eded099a7cc6" alt="" className="mx-auto h-64 w-60" />
    </div>
  );
}