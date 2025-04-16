import React from 'react';

export default function GrowthStrategies() {
  const strategies = [
    {
      id: 1,
      title: "一致性发布",
      description: "保持规律的发布频率，建议每周3-5篇，质量远比数量重要",
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "互动引导",
      description: "在内容中加入互动引导，如\"你们觉得呢？\"、\"有更好建议吗？\"等，提高评论率",
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
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "积极回复评论",
      description: "对评论快速回复，尤其是问题和建议，培养粉丝忠诚度并提高账号活跃度",
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
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "跨平台导流",
      description: "利用其他社交平台引导用户关注你的小红书账号，扩大粉丝基础",
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
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "跟踪热门话题",
      description: "关注平台内热门话题和趋势，参与相关讨论，提高内容与当前用户兴趣的关联性",
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
      id: 6,
      title: "内容系列化",
      description: "创建系列内容，让粉丝期待下一篇，例如\"美国生活实况第X期\"、\"美妆测评系列\"等",
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

  const advancedStrategies = [
    {
      title: "用户洞察",
      content: "深入分析你的粉丝画像和数据，了解他们的兴趣点和痛点，创作更有针对性的内容",
    },
    {
      title: "协作与联动",
      content: "与其他创作者合作，进行内容联动或互相推荐，扩大双方的受众群体",
    },
    {
      title: "时间窗口测试",
      content: "测试不同时间发布内容的效果，找到你的受众最活跃的时间段",
    },
    {
      title: "创新内容形式",
      content: "尝试不同类型的内容形式，如投票、测验、挑战等，增加互动性",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
            增长策略
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            提升粉丝与互动的有效方法
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            实施这些策略，为你的小红书账号建立持续增长的基础
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {strategies.map((strategy) => (
            <div
              key={strategy.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 mx-auto mb-4">
                {strategy.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
                {strategy.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 text-center">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              进阶增长策略
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
              适用于已有一定粉丝基础的创作者
            </p>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
            <dl>
              {advancedStrategies.map((strategy, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
                  } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
                >
                  <dt className="text-sm font-medium text-gray-900 dark:text-white">
                    {strategy.title}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600 dark:text-gray-400 sm:mt-0 sm:col-span-2">
                    {strategy.content}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 p-6 border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-600">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                美国创作者特别提示
              </h3>
              <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-200">
                <p>
                  作为美国创作者，在小红书上增长粉丝时，可以强调你的\"美国视角\"作为特色，
                  满足中国用户对美国文化和生活的好奇心。语言上，尝试使用中英文混合的方式，
                  即使中文不流利，这种独特性反而会增加亲和力和辨识度。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 