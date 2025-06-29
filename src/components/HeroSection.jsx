import { useEffect } from "react";
import TypeIt from "typeit";

function BackgroundPattern() {
  return (
    <svg
      className="absolute inset-0 -z-10 h-full w-full stroke-white/10"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="pattern"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
          x="50%"
          y="-1"
        >
          <path d="M.5 200V.5H200" fill="none"></path>
        </pattern>
      </defs>
      <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          strokeWidth="0"
        ></path>
      </svg>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill="url(#pattern)"
      ></rect>
    </svg>
  );
}

function DecorativeShape() {
  return (
    <div
      className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      aria-hidden="true"
    >
      <div
        className="aspect-[1108/632] w-[69.25rem] BlurOrnament opacity-20"
        style={{
          clipPath:
            "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
        }}
      ></div>
    </div>
  );
}

export default function HeroSection() {
  useEffect(() => {
    new TypeIt("#typeit-output", {
      speed: 100,
      breakLines: false,
      nextStringDelay: 1500,
      cursor: true,
      cursorChar: "|",
    }).go();
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 min-h-screen w-full flex items-center justify-center">
      {/* SVG Background Pattern */}
      <BackgroundPattern />

      {/* Decorative Clipped Shape */}
      <DecorativeShape></DecorativeShape>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none flex flex-col lg:flex-row items-center gap-x-16 gap-y-10">
          {/* Left Content */}
          <div className="flex-1">
            {/* <img
              className="h-12 w-auto"
              src="https://cdn-icons-png.flaticon.com/512/2317/2317360.png"
              alt="Game Guide Collection"
            /> */}
            <h1 className="mt-10 text-3xl font-bold italic tracking-tight text-white sm:text-6xl">
              <span id="typeit-output" className="title">
                Play Games Your Way, Without Limits
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join millions of players using WeMod to customize their favorite
              games with thousands of free mods, maps, and trainers.
            </p>
          </div>

          {/* Right Content (Image) */}
          <div className="flex-1">
            <div className="relative">
              <img
                className="w-full rounded-xl shadow-2xl max-w-full h-auto"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                width="2432"
                height="1442"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Gradient overlay at bottom for better text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
}
