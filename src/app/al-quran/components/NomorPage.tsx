const NomerPage = ({nomer} : {nomer: string}) => {
  return (
    <>
      <div className="relative flex-shrink-0">
        <div className="w-8 h-8 relative flex items-center justify-center">
          <div className="absolute inset-0 border-2 rounded-full opacity-80 border-amber-500"></div>
          <div className="absolute inset-1 border rounded-full opacity-60 border-amber-400"></div>
          <span className="font-semibold text-xs z-10 text-amber-600">
            {nomer}
          </span>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 rounded-full opacity-60 bg-amber-500"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 rounded-full opacity-60 bg-amber-500"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 rounded-full opacity-60 bg-amber-500"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 rounded-full opacity-60 bg-amber-500"></div>
        </div>
      </div>
    </>
  );
};

export default NomerPage;
