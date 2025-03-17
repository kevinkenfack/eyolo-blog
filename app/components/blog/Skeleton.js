const Skeleton = ({ dark, content }) => {
  return (
    <article className={`${dark ? "invert" : ""} relative user-select-none`}>
      <div
        className={`h-[300px] bg-white/5 rounded-xl md:rounded-2xl grid place-content-center text-white `}
      >
        <span className="opacity-50 text-balance px-16 text-center">
          {content}
        </span>
      </div>

      <div className="mt-6 text-white">
        <span className="text-sm flex gap-2 items-center mb-3 uppercase">
          {/* prettier-ignore */}
          <span className="block w-5 h-5 bg-white/5 rounded-md"></span>
          <span className="block w-1/4 h-5 bg-white/5 rounded-md"></span>
        </span>

        <span className="block w-full h-8 bg-white/5 mb-2 rounded-lg"></span>
        <span className="block w-10/12 h-8 bg-white/5 rounded-lg"></span>

        <ul className="flex flex-wrap items-center gap-3 gap-y-1 uppercase text-sm my-6 text-white/75">
          <li className="flex items-center">
            <div className="h-6 w-6 border border-white/20 rounded-full mr-2 bg-white/5"></div>
            <span className="block w-20 h-5 bg-white/5 rounded-md"></span>
          </li>
          <li className="opacity-20">•</li>
          <li className="w-24 h-5 bg-white/5 rounded-md"></li>
        </ul>
      </div>
    </article>
  );
};

export default Skeleton;
