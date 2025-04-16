import Image from "next/image";
import Link from "next/link";

export default function WhatIsXiaohongshu() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              什么是小红书
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl">
              了解中国最具影响力的社交电商平台，探索它的背景、用户群体和内容特色
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              小红书简介
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              小红书（英文名：RED 或 Xiaohongshu，简称 XHS）是中国领先的生活方式分享社区和电商平台，创立于2013年。平台以"标记我的生活"为口号，鼓励用户分享真实的生活体验、购物心得和旅游经历等。
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              小红书最初是作为海外购物攻略分享社区起家，逐渐发展成为涵盖美妆、时尚、健康、旅游、美食、家居等多领域的综合性生活内容平台。截至最新数据，小红书拥有超过5亿注册用户，月活跃用户超过2亿，其中超过70%是90后和00后年轻用户。
            </p>

            <div className="my-8 bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-700 dark:text-red-300">
                小红书名称含义
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                "红书"原意是指毛泽东语录，寓意为指导人们生活的书籍。小红书创始人希望打造一个内容能够指导用户消费决策的平台，用户之间互相分享购物和生活经验，因此取名"小红书"。
              </p>
            </div>

            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">平台特点</h3>
                <ul className="mt-4 space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      <strong>UGC内容主导：</strong>用户生成内容为主，强调真实性和个人体验
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      <strong>笔记+短视频：</strong>图文笔记与短视频并重，提供多元化内容形式
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      <strong>社交+电商：</strong>整合社交分享与电商功能，实现"种草"到购买的闭环
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      <strong>垂直领域：</strong>美妆、时尚、旅游、美食等垂直领域内容丰富
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      <strong>算法推荐：</strong>基于兴趣智能推荐内容，提高用户发现效率
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">用户群体</h3>
                <ul className="mt-4 space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <span>
                      <strong>年轻女性主导：</strong>约70%的用户为女性，以90后和00后为主
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <span>
                      <strong>城市中产：</strong>一二线城市中产消费者占比高
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <span>
                      <strong>高教育水平：</strong>大学及以上学历占比超过80%
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <span>
                      <strong>高消费能力：</strong>用户平均消费能力高于其他社交平台
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <span>
                      <strong>KOC/KOL：</strong>大量Key Opinion Consumers和Key Opinion Leaders活跃于平台
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12">
              与Instagram和Pinterest的对比
            </h2>
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      特点
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      小红书
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Instagram
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Pinterest
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      核心功能
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      社区+电商一体化
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      社交分享为主
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      灵感收集与发现
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      内容形式
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      长图文+视频
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      图片+短视频
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      图片为主
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      内容特点
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      详细购物体验和攻略
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      生活分享和社交互动
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      创意灵感和收藏
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      商业模式
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      自营电商+广告+带货
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      广告+电商标签
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      广告+商品推荐
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12">
              为什么美国用户应该关注小红书？
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  进入中国市场的窗口
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  小红书是了解中国消费者喜好和市场趋势的绝佳渠道，对希望进入中国市场的品牌和创业者极具价值。通过观察中国用户的讨论和评价，可以获取宝贵的市场洞察。
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  新兴营销渠道
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  小红书已成为许多国际品牌在中国的重要营销渠道，通过KOL合作、官方账号运营等方式，可以高效触达中国的年轻消费群体，建立品牌影响力。
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  跨文化创作机会
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  作为美国创作者，在小红书分享文化差异、生活方式等内容，往往能获得中国用户的高度关注，提供了独特的内容创作和变现机会。
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  内容创新灵感源
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  小红书上涌现的创新内容形式和营销方式，可以为美国创作者和营销人员提供新的创意灵感，丰富自身的内容创作策略。
                </p>
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
              准备好探索小红书了吗？
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              了解如何注册账号并开始你的小红书之旅
            </p>
            <div className="mt-8">
              <Link
                href="/getting-started"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                开始入门指南
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 