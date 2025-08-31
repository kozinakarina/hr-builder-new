import React from 'react';

interface DownloadPDFProps {
  fileName?: string;
  buttonText?: string;
}

const DownloadPDF: React.FC<DownloadPDFProps> = ({ 
  fileName = 'offer_01tech.pdf',
  buttonText = '📄 Скачать PDF' 
}) => {
  
  const downloadPDF = () => {
    // Создаем ссылку для скачивания готового файла
    const link = document.createElement('a');
    link.href = `/pdfs/${fileName}`; // Путь к готовому PDF файлу
    link.download = fileName;
    link.target = '_blank';
    
    // Добавляем в DOM и кликаем
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={downloadPDF}
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
        boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
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

export default DownloadPDF;
