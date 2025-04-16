import React from 'react';

export default function HotTopics() {
  const topics = [
    {
      id: 1,
      name: "#美式生活",
      popularity: "高",
      description: "分享美国日常生活、文化差异和特色场所",
      examples: ["美国超市必买清单", "美国大学校园生活", "美式家庭晚餐"],
    },
    {
      id: 2,
      name: "#地道美食",
      popularity: "高",
      description: "介绍美国地道美食、餐厅推荐或家庭烹饪",
      examples: ["美国南方炸鸡秘方", "纽约最佳汉堡top5", "感恩节大餐准备"],
    },
    {
      id: 3,
      name: "#美国购物",
      popularity: "非常高",
      description: "美国购物经验、折扣信息、开箱评测",
      examples: ["美国药妆店必买", "黑五折扣实时更新", "美国超市好物分享"],
    },
    {
      id: 4,
      name: "#英语学习",
      popularity: "中高",
      description: "分享英语学习方法、口语技巧、日常表达",
      examples: ["美式俚语大全", "一周学10个地道表达", "如何纠正中式英语"],
    },
    {
      id: 5,
      name: "#留学生活",
      popularity: "高",
      description: "美国留学经验、申请攻略、校园生活",
      examples: ["美国大学申请流程", "留学生省钱妙招", "如何适应美国学习方式"],
    },
    {
      id: 6,
      name: "#美妆种草",
      popularity: "非常高",
      description: "美国美妆产品评测、使用心得、购买推荐",
      examples: ["美国平价好用底妆", "美国超市彩妆宝藏", "美妆博主同款"], 
    },
  ];

  const seasonalTopics = [
    {
      season: "春季",
      topics: ["春假旅行", "复活节庆祝", "春季穿搭", "清明节vs美国纪念日"],
    },
    {
      season: "夏季",
      topics: ["独立日庆典", "夏日降温", "美国夏令营", "美国国家公园游"],
    },
    {
      season: "秋季",
      topics: ["感恩节传统", "万圣节装扮", "开学季购物", "秋季美景"],
    },
    {
      season: "冬季",
      topics: ["圣诞节装饰", "冬季取暖妙招", "美式新年庆祝", "冬季穿搭"],
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
            热门话题
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            美国创作者热门话题指南
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            了解中国用户最感兴趣的话题，选择合适的标签提高内容曝光
          </p>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50 dark:bg-gray-800">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              热门话题标签分析
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
              适合美国创作者使用的热门话题标签及内容建议
            </p>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
            <div className="hidden sm:block">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        话题标签
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        热度
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        内容方向
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        内容示例
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {topics.map((topic) => (
                      <tr key={topic.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600 dark:text-red-400">
                          {topic.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          {topic.popularity}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                          {topic.description}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                          <ul className="list-disc pl-5">
                            {topic.examples.map((example, idx) => (
                              <li key={idx}>{example}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile view */}
            <div className="block sm:hidden">
              {topics.map((topic) => (
                <div key={topic.id} className="px-4 py-5 border-b border-gray-200 dark:border-gray-700">
                  <div className="text-red-600 dark:text-red-400 font-medium mb-2">{topic.name}</div>
                  <div className="grid grid-cols-3 gap-4 mb-2">
                    <div className="col-span-1 text-sm font-medium text-gray-600 dark:text-gray-300">热度</div>
                    <div className="col-span-2 text-sm text-gray-600 dark:text-gray-300">{topic.popularity}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-2">
                    <div className="col-span-1 text-sm font-medium text-gray-600 dark:text-gray-300">内容方向</div>
                    <div className="col-span-2 text-sm text-gray-600 dark:text-gray-300">{topic.description}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 text-sm font-medium text-gray-600 dark:text-gray-300">内容示例</div>
                    <div className="col-span-2 text-sm text-gray-600 dark:text-gray-300">
                      <ul className="list-disc pl-5">
                        {topic.examples.map((example, idx) => (
                          <li key={idx}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              季节性热门话题
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              根据不同季节选择热门话题，提高内容时效性
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalTopics.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {item.season}
                </h4>
                <ul className="space-y-2">
                  {item.topics.map((topic, topicIdx) => (
                    <li
                      key={topicIdx}
                      className="flex items-start"
                    >
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
                      <span className="ml-2 text-gray-600 dark:text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
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
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300">
                话题使用技巧
              </h3>
              <div className="mt-2 text-sm text-blue-700 dark:text-blue-200">
                <ul className="list-disc space-y-1 pl-5">
                  <li>每篇内容使用3-5个相关话题标签，避免过度堆砌</li>
                  <li>将最热门的话题放在前几个位置</li>
                  <li>结合热门话题和垂直领域话题，提高精准推荐机会</li>
                  <li>定期关注小红书热搜榜和热门话题变化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 