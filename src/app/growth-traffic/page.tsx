import Link from "next/link";
import AlgorithmInsights from "@/components/growth-traffic/AlgorithmInsights";
import GrowthStrategies from "@/components/growth-traffic/GrowthStrategies";
import HotTopics from "@/components/growth-traffic/HotTopics";

export default function GrowthTraffic() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              增长与流量
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl">
              了解小红书算法机制，掌握获取流量和粉丝的策略，让你的内容获得更多曝光
            </p>
          </div>
        </div>
      </section>

      {/* Algorithm Insights Section */}
      <AlgorithmInsights />

      {/* Growth Strategies Section */}
      <GrowthStrategies />

      {/* Hot Topics Section */}
      <HotTopics />

      {/* KOL Levels Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
              创作者成长路径
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              小红书KOL等级与权益
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
              了解小红书创作者的不同等级和达到每个等级可以获得的平台支持
            </p>
          </div>

          <div className="mt-16">
            <div className="relative">
              {/* Desktop version */}
              <div className="hidden sm:block">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-red-300 dark:border-red-700"></div>
                  </div>
                  <div className="relative flex justify-between">
                    <div>
                      <span className="bg-red-100 h-12 w-12 rounded-full flex items-center justify-center text-red-700 text-sm font-medium dark:bg-red-900 dark:text-red-300">
                        1
                      </span>
                    </div>
                    <div>
                      <span className="bg-red-200 h-12 w-12 rounded-full flex items-center justify-center text-red-700 text-sm font-medium dark:bg-red-800 dark:text-red-300">
                        2
                      </span>
                    </div>
                    <div>
                      <span className="bg-red-300 h-12 w-12 rounded-full flex items-center justify-center text-red-700 text-sm font-medium dark:bg-red-700 dark:text-red-300">
                        3
                      </span>
                    </div>
                    <div>
                      <span className="bg-red-400 h-12 w-12 rounded-full flex items-center justify-center text-white text-sm font-medium dark:bg-red-600 dark:text-white">
                        4
                      </span>
                    </div>
                    <div>
                      <span className="bg-red-500 h-12 w-12 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        5
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">新手创作者</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">0-1000粉丝</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">基础数据分析</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">标准发布功能</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">成长创作者</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">1000-5000粉丝</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">进阶数据分析</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">创作者社区加入</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">初步商业机会</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">达人创作者</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">5000-20000粉丝</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">达人认证申请</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">定期流量扶持</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">品牌合作机会</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">商品橱窗</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">优质创作者</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">20000-100000粉丝</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">蓝V认证</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">平台活动优先参与</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">专属客户经理</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">高价品牌合作</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">流量倾斜支持</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">头部创作者</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">10万+粉丝</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">全部优质创作者权益</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">重点流量资源倾斜</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">官方活动优先合作</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">平台高端资源对接</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">独家商务合作机会</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-50 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              准备好探索成功案例了吗？
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              了解美国创作者如何在小红书上取得成功，获取实用的灵感和经验
            </p>
            <div className="mt-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                查看成功案例
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 