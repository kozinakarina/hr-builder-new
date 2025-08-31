import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface PDFGeneratorProps {
  formData: any;
  onGenerating?: (isGenerating: boolean) => void;
}

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ formData, onGenerating }) => {
  
  const generatePDF = async () => {
    if (onGenerating) onGenerating(true);
    
    try {
      // Создаем временный контейнер с данными формы
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '210mm'; // A4 width
      tempContainer.style.padding = '20mm';
      tempContainer.style.backgroundColor = 'white';
      tempContainer.style.fontFamily = 'Manrope, sans-serif';
      
      // Создаем HTML содержимое для PDF
      tempContainer.innerHTML = `
        <div style="font-family: 'Manrope', sans-serif; color: #000;">
          <!-- Заголовок -->
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); 
                        color: white; padding: 15px 30px; border-radius: 14px; font-size: 24px; font-weight: 700;">
              01.tech
            </div>
            <h1 style="margin: 20px 0; font-size: 32px; font-weight: 800; background: linear-gradient(135deg, #1E293B 0%, #475569 100%); 
                       -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              Offer you're hired
            </h1>
          </div>

          <!-- Дата -->
          <div style="background: #F8FAFC; padding: 20px; border-radius: 14px; margin-bottom: 30px;">
            <h2 style="font-size: 18px; font-weight: 600; margin-bottom: 15px; color: #1E293B;">📅 Дата</h2>
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
              <div><strong>День:</strong> ${formData.day || 'Не указан'}</div>
              <div><strong>Месяц:</strong> ${formData.month || 'Не указан'}</div>
              <div><strong>Год:</strong> ${formData.year || 'Не указан'}</div>
            </div>
          </div>

          <!-- Блок 01 - Offer -->
          ${formData.offerEnabled ? `
            <div style="background: #EFF6FF; padding: 25px; border-radius: 14px; margin-bottom: 30px; border-left: 4px solid #3B82F6;">
              <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 20px; color: #1E40AF;">
                🎯 Блок 01 - Offer
              </h2>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #1E293B;">Название позиции:</strong>
                <div style="background: white; padding: 12px 16px; border-radius: 8px; margin-top: 5px; border: 1px solid #E2E8F0;">
                  ${formData.positionName || 'Не указано'}
                </div>
              </div>

              <div style="margin-bottom: 15px;">
                <strong style="color: #1E293B;">Имя и фамилия кандидата:</strong>
                <div style="background: white; padding: 12px 16px; border-radius: 8px; margin-top: 5px; border: 1px solid #E2E8F0;">
                  ${formData.candidateName || 'Не указано'}
                </div>
              </div>

              <div style="margin-bottom: 15px;">
                <strong style="color: #1E293B;">Отдел:</strong>
                <div style="background: white; padding: 12px 16px; border-radius: 8px; margin-top: 5px; border: 1px solid #E2E8F0;">
                  ${formData.department || 'Не указан'}
                </div>
              </div>

              <div style="margin-bottom: 15px;">
                <strong style="color: #1E293B;">Нанимателъ:</strong>
                <div style="background: white; padding: 12px 16px; border-radius: 8px; margin-top: 5px; border: 1px solid #E2E8F0;">
                  ${formData.hirer || 'Не указан'}
                </div>
              </div>

              <div>
                <strong style="color: #1E293B;">Telegram менеджера:</strong>
                <div style="background: white; padding: 12px 16px; border-radius: 8px; margin-top: 5px; border: 1px solid #E2E8F0;">
                  ${formData.telegramManager || 'Не указан'}
                </div>
              </div>
            </div>
          ` : ''}

          <!-- Блок 02 - Info -->
          ${formData.infoEnabled ? `
            <div style="background: #F0FDF4; padding: 25px; border-radius: 14px; margin-bottom: 30px; border-left: 4px solid #22C55E;">
              <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 20px; color: #15803D;">
                ℹ️ Блок 02 - Info
              </h2>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #1E293B;">Место работы:</strong>
                <div style="background: white; padding: 12px 16px; border-radius: 8px; margin-top: 5px; border: 1px solid #E2E8F0;">
                  ${formData.workLocation || 'Не указано'}
                </div>
              </div>

              <div style="margin-bottom: 15px;">
                <strong style="color: #1E293B;">Испытательный срок:</strong>
                <div style="background: white; padding: 12px 16px; border-radius: 8px; margin-top: 5px; border: 1px solid #E2E8F0;">
                  ${formData.probationPeriod || 'Не указан'}
                </div>
              </div>

              <div style="margin-bottom: 15px;">
                <strong style="color: #1E293B;">График работы:</strong>
                <div style="background: white; padding: 12px 16px; border-radius: 8px; margin-top: 5px; border: 1px solid #E2E8F0;">
                  ${formData.workSchedule || 'Не указан'}
                </div>
              </div>

              <div>
                <strong style="color: #1E293B;">Режим работы:</strong>
                <div style="background: white; padding: 12px 16px; border-radius: 8px; margin-top: 5px; border: 1px solid #E2E8F0;">
                  ${formData.workMode || 'Не указан'}
                </div>
              </div>
            </div>
          ` : ''}

          <!-- Зарплата -->
          <div style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: white; 
                      padding: 30px; border-radius: 14px; text-align: center; margin-bottom: 30px;">
            <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 15px;">💰 Зарплата</h2>
            <div style="font-size: 36px; font-weight: 800; margin-bottom: 10px;">
              ₽ ${formData.salary || '000 000'}
            </div>
            <div style="opacity: 0.9; font-size: 16px;">
              ${formData.salaryPeriod || 'На период испытательного срока'}
            </div>
          </div>

          <!-- Футер -->
          <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #E2E8F0;">
            <div style="color: #64748B; font-size: 14px;">
              Документ сгенерирован ${new Date().toLocaleDateString('ru-RU')} в ${new Date().toLocaleTimeString('ru-RU')}
            </div>
            <div style="margin-top: 10px;">
              <span style="background: #4F46E5; color: white; padding: 8px 16px; border-radius: 8px; font-weight: 600;">
                01.tech
              </span>
            </div>
          </div>
        </div>
      `;
      
      document.body.appendChild(tempContainer);
      
      // Генерируем изображение из HTML
      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        width: 794, // A4 width in pixels at 96 DPI
        height: 1123 // A4 height in pixels at 96 DPI
      });
      
      // Удаляем временный контейнер
      document.body.removeChild(tempContainer);
      
      // Создаем PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      
      // Добавляем изображение в PDF
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      
      // Скачиваем PDF
      const fileName = `offer_${formData.candidateName || 'candidate'}_${new Date().toISOString().split('T')[0]}.pdf`;
      pdf.save(fileName);
      
    } catch (error) {
      console.error('Ошибка генерации PDF:', error);
      alert('Произошла ошибка при генерации PDF. Попробуйте еще раз.');
    } finally {
      if (onGenerating) onGenerating(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      style={{
        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '14px',
        padding: '15px 30px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: 'Manrope, sans-serif',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
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
      📄 Скачать PDF
    </button>
  );
};

export default PDFGenerator;
