import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const trendingData = [
  {
    title: "Trò chơi con mực",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzlEZPpims6Ut5MO3H9E7hOkan0K0icy5njPOPKOPhtRTsk7O3TpR2BE8D4Q95y9oeGw&usqp=CAU",
    rank: 1,
  },
  {
    title: "Không dung thứ",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABftCIwxt7Pd_MQgxJK6_9pW64-zubne9zUgFc5ctfPggmhbbA7e1C_sZ1Ku5xhdubqs7SdmDOdkv8XKy2YKHF_OXkVC4NZpeWivj8K5qbAn14h6xkzhLgIt_aJPxHWxlg7ZZ-A.webp?r=281",
    rank: 2,
  },
  {
    title: "Thợ săn quỷ Kpop",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWImL8r63WclxQbHyy8b_I3I0ux46Mf1SIcSC-1A_5J_oLY2kq56UeGFbnqrK7m6-8PAtnSP-HqWJBbqsf7-qQF0xFE_qWXjQB-cPoGRYI9DRDIxt-WffcqHPp-u07RE_hdn3g.webp?r=066",
    rank: 3,
  },
  {
    title: "Kingdom",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWImL8r63WclxQbHyy8b_I3I0ux46Mf1SIcSC-1A_5J_oLY2kq56UeGFbnqrK7m6-8PAtnSP-HqWJBbqsf7-qQF0xFE_qWXjQB-cPoGRYI9DRDIxt-WffcqHPp-u07RE_hdn3g.webp?r=066",
    rank: 4,
  },
  {
    title: "Hometown's Embrace",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTZP8s6mMahZnbf8oOi_TzpBIqI-l6ozk7iPkotWnlewtf-ZQiqABi2nFfVWdHbx9sl-G4O3Rz6WfV6q_4-WrIP0ZeoZyh39MYPepraUNS2VogVSu9-cp6h4CXvskemDfGZ5Bg.webp?r=ced",
    rank: 5,
  },
  {
    title: "All of Us Are Dead",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABftCIwxt7Pd_MQgxJK6_9pW64-zubne9zUgFc5ctfPggmhbbA7e1C_sZ1Ku5xhdubqs7SdmDOdkv8XKy2YKHF_OXkVC4NZpeWivj8K5qbAn14h6xkzhLgIt_aJPxHWxlg7ZZ-A.webp?r=281",
    rank: 6,
  },
  {
    title: "Sweet Home",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWImL8r63WclxQbHyy8b_I3I0ux46Mf1SIcSC-1A_5J_oLY2kq56UeGFbnqrK7m6-8PAtnSP-HqWJBbqsf7-qQF0xFE_qWXjQB-cPoGRYI9DRDIxt-WffcqHPp-u07RE_hdn3g.webp?r=066",
    rank: 7,
  },
  {
    title: "Hellbound",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTZP8s6mMahZnbf8oOi_TzpBIqI-l6ozk7iPkotWnlewtf-ZQiqABi2nFfVWdHbx9sl-G4O3Rz6WfV6q_4-WrIP0ZeoZyh39MYPepraUNS2VogVSu9-cp6h4CXvskemDfGZ5Bg.webp?r=ced",
    rank: 8,
  },
  {
    title: "My Name",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABftCIwxt7Pd_MQgxJK6_9pW64-zubne9zUgFc5ctfPggmhbbA7e1C_sZ1Ku5xhdubqs7SdmDOdkv8XKy2YKHF_OXkVC4NZpeWivj8K5qbAn14h6xkzhLgIt_aJPxHWxlg7ZZ-A.webp?r=281",
    rank: 9,
  },
  {
    title: "D.P.",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWImL8r63WclxQbHyy8b_I3I0ux46Mf1SIcSC-1A_5J_oLY2kq56UeGFbnqrK7m6-8PAtnSP-HqWJBbqsf7-qQF0xFE_qWXjQB-cPoGRYI9DRDIxt-WffcqHPp-u07RE_hdn3g.webp?r=066",
    rank: 10,
  },
];

export default function NewReleases() {
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine items per page based on screen size
  const getItemsPerPage = () => {
    if (windowWidth >= 1536) return 6; // 2xl screens
    if (windowWidth >= 1280) return 5; // xl screens
    if (windowWidth >= 1024) return 4; // lg screens
    if (windowWidth >= 768) return 4; // md screens
    return 3; // sm and smaller screens
  };

  const ITEMS_PER_PAGE = getItemsPerPage();
  const totalPages = Math.ceil(trendingData.length / ITEMS_PER_PAGE);

  const canScrollLeft = currentPage > 0;
  const canScrollRight = currentPage < totalPages - 1;

  // Reset to first page when items per page changes
  useEffect(() => {
    setCurrentPage(0);
  }, [ITEMS_PER_PAGE]);

  // Handle scroll left
  const scrollLeft = () => {
    if (canScrollLeft && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage((prev) => prev - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Handle scroll right
  const scrollRight = () => {
    if (canScrollRight && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Calculate transform value for smooth sliding
  const getTransformValue = () => {
    const translateX = -currentPage * 100;
    return `translateX(${translateX}%)`;
  };

  return (
    <div className="bg-black text-white" data-uia="trending-now">
      <section className="px-4 py-8 sm:px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="relative">
          {/* Header with Navigation */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              New Releases
            </h2>
            {totalPages > 1 && (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-400">
                  {currentPage + 1} / {totalPages}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={scrollLeft}
                    disabled={!canScrollLeft || isTransitioning}
                    className={`p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 ${
                      !canScrollLeft || isTransitioning
                        ? "opacity-30"
                        : "hover:scale-110"
                    }`}
                    aria-label="Trang trước"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                  <button
                    onClick={scrollRight}
                    disabled={!canScrollRight || isTransitioning}
                    className={`p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 ${
                      !canScrollRight || isTransitioning
                        ? "opacity-30"
                        : "hover:scale-110"
                    }`}
                    aria-label="Trang sau"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Content Container*/}
          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: getTransformValue() }}
            >
              {/* Create pages */}
              {Array.from({ length: totalPages }, (_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                    {trendingData
                      .slice(
                        pageIndex * ITEMS_PER_PAGE,
                        pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
                      )
                      .map((item, index) => (
                        <div
                          key={`${pageIndex}-${index}`}
                          className="group transition-all duration-500 ease-out transform hover:z-10 relative"
                        >
                          <div className="relative overflow-hidden rounded-2xl bg-white transition-all duration-300">
                            <div className="aspect-[3/4] overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <h3 className="font-semibold text-lg">
                                {item.title}
                              </h3>
                              <p className="text-sm text-gray-200">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
