import React from 'react';

export default function PopularCategories() {
  const categories = [
    {
      id: 1,
      name: "美妆",
      description: "化妆技巧、产品测评、护肤心得",
      icon: "🧴",
      bgColor: "bg-pink-100 dark:bg-pink-900/30",
      textColor: "text-pink-800 dark:text-pink-300",
    },
    {
      id: 2,
      name: "美食",
      description: "家常菜谱、餐厅推荐、烘焙教程",
      icon: "🍜",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
      textColor: "text-yellow-800 dark:text-yellow-300",
    },
    {
      id: 3,
      name: "旅行",
      description: "目的地攻略、隐藏景点、行程规划",
      icon: "✈️",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-800 dark:text-blue-300",
    },
    {
      id: 4,
      name: "时尚",
      description: "穿搭灵感、购物分享、流行趋势",
      icon: "👗",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-800 dark:text-purple-300",
    },
    {
      id: 5,
      name: "生活方式",
      description: "家居装饰、DIY手工、生活小窍门",
      icon: "🏡",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-800 dark:text-green-300",
    },
    {
      id: 6,
      name: "健康健身",
      description: "运动教程、饮食建议、瑜伽冥想",
      icon: "💪",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      textColor: "text-orange-800 dark:text-orange-300",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
            热门领域
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            小红书最受欢迎的内容类别
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            了解各领域的内容特点和创作建议，找到适合你的垂直领域
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`p-6 rounded-lg shadow-md ${category.bgColor}`}
            >
              <div className="text-center mb-4">
                <span className="text-4xl">{category.icon}</span>
              </div>
              <h3 className={`text-xl font-bold ${category.textColor} text-center mb-2`}>
                {category.name}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 text-center">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              美国创作者的内容优势
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              作为美国创作者，你可以发挥这些独特优势吸引中国用户
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                <span className="mr-2">🌎</span> 文化差异内容
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                分享美国本地生活、习俗和文化特色，满足中国用户对海外生活的好奇心
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                <span className="mr-2">🛍️</span> 海外产品评测
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                评测中国难以购买的美国本土产品，或提供全球商品的真实使用体验
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                <span className="mr-2">🗣️</span> 语言学习素材
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                提供英语学习技巧、日常用语、口语练习等内容，帮助中国用户提升语言能力
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                <span className="mr-2">🏫</span> 留学与教育建议
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                分享美国教育体系、申请流程、校园生活等信息，对计划留学的用户极具价值
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 