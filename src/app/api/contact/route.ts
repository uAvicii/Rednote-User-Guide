import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    let name = '';
    let email = '';
    let subject = '';
    let message = '';

    // 检查内容类型
    const contentType = request.headers.get('content-type') || '';
    
    if (contentType.includes('application/json')) {
      // 处理JSON格式的请求
      const jsonData = await request.json();
      name = jsonData.name;
      email = jsonData.email;
      subject = jsonData.subject;
      message = jsonData.message;
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      // 处理表单数据格式的请求
      const formData = await request.formData();
      name = formData.get('name') as string;
      email = formData.get('email') as string;
      subject = formData.get('subject') as string;
      message = formData.get('message') as string;
    } else {
      return NextResponse.json(
        { error: '不支持的内容类型' },
        { status: 415 }
      );
    }
    
    // 验证表单字段
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '所有字段都是必填的' },
        { status: 400 }
      );
    }
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '请提供有效的电子邮箱地址' },
        { status: 400 }
      );
    }
    
    // 在这里添加发送电子邮件的逻辑或将数据保存到数据库
    // 例如使用nodemailer发送电子邮件或使用数据库SDK保存数据
    
    // 记录提交的表单数据（仅用于演示）
    console.log('表单提交：', { name, email, subject, message });
    
    // 返回成功响应
    return NextResponse.json(
      { 
        message: '感谢您的留言！我们会尽快回复您。',
        success: true 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('处理表单提交时出错：', error);
    return NextResponse.json(
      { error: '提交表单时出错，请稍后再试' },
      { status: 500 }
    );
  }
} 