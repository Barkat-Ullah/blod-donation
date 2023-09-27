const ErrorPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-2 mt-10">
      <div className="">
        <img
          className="h-48 w-48 "
          src={'https://i.ibb.co/XkW1hKm/errorpage.png'}
          alt=""
        />
      </div>
      <h2 className="text-5xl font-bold text-center">No Data Found Yet</h2>
    </div>
  );
};

export default ErrorPage;
