import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('🚀 Запуск Puppeteer для создания PDF...');

    // Запускаем браузер
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();

    // Устанавливаем размер страницы A4
    await page.setViewport({ 
      width: 794, // A4 width in pixels at 96 DPI
      height: 1123, // A4 height in pixels at 96 DPI
      deviceScaleFactor: 2 // Для высокого качества
    });

    console.log('📄 Загружаем страницу конструктора...');

    // Переходим на страницу конструктора
    const baseUrl = req.headers.origin || 'http://localhost:3008';
    await page.goto(`${baseUrl}/form-ui`, {
      waitUntil: 'networkidle0', // Ждем загрузки всех ресурсов
      timeout: 30000
    });

    // Ждем загрузки Plasmic компонентов
    await page.waitForTimeout(3000);

    console.log('🎯 Ищем MainComponent...');

    // Проверяем что страница загрузилась
    await page.waitForSelector('body', { timeout: 10000 });
    
    // Ждем появления контента
    await page.waitForTimeout(2000);

    console.log('📸 Создаем PDF...');

    // Создаем PDF с точными настройками
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true, // Включаем фоновые изображения!
      margin: {
        top: '10mm',
        right: '10mm', 
        bottom: '10mm',
        left: '10mm'
      },
      preferCSSPageSize: false,
      displayHeaderFooter: false
    });

    await browser.close();

    console.log('✅ PDF успешно создан!');

    // Отправляем PDF как файл для скачивания
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="offer_01tech.pdf"');
    res.send(pdf);

  } catch (error) {
    console.error('❌ Ошибка создания PDF:', error);
    res.status(500).json({ 
      message: 'Ошибка создания PDF', 
      error: error.message 
    });
  }
}
