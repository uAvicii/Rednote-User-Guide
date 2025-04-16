import Link from "next/link";

export default function Resources() {
  const toolsResources = [
    {
      title: "小红书素材模板包",
      description: "30+ 专业设计的模板，包括笔记封面、图文排版和视频封面，适合美国创作者使用",
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
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      buttonText: "获取模板",
      link: "/resources/templates",
      type: "free",
    },
    {
      title: "跨文化内容创作指南",
      description: "深入了解中美文化差异，学习如何创作既保持文化特色又能吸引中国用户的内容",
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      buttonText: "下载PDF",
      link: "/resources/cultural-guide",
      type: "free",
    },
    {
      title: "小红书算法洞察报告",
      description: "基于数据分析的最新算法研究，包括内容推荐机制解析和提升曝光量的实用技巧",
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
      buttonText: "查看报告",
      link: "/resources/algorithm-report",
      type: "premium",
    },
    {
      title: "中文标题和话题生成器",
      description: "输入英文内容主题，自动生成吸引人的中文标题和相关热门话题标签，提高搜索曝光率",
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      buttonText: "使用工具",
      link: "/resources/title-generator",
      type: "premium",
    },
  ];

  const ebooks = [
    {
      title: "小红书完全指南：海外创作者版",
      author: "Marketing Team",
      coverImage: "/images/ebook-1.jpg",
      description: "从注册到变现的全流程详解，专为非中文母语创作者设计的完整操作手册",
      price: "免费",
      link: "/resources/complete-guide",
    },
    {
      title: "小红书变现策略：10种方式",
      author: "Sarah Chen",
      coverImage: "/images/ebook-2.jpg",
      description: "详细介绍10种在小红书平台变现的方法，包括实际案例和操作步骤",
      price: "$19.99",
      link: "/resources/monetization-guide",
    },
    {
      title: "美国视角：文化差异变优势",
      author: "John Zhang",
      coverImage: "/images/ebook-3.jpg",
      description: "如何将文化差异转化为内容创作的独特优势，吸引中国用户的实用指南",
      price: "$9.99",
      link: "/resources/cultural-advantage",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              资源中心
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl">
              获取工具、模板和指南，助您在小红书平台取得成功
            </p>
          </div>
        </div>
      </section>

      {/* Tools & Resources Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-teal-600 dark:text-teal-400 font-semibold tracking-wide uppercase">
              实用工具
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              提升您的小红书体验
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
              使用这些专业工具和资源，让您的小红书内容创作更加高效
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {toolsResources.map((tool, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              >
                {tool.type === "premium" && (
                  <span className="absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    高级
                  </span>
                )}
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-md bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 flex items-center justify-center">
                    {tool.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      {tool.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  {tool.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={tool.link}
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
                      tool.type === "premium"
                        ? "text-white bg-teal-600 hover:bg-teal-700"
                        : "text-teal-700 bg-teal-100 hover:bg-teal-200 dark:bg-teal-900 dark:text-teal-300 dark:hover:bg-teal-800"
                    }`}
                  >
                    {tool.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ebooks Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-teal-600 dark:text-teal-400 font-semibold tracking-wide uppercase">
              电子书
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              深入学习资料
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
              精心编写的指南帮助您全面了解小红书平台运作和内容创作策略
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {ebooks.map((book, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 overflow-hidden rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-56 w-full relative bg-gray-200 dark:bg-gray-700">
                  {/* 实际项目中应替换为真实封面图片 */}
                  <div className="absolute inset-0 flex items-center justify-center">
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      作者: {book.author}
                    </span>
                    <span className="px-2 py-1 text-xs font-bold rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
                      {book.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {book.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                    {book.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={book.link}
                      className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                    >
                      {book.price === "免费" ? "免费下载" : "立即购买"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-teal-600 dark:text-teal-400 font-semibold tracking-wide uppercase">
              热门文章
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              最新小红书趋势与见解
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
              <div className="h-40 bg-gray-200 dark:bg-gray-700" />
              <div className="p-6">
                <div className="flex items-center">
                  <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    平台更新
                  </span>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    2023年7月更新
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white">
                  小红书最新算法变化分析
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  2023年第二季度平台算法调整及对内容创作者的影响...
                </p>
                <Link
                  href="/blog/algorithm-update"
                  className="mt-4 inline-flex text-teal-600 dark:text-teal-400 hover:text-teal-500"
                >
                  阅读更多 →
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
              <div className="h-40 bg-gray-200 dark:bg-gray-700" />
              <div className="p-6">
                <div className="flex items-center">
                  <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                    营销策略
                  </span>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    2023年6月更新
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white">
                  美国品牌的小红书本地化策略
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  如何调整营销信息以适应中国消费者的文化偏好...
                </p>
                <Link
                  href="/blog/localization-strategy"
                  className="mt-4 inline-flex text-teal-600 dark:text-teal-400 hover:text-teal-500"
                >
                  阅读更多 →
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
              <div className="h-40 bg-gray-200 dark:bg-gray-700" />
              <div className="p-6">
                <div className="flex items-center">
                  <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                    内容趋势
                  </span>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    2023年5月更新
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white">
                  2023年下半年小红书内容趋势预测
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  基于数据分析，预测下半年小红书平台的热门内容类型...
                </p>
                <Link
                  href="/blog/content-trends"
                  className="mt-4 inline-flex text-teal-600 dark:text-teal-400 hover:text-teal-500"
                >
                  阅读更多 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-teal-600 dark:bg-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                获取最新小红书洞察
              </h2>
              <p className="mt-3 text-lg text-teal-100 dark:text-teal-200">
                订阅我们的周刊，获取平台更新、内容趋势和成功案例分析
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <form className="sm:flex">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full px-5 py-3 text-base placeholder-gray-500 border border-transparent rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600 dark:focus:ring-offset-teal-800"
                  placeholder="输入您的电子邮箱"
                />
                <button
                  type="submit"
                  className="mt-3 w-full px-5 py-3 text-base font-medium text-white bg-teal-800 dark:bg-teal-900 hover:bg-teal-700 dark:hover:bg-teal-800 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600 dark:focus:ring-offset-teal-800 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  订阅
                </button>
              </form>
              <p className="mt-3 text-sm text-teal-100 dark:text-teal-200">
                我们尊重您的隐私。您可以随时取消订阅。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 