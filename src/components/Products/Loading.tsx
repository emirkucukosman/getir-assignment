export const Loading = () => {
  return (
    <div className="bg-white p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-x-6">
        {Array.from({ length: 16 }).map((_, i) => (
          <div className="animate-pulse" key={i}>
            <div className="flex flex-col justify-between gap-2">
              <div className="flex flex-col gap-1">
                <div className="border-2 border-[#F3F0FE] p-4 rounded-[12px]">
                  <div className="bg-[#C4C4C4] h-24"></div>
                </div>
                <span className="bg-primary h-3 w-8 rounded-md"></span>
                <span className="bg-slate-200 h-3 w-16 rounded-md"></span>
              </div>
              <button
                className={`bg-primary w-full h-2 text-white text-sm text-center rounded-sm p-0.5`}
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
