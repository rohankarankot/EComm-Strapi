const Loading = () => {
  return (
    <div>
      <div className="text-center justify-center">
        <div className="flex justify-center items-center">
          <div
            className="spinner-border  animate-spin inline-block w-10 h-10 border-slate-600 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden">.</span>
          </div>
        </div>
        Loading...
      </div>
    </div>
  );
};

export default Loading;
