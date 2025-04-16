import React from 'react';

export default function PublishingTips() {
  const checklist = [
    {
      id: 1,
      title: "选择合适的封面",
      description: "选择最能代表内容精髓的图片作为封面，避免过度处理导致与内容实际效果不符",
      completed: false,
    },
    {
      id: 2,
      title: "撰写吸引人的标题",
      description: "包含关键词，长度控制在15-20字，适当使用emoji增加吸引力",
      completed: false,
    },
    {
      id: 3,
      title: "精心编辑正文内容",
      description: "内容结构清晰，段落间有逻辑，重点突出，适当添加表情符号增强表达力",
      completed: false,
    },
    {
      id: 4,
      title: "添加合适的话题和标签",
      description: "选择3-5个相关话题，包括热门话题和垂直领域话题，提高被发现的几率",
      completed: false,
    },
    {
      id: 5,
      title: "地点标记（如适用）",
      description: "对于与地点相关的内容，添加准确的地理位置标记，提高本地用户发现率",
      completed: false,
    },
    {
      id: 6,
      title: "商品链接（如适用）",
      description: "对于提及产品的内容，添加商品链接以便用户直接购买，也可增加佣金收益",
      completed: false,
    },
    {
      id: 7,
      title: "选择最佳发布时间",
      description: "分析目标用户的活跃时间，通常晚上8点至10点和中午12点是高峰期",
      completed: false,
    },
  ];

  const optimizationTips = [
    {
      id: 1,
      title: "关注互动数据",
      content: "定期查看笔记的浏览量、点赞数、收藏数和评论数，分析表现较好的内容特点",
    },
    {
      id: 2,
      title: "回复评论",
      content: "及时回复粉丝评论，提高互动率和用户粘性，平台算法也会优先推荐互动活跃的内容",
    },
    {
      id: 3,
      title: "持续优化内容",
      content: "根据数据反馈不断调整内容策略，保持内容质量的持续提升",
    },
    {
      id: 4,
      title: "保持发布频率",
      content: "建立规律的发布节奏，如每周固定几天发布，有助于培养用户习惯和提高账号权重",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
            发布指南
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            内容发布前的检查清单
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            确保这些关键要素都已准备妥当，提高你的内容质量和表现
          </p>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {checklist.map((item) => (
              <li key={item.id} className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-red-500">{item.id}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              发布后的优化策略
            </h3>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              内容发布后，持续跟踪和优化以提高表现
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {optimizationTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center text-red-600 dark:text-red-300 font-semibold">
                    {tip.id}
                  </div>
                  <h4 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                    {tip.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
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
                发布提示
              </h3>
              <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                美国创作者发布内容时，尤其要注意避免涉及中国政治敏感话题、宗教内容以及不符合主流价值观的内容。如果你使用中英文混合创作，确保中文部分没有语法错误或不当表达，必要时可请中文使用者帮助检查。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 