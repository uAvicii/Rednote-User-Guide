import Link from "next/link";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "美妆品牌成功案例：从零到百万粉丝",
      description:
        "一位美国美妆博主如何在小红书平台积累100万+粉丝，并与多个知名品牌建立合作关系的成功之路",
      image: "/images/case-study-1.jpg",
      tags: ["美妆", "KOL成长", "品牌合作"],
      readTime: "8分钟阅读",
    },
    {
      id: 2,
      title: "留学顾问的精准引流实践",
      description:
        "美国教育咨询机构如何通过小红书平台获取高质量留学咨询线索，实现业务增长300%的案例分析",
      image: "/images/case-study-2.jpg",
      tags: ["教育行业", "B2C营销", "服务推广"],
      readTime: "10分钟阅读",
    },
    {
      id: 3,
      title: "美国本土产品进入中国市场",
      description:
        "一家美国护肤品牌如何利用小红书平台测试产品反馈、建立品牌知名度并最终成功进入中国市场",
      image: "/images/case-study-3.jpg",
      tags: ["品牌出海", "市场测试", "产品营销"],
      readTime: "12分钟阅读",
    },
    {
      id: 4,
      title: "旅游博主的变现之路",
      description:
        "分享美国旅游体验的博主如何通过小红书平台实现多元化收入，包括品牌合作、导游服务和电子书销售",
      image: "/images/case-study-4.jpg",
      tags: ["旅游行业", "内容变现", "多元收入"],
      readTime: "7分钟阅读",
    },
    {
      id: 5,
      title: "美食达人的跨文化营销策略",
      description:
        "一位美国厨师如何将美式家常菜融入中国饮食文化，在小红书积累超过50万粉丝并推出自己的调料品牌",
      image: "/images/case-study-5.jpg",
      tags: ["美食", "文化融合", "产品研发"],
      readTime: "9分钟阅读",
    },
    {
      id: 6,
      title: "英语学习内容的爆发式增长",
      description:
        "分享如何通过创新的英语学习内容在3个月内从0增长到30万粉丝，并与多家教育机构建立长期合作",
      image: "/images/case-study-6.jpg",
      tags: ["语言学习", "教育内容", "快速增长"],
      readTime: "6分钟阅读",
    },
  ];

  const expertInsights = [
    {
      name: "Sarah Johnson",
      title: "美妆KOL | 250万小红书粉丝",
      quote:
        "在小红书，真实性比完美更重要。我的粉丝更喜欢看到真实的产品使用体验，而不是过度美化的效果。",
      image: "/images/expert-1.jpg",
    },
    {
      name: "Michael Chen",
      title: "跨境电商顾问 | 前小红书运营总监",
      quote:
        "许多美国品牌在进入小红书时犯的最大错误是直接翻译营销内容，而不是根据中国用户的文化偏好重新创作。",
      image: "/images/expert-2.jpg",
    },
    {
      name: "Li Wei",
      title: "内容创业者 | 《小红书营销指南》作者",
      quote:
        "小红书的算法非常看重早期互动率。一个获得高互动的内容在发布后48小时内可能就会被推送给数万人。",
      image: "/images/expert-3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              案例研究
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl">
              探索美国创作者和企业在小红书平台上的成功故事、经验分享和变现策略
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
              成功案例
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              学习他们的成功经验
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
              深入了解这些创作者和品牌如何在小红书上取得成功，以及他们的策略如何适应您的目标
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-48 w-full relative bg-gray-200 dark:bg-gray-700">
                  {/* 实际项目中应替换为真实图片 */}
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
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-2">
                      {study.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {study.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                    {study.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                    >
                      阅读完整案例
                      <svg
                        className="ml-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
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

      {/* Expert Insights */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
              专家洞察
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              来自成功创作者的建议
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {expertInsights.map((expert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                    {/* 实际项目中应替换为真实头像 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
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
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {expert.name}
                    </h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">
                      {expert.title}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-3">
                  <p className="text-base italic text-gray-600 dark:text-gray-400">
                    &ldquo;{expert.quote}&rdquo;
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
              投资回报
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              小红书营销的数据成果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">68%</p>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                品牌意识提升
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                相比传统社交平台
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">3.2x</p>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                电商转化率
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                与网站直接流量相比
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">47%</p>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                客户获取成本降低
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                与付费广告相比
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">8.7/10</p>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                用户信任度评分
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                基于消费者调查
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">想了解更多成功案例？</span>
            <span className="block text-indigo-200">订阅我们的案例研究简报</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                联系我们
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                浏览资源
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 