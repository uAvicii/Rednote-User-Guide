import Link from "next/link";
import ContentTips from "@/components/content-creation/ContentTips";
import PopularCategories from "@/components/content-creation/PopularCategories";
import PublishingTips from "@/components/content-creation/PublishingTips";

export default function ContentCreation() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              内容创作
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl">
              学习如何在小红书创建吸引人的图文和视频内容，掌握成功的创作技巧
            </p>
          </div>
        </div>
      </section>

      {/* Content Format Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
              内容形式
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              小红书支持的内容类型
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
              了解不同类型内容的特点和适用场景，选择最适合你的表达方式
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* 图文内容 */}
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-red-100 dark:bg-red-900 rounded-md p-3">
                      <svg
                        className="h-8 w-8 text-red-600 dark:text-red-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="ml-5 text-2xl font-bold text-gray-900 dark:text-white">图文笔记</h3>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      图文笔记是小红书最传统和受欢迎的内容形式，通常由多张高质量图片和详细文字说明组成。
                    </p>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">适用场景：</h4>
                    <ul className="mt-2 space-y-2 text-base text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5"
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
                        <span className="ml-2">产品开箱和评测</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5"
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
                        <span className="ml-2">美食食谱和步骤分解</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5"
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
                        <span className="ml-2">穿搭展示与搭配建议</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5"
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
                        <span className="ml-2">旅行攻略和景点介绍</span>
                      </li>
                    </ul>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">优点：</h4>
                    <ul className="mt-2 space-y-2 text-base text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="ml-2">制作门槛相对较低，不需要专业视频设备</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="ml-2">用户可以按需浏览，消费时间较灵活</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="ml-2">更适合展示详细信息和多角度展示</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 视频内容 */}
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-red-100 dark:bg-red-900 rounded-md p-3">
                      <svg
                        className="h-8 w-8 text-red-600 dark:text-red-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="ml-5 text-2xl font-bold text-gray-900 dark:text-white">视频内容</h3>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      小红书视频内容通常为竖屏短视频，时长建议控制在30秒至3分钟之间，是近年来快速增长的内容形式。
                    </p>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">适用场景：</h4>
                    <ul className="mt-2 space-y-2 text-base text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5"
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
                        <span className="ml-2">美妆教程和产品使用演示</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5"
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
                        <span className="ml-2">快速DIY和生活小技巧</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5"
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
                        <span className="ml-2">健身动作展示和运动教程</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5"
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
                        <span className="ml-2">场景Vlog和生活记录</span>
                      </li>
                    </ul>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">优点：</h4>
                    <ul className="mt-2 space-y-2 text-base text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="ml-2">更具吸引力和沉浸感，易于传达情感</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="ml-2">算法倾向于推荐视频内容，曝光机会更多</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="ml-2">适合展示动态过程和前后对比</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tips Section */}
      <ContentTips />

      {/* Popular Categories Section */}
      <PopularCategories />

      {/* Publishing Tips Section */}
      <PublishingTips />

      {/* CTA Section */}
      <section className="bg-red-50 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              准备好提升你的流量和粉丝数了吗？
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              了解小红书算法如何工作，以及如何优化你的内容获得更多曝光
            </p>
            <div className="mt-8">
              <Link
                href="/growth-traffic"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                学习增长策略
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 