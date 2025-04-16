import Link from "next/link";

export default function GettingStarted() {
  const steps = [
    {
      id: 1,
      title: "下载小红书应用",
      description:
        "小红书目前主要是移动应用，你可以从以下渠道下载：",
      items: [
        "iOS用户：从App Store下载",
        "Android用户：从Google Play或官网下载",
        "注意：海外用户可能需要切换至中国区应用商店或使用特定方法下载"
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "注册账号",
      description:
        "打开应用后，你可以通过以下方式注册账号：",
      items: [
        "手机号注册：推荐中国手机号用户使用，需要接收验证码",
        "邮箱注册：海外用户推荐使用此方式，通过邮箱验证创建账号",
        "第三方账号登录：如微信、微博、QQ等（可能需要中国本地账号）"
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
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
      id: 3,
      title: "个人资料设置",
      description:
        "完成注册后，建议进行以下设置以优化你的账号：",
      items: [
        "头像：上传清晰、专业的照片，与你的内容定位相符",
        "用户名：为提高辨识度，建议使用英文+中文的组合",
        "简介：突出你的专业领域和特点，添加相关标签"
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "设置语言",
      description:
        "小红书默认使用中文，但可以进行语言设置：",
      items: [
        "进入\"我\"→\"设置\"→\"通用\"→\"语言\"",
        "目前支持简体中文、繁体中文和英文",
        "建议：即使设置为英文，发布内容时也建议使用中英文混合，增加本地用户友好度"
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "了解界面功能",
      description:
        "熟悉小红书的主要界面和功能：",
      items: [
        "首页（推荐）：算法推荐的内容流",
        "购物：小红书自营电商和商品推荐",
        "消息：私信、评论、点赞等通知",
        "我：个人主页、设置、收藏等"
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
    },
  ];

  const faqItems = [
    {
      question: "海外用户能否注册小红书？",
      answer:
        "可以，但可能存在一些限制。海外用户建议使用邮箱注册，而不是手机号。某些功能可能受到地区限制，如支付功能。",
    },
    {
      question: "小红书有网页版吗？",
      answer:
        "小红书主要是移动应用，目前PC端有限定功能的网页版，但大多数内容创作和互动需要通过手机应用完成。",
    },
    {
      question: "如何切换小红书语言？",
      answer:
        "进入\"我\"→\"设置\"→\"通用\"→\"语言\"，可以选择简体中文、繁体中文或英文。但平台上的大部分用户内容仍为中文。",
    },
    {
      question: "注册需要中国手机号吗？",
      answer:
        "不是必须的，海外用户可以使用邮箱注册。但使用中国手机号注册可以解锁更多功能，如绑定支付等。",
    },
    {
      question: "账号认证有什么好处？",
      answer:
        "认证账号（蓝V）会获得更高的曝光率和可信度。企业可申请官方认证，个人创作者达到一定粉丝量后可申请达人认证。",
    },
    {
      question: "被限流了怎么办？",
      answer:
        "新账号可能会有流量限制，建议：1)保持持续优质内容更新；2)遵守平台规则，避免发布敏感内容；3)增加用户互动；4)使用热门话题但避免过度标签堆砌。",
    },
  ];

  const tips = [
    {
      title: "账号安全",
      description: "设置强密码，开启两步验证，避免使用公共网络登录账号",
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "内容合规",
      description: "了解平台规则，避免发布敏感内容，遵守中国相关法规和文化要求",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "网络连接",
      description: "若在海外访问，可能需要稳定的网络连接工具以获得最佳体验",
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
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              入门指南
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl">
              从零开始学习如何注册小红书账号并完成基本设置
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
              分步指南
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              开始你的小红书之旅
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
              按照以下步骤轻松注册并设置你的小红书账号
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-16">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                        {step.icon}
                      </div>
                      <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                        步骤 {step.id}：{step.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:col-span-8">
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {step.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="ml-3 text-base text-gray-600 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
              注意事项
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              海外用户特别提示
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 dark:bg-red-900 text-red-500 mb-4 mx-auto">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">
                  {tip.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 text-center">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
              常见问题
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              FAQ
            </p>
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <dl>
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0 last:pb-0"
                >
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-red-500 mr-2">Q:</span>
                    {faq.question}
                  </dt>
                  <dd className="mt-3 text-base text-gray-600 dark:text-gray-300 ml-8">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-50 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              准备好创建内容了吗？
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              了解如何在小红书上创建吸引人的内容
            </p>
            <div className="mt-8">
              <Link
                href="/content-creation"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                学习内容创作
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 