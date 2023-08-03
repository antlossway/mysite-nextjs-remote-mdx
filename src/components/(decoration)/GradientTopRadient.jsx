import React from "react";

const GradientTopRadient = () => {
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
      {/* <div
        class="absolute top-0 z-[-2] h-screen w-screen bg-white  bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]
        dark:inset-0 dark:bg-slate-950
      dark:bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"
      ></div> */}

      <div class="absolute top-0 -z-10 h-full w-full bg-white dark:bg-slate-950">
        <div
          class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]
        "
        ></div>
      </div>
    </div>
  );
};

export default GradientTopRadient;
