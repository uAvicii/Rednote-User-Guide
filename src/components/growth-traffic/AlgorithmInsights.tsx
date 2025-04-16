import React from 'react';

export default function AlgorithmInsights() {
  const factors = [
    {
      id: 1,
      name: "内容质量分",
      description: "基于用户互动行为评估内容质量，包括完播率、点赞率、收藏率、评论率等",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "用户画像匹配",
      description: "将内容推荐给历史兴趣、行为习惯相似的用户群体",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "内容新鲜度",
      description: "新发布的内容获得初始推荐机会，内容持续更新的账号有更高权重",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      name: "话题和关键词",
      description: "包含热门话题和关键词的内容更易被推荐，但需保持内容相关性",
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
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      name: "账号权重",
      description: "历史表现良好、互动频繁、粉丝活跃度高的账号获得更多推荐机会",
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      name: "内容多样性",
      description: "算法会控制同类内容推荐比例，保持用户Feed的多样性和新鲜感",
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
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
            算法洞察
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            了解小红书推荐机制
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            掌握小红书算法的核心因素，优化你的内容以获得更多曝光
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {factors.map((factor) => (
              <div
                key={factor.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-md bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 flex items-center justify-center">
                    {factor.icon}
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900 dark:text-white">
                    {factor.name}
                  </h3>
                </div>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              推荐流程解析
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              了解小红书内容如何从发布到被大量推荐的典型路径
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-red-300 dark:border-red-700"></div>
            </div>
            <div className="relative flex justify-between">
              <div>
                <span className="bg-red-500 h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  1
                </span>
              </div>
              <div>
                <span className="bg-red-500 h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  2
                </span>
              </div>
              <div>
                <span className="bg-red-500 h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  3
                </span>
              </div>
              <div>
                <span className="bg-red-500 h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  4
                </span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">初始曝光</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  新发布内容获得小规模推荐，推送给少量相似兴趣用户
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">初步评估</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  根据初始受众反馈（停留时间、点赞、收藏等）评估内容质量
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">扩大推荐</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  表现良好的内容获得更大范围推荐，接触更多相似和边缘兴趣用户
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">持续监测</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  持续评估内容表现，可能进入热门/上升期，或逐渐减少曝光
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
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
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800 dark:text-red-300">
                重要提示
              </h3>
              <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                小红书算法经常调整，本页信息基于观察和公开资料。最佳策略是专注高质量内容创作，
                同时分析自己表现良好的内容共性，持续优化而非过度专注算法规则。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 