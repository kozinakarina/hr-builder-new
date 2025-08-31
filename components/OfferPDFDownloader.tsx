"use client";

import React from 'react';

interface OfferPDFDownloaderProps {
  targetSelector?: string;
  fileName?: string;
  buttonText?: string;
}

const OfferPDFDownloader: React.FC<OfferPDFDownloaderProps> = ({ 
  targetSelector = '[data-plasmic-name="MainComponentv1"]', // Селектор для правого компонента
  fileName = 'offer_01tech.pdf',
  buttonText = '📄 Скачать PDF' 
}) => {
  
  const downloadPDF = () => {
    console.log('🚀 Открываем макет для печати в новом окне!');
    
    try {
      // Находим правый компонент - точный селектор
      let targetElement = document.querySelector('#offer-block.plasmic') as HTMLElement;
      
      if (!targetElement) {
        // Пробуем другие селекторы
        const selectors = [
          'div[id*="offer-block"]',
          'div.plasmic',
          '[class*="MainComponent"]',
          'div[class*="plasmic_all__wx_xX"]'
        ];
        
        for (const selector of selectors) {
          targetElement = document.querySelector(selector) as HTMLElement;
          if (targetElement) {
            console.log(`✅ Найден через: ${selector}`);
            break;
          }
        }
      }
      
      if (!targetElement) {
        // Последняя попытка - по координатам
        const allDivs = Array.from(document.querySelectorAll('div')) as HTMLElement[];
        targetElement = allDivs.find(div => {
          const rect = div.getBoundingClientRect();
          return rect.left > window.innerWidth * 0.5 && rect.width > 400;
        }) || null;
      }
      
      if (!targetElement) {
        alert('Макет не найден');
        return;
      }

      // Получаем реальные размеры элемента
      const rect = targetElement.getBoundingClientRect();
      const realWidth = rect.width;
      const realHeight = rect.height;
      
      console.log(`📏 Реальные размеры элемента: ${realWidth}x${realHeight}px`);
      
      // Конвертируем в мм (96 DPI)
      const widthMM = (realWidth / 96) * 25.4;
      const heightMM = (realHeight / 96) * 25.4;
      
      console.log(`📐 Размеры в мм: ${widthMM.toFixed(1)}x${heightMM.toFixed(1)}mm`);

      // Получаем HTML макета
      const elementHTML = targetElement.outerHTML;
      
      // Получаем все стили страницы
      const allStyles = Array.from(document.styleSheets)
        .map(styleSheet => {
          try {
            return Array.from(styleSheet.cssRules)
              .map(rule => rule.cssText)
              .join('\n');
          } catch (e) {
            return '';
          }
        })
        .join('\n');

      // Создаем HTML для нового окна
      const printHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Offer PDF</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
          <style>
            ${allStyles}
            
            @media print {
              @page { 
                size: ${widthMM.toFixed(1)}mm ${heightMM.toFixed(1)}mm; 
                margin: 0; 
              }
              body { 
                margin: 0 !important; 
                padding: 0 !important; 
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
                overflow: visible !important;
              }
              * { 
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
                page-break-inside: avoid !important;
              }
              #offer-block {
                width: ${widthMM.toFixed(1)}mm !important;
                height: ${heightMM.toFixed(1)}mm !important;
                margin: 0 !important;
                padding: 0 !important;
                box-sizing: border-box !important;
                page-break-inside: avoid !important;
                overflow: visible !important;
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
              }
            }
            
            html, body {
              font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              margin: 0 !important;
              padding: 0 !important;
              background: white;
              width: ${widthMM.toFixed(1)}mm !important;
              height: ${heightMM.toFixed(1)}mm !important;
              max-width: ${widthMM.toFixed(1)}mm !important;
              max-height: ${heightMM.toFixed(1)}mm !important;
              overflow: hidden !important;
              box-sizing: border-box !important;
            }
            
            #offer-block, .plasmic {
              width: ${widthMM.toFixed(1)}mm !important;
              height: ${heightMM.toFixed(1)}mm !important;
              max-width: ${widthMM.toFixed(1)}mm !important;
              max-height: ${heightMM.toFixed(1)}mm !important;
              margin: 0 !important;
              padding: 0 !important;
              box-sizing: border-box !important;
              font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              overflow: hidden !important;
            }
          </style>
        </head>
        <body>
          ${elementHTML}
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 1000);
            };
          </script>
        </body>
        </html>
      `;

      // Открываем новое окно
      const printWindow = window.open('', '_blank', 'width=800,height=1000');
      if (printWindow) {
        printWindow.document.write(printHTML);
        printWindow.document.close();
      }
      
      console.log('✅ Окно для печати открыто!');
      
    } catch (error) {
      console.error('❌ Ошибка:', error);
      alert(`Ошибка: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <button
      onClick={downloadPDF}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '14px',
        padding: '15px 30px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: 'Manrope, sans-serif',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        zIndex: 9999
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(79, 70, 229, 0.4)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.3)';
      }}
    >
      {buttonText}
    </button>
  );
};

export default OfferPDFDownloader;
