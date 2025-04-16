"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent, ChangeEvent } from "react";

// 表单状态接口
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// 表单提交状态接口
interface FormStatusState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<FormStatusState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: ""
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "提交表单时出错");
      }

      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: data.message
      });

      // 重置表单
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: error instanceof Error ? error.message : "提交表单时出错，请稍后再试"
      });
    }
  };

  const faqs = [
    {
      question: "你们提供哪些服务？",
      answer:
        "我们提供小红书平台相关的全方位服务，包括内容策略咨询、账号运营培训、内容创作指导、跨文化营销建议，以及针对美国用户的定制化小红书进入中国市场方案。",
    },
    {
      question: "如何预约咨询服务？",
      answer:
        "您可以通过本页的联系表单提交咨询请求，或直接发送电子邮件至contact@text-xhs.com。我们的团队会在24小时内回复并安排咨询。",
    },
    {
      question: "你们的团队有中文和英文支持吗？",
      answer:
        "是的，我们的团队由精通中英双语的专业人员组成，可以提供无障碍的沟通服务，确保您的需求被准确理解和满足。",
    },
    {
      question: "是否提供定制化培训？",
      answer:
        "是的，我们提供针对不同行业和需求的定制化培训课程。无论您是个人创作者还是企业品牌，我们都可以根据您的具体情况定制培训内容。",
    },
  ];

  const contactMethods = [
    {
      title: "Email",
      description: "我们的团队会在24小时内回复您的邮件",
      email: "contact@text-xhs.com",
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "微信",
      description: "扫描二维码添加我们的官方微信",
      wechatId: "TextXHS",
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {/* 简化版的微信图标 */}
          <path d="M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.103 2.363-.284l.633.506.055-.043c.108.086.214.17.32.257l1.297-1.903-.937-.025z" />
          <path d="M2.52 11.087c0 .33-.083.645-.232.942-.151.297-.368.565-.648.785-.346.265-.743.413-1.156.413-.222 0-.436-.033-.641-.097-.205-.065-.389-.158-.559-.284l.005-.012-.258-.19-.564.923c.42.369.89.675 1.416.89-.01.022-.019.046-.027.07-.327.75-.497 1.573-.497 2.443 0 1.633.658 3.111 1.746 4.261 1.055 1.112 2.523 1.944 4.242 2.344l-.147-.665c-.498-.505-.747-1.308-.747-2.212 0-1.535.682-2.878 1.745-3.784 1.066-.91 2.53-1.472 4.147-1.472 3.489 0 6.314 2.345 6.314 5.235 0 2.868-2.825 5.199-6.314 5.199-.659 0-1.296-.074-1.891-.209l-.79-.633-2.564 1.773c.713.337 1.529.53 2.407.57l-.054-.052-2.081-1.673-.1-.072-.07-.055c-.792.274-1.662.426-2.571.426-4.249 0-7.691-3.261-7.691-7.284 0-4.025 3.442-7.287 7.691-7.287 4.248 0 7.691 3.262 7.691 7.287 0 1.33-.365 2.571-1.007 3.634l-.781-.571-1.935 2.799.942.026c1.93-1.537 3.165-3.809 3.165-6.346 0-5.092-4.65-9.222-10.388-9.222-5.739 0-10.387 4.13-10.387 9.222z" />
        </svg>
      ),
    },
    {
      title: "社交媒体",
      description: "在社交平台上关注我们获取最新资讯",
      icons: [
        {
          name: "Instagram",
          href: "https://instagram.com/textxhs",
          icon: (
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
        {
          name: "Twitter",
          href: "https://twitter.com/textxhs",
          icon: (
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          ),
        },
        {
          name: "LinkedIn",
          href: "https://linkedin.com/company/textxhs",
          icon: (
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              联系我们
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl">
              无论您有任何问题、建议或合作意向，我们都期待着与您沟通
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                与我们取得联系
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                填写下面的表单，我们会尽快回复您的咨询。您也可以通过电子邮件或社交媒体与我们联系。
              </p>
              
              <div className="mt-8 space-y-8">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300">
                        {method.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {method.title}
                      </h3>
                      <p className="mt-1 text-base text-gray-600 dark:text-gray-300">
                        {method.description}
                      </p>
                      {method.email && (
                        <a
                          href={`mailto:${method.email}`}
                          className="mt-2 inline-flex text-pink-600 dark:text-pink-400 hover:text-pink-500"
                        >
                          {method.email}
                        </a>
                      )}
                      {method.wechatId && (
                        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                          微信号: {method.wechatId}
                        </p>
                      )}
                      {method.icons && (
                        <div className="mt-4 flex space-x-4">
                          {method.icons.map((icon, idx) => (
                            <a
                              key={idx}
                              href={icon.href}
                              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="sr-only">{icon.name}</span>
                              {icon.icon}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg">
              {formStatus.isSuccess ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white">提交成功！</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{formStatus.message}</p>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => setFormStatus(prev => ({ ...prev, isSuccess: false }))}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                      发送新消息
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStatus.isError && (
                    <div className="rounded-md bg-red-50 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">出错了</h3>
                          <div className="mt-2 text-sm text-red-700">
                            <p>{formStatus.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      姓名
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        autoComplete="name"
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      电子邮箱
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        autoComplete="email"
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      主题
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      留言内容
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus.isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus.isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          处理中...
                        </>
                      ) : "发送消息"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              常见问题
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              以下是我们经常收到的问题及解答
            </p>
          </div>
          
          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 shadow overflow-hidden rounded-lg px-6 py-5"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-700 dark:bg-pink-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">准备好开始您的小红书之旅了吗？</span>
            <span className="block text-pink-200">立即探索我们的平台资源。</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/getting-started"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md text-pink-600 bg-white hover:bg-pink-50"
              >
                开始入门
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
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