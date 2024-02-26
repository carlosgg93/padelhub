const HomeView = () => (
  <section className="dark:bg-primary-0 bg-primary-900 hero flex flex-col justify-center overflow-y-hidden overflow-x-hidden col-start-1 col-end-4 px-5 -ml-5 -mr-5 md:px-8 md:-ml-8 md:-mr-8">
    <div className="w-full max-w-container mx-auto 3xl:max-w-[1800px]">
      <h1 className="text-6xl font-bold mb-6 text-primary-200 dark:text-primary-800">
        Instant Deployments, <br />
        Effortless Scale
      </h1>
      <p className="text-xl text-gray-500 mb-12 max-w-xl">Railway is the cloud for building, shipping, and monitoring applications. No Platform Engineer required.</p>
      <div className="flex space-x-6 items-center">
        <a className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 border-pink-500 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 py-2 px-3 rounded-md text-base leading-6 space-x-3 !rounded-lg !py-3 !px-11 h-[50px] text-white font-semibold shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] hover:bg-[linear-gradient(76.35deg,_#660AC2_15.89%,_#850AC2_89.75%)] focus:bg-[linear-gradient(76.35deg,_#4D0891_15.89%,_#630891_89.75%)]" href="/new">
          <span className="inline-block">Start a New Project</span>
        </a>
      </div>
    </div>
    <img src="/assets/images/computer-city-lines--dark.svg" alt="" className="absolute -z-1 right-0 hidden lg:block lg:right-[40%] 3xl:right-[50%]" />
    <img src="/assets/images/deployments-sc--dark.svg" alt="" className="absolute -z-1 top-20 hidden lg:block lg:left-[60%] h-[65vh] 3xl:left-[50%] 3xl:h-[85vh]" />
  </section>
);

export default HomeView;
