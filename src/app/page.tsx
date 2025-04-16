import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "了解小红书",
      description: "探索中国最具影响力的生活方式社交平台，了解它的背景和用户群体",
      href: "/what-is-xiaohongshu",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "注册指南",
      description: "详细了解如何注册小红书账号，包括认证流程和个人资料设置",
      href: "/getting-started",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
          />
        </svg>
      ),
    },
    {
      title: "内容创作",
      description: "学习如何创建吸引人的图文和视频内容，以及推荐的创作方向",
      href: "/content-creation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      ),
    },
    {
      title: "增长与流量",
      description: "了解小红书算法逻辑，探索如何获取流量与粉丝",
      href: "/growth-traffic",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "案例研究",
      description: "探索成功案例、创作者经验以及变现方式",
      href: "/case-studies",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "资源中心",
      description: "获取有用的工具、模板和灵感，帮助你在小红书上取得成功",
      href: "/resources",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
  ];

  const articles = [
    {
      id: 1,
      title: "小红书如何影响美国美妆市场",
      excerpt: "探索小红书平台如何影响美国消费者的购买决策和美妆趋势...",
      href: "/blog/xiaohongshu-beauty-influence",
      imageSrc: "/images/beauty-products.jpg",
      imageAlt: "美妆产品展示",
    },
    {
      id: 2,
      title: "成功案例：美国创作者如何在小红书获得百万粉丝",
      excerpt: "了解美国创作者如何突破语言和文化障碍，在小红书平台获得大量追随者...",
      href: "/blog/million-followers-case-study",
      imageSrc: "/images/influencer.jpg",
      imageAlt: "影响力创作者",
    },
    {
      id: 3,
      title: "小红书算法解析：内容推荐机制详解",
      excerpt: "深入了解小红书的算法如何工作，以及如何优化你的内容以获得更多曝光...",
      href: "/blog/algorithm-explained",
      imageSrc: "/images/algorithm.jpg",
      imageAlt: "算法图表",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                掌握小红书
                <br />
                <span className="text-yellow-300">开拓中国市场</span>
              </h1>
              <p className="mt-6 text-xl max-w-3xl">
                全面了解中国最具影响力的社交电商平台，学习如何创建内容、增长粉丝并实现商业价值。
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/getting-started" legacyBehavior>
                  <a className="bg-white text-red-600 font-medium py-3 px-6 rounded-lg text-center shadow-lg hover:bg-gray-100 transition duration-300">
                    开始学习
                  </a>
                </Link>
                <Link href="/what-is-xiaohongshu" legacyBehavior>
                  <a className="bg-transparent border border-white text-white font-medium py-3 px-6 rounded-lg text-center hover:bg-white/10 transition duration-300">
                    了解更多
                  </a>
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center">
              <div className="rounded-lg shadow-xl bg-white p-4 transform rotate-2">
                <div className="rounded overflow-hidden">
                  <Image
                    src="/xiaohongshu-mockup.png"
                    alt="小红书应用界面"
                    width={350}
                    height={600}
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
              功能模块
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              全面了解小红书平台
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
              从入门到精通，我们提供了完整的学习路径，帮助你在小红书上取得成功
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="relative group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-200 dark:border-gray-700"
                >
                  <div>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      {feature.icon}
                    </div>
                    <h3 className="mt-5 text-lg font-medium text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-4 text-red-500 flex items-center text-sm font-medium mt-auto">
                    了解更多
                    <svg
                      className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
              精选内容
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              最新资讯与深度解析
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-900"
              >
                <div className="flex-shrink-0 h-48 w-full relative">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <svg
                      className="h-12 w-12 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <Link href={article.href} className="block">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-red-500">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                        {article.excerpt}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={article.href}
                      className="text-red-500 hover:text-red-600 flex items-center text-sm font-medium"
                    >
                      阅读全文
                      <svg
                        className="ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-500 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">准备好开始你的小红书之旅了吗？</span>
            <span className="block text-yellow-300">现在就开始学习吧！</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/getting-started"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50"
              >
                开始学习
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
