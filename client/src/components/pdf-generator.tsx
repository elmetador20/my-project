import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useState } from 'react';

interface PDFGeneratorProps {
  targetRef: React.RefObject<HTMLDivElement>;
  fileName?: string;
  reportTitle?: string;
  userData?: {
    name?: string;
    email?: string;
    careerGoal?: string;
  };
}

export function PDFGenerator({ targetRef, fileName = 'leapskill-report.pdf', reportTitle = 'LeapSkill Career Analysis Report', userData }: PDFGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    if (!targetRef.current) return;
    
    setIsGenerating(true);
    
    try {
      const canvas = await html2canvas(targetRef.current, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4'
      });
      
      const imgWidth = 595; // A4 width in pixels at 72 dpi
      const imgHeight = canvas.height * imgWidth / canvas.width;
      
      // Add report title and date
      pdf.setFontSize(20);
      pdf.setTextColor(26, 86, 219); // Blue
      pdf.text(reportTitle, 40, 40);
      
      // Add date
      pdf.setFontSize(12);
      pdf.setTextColor(100, 100, 100); // Gray
      const date = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      pdf.text(`Generated on: ${date}`, 40, 60);
      
      // Add user data if available
      if (userData) {
        pdf.setFontSize(12);
        pdf.setTextColor(50, 50, 50);
        let yPos = 80;
        
        if (userData.name) {
          pdf.text(`Name: ${userData.name}`, 40, yPos);
          yPos += 20;
        }
        
        if (userData.email) {
          pdf.text(`Email: ${userData.email}`, 40, yPos);
          yPos += 20;
        }
        
        if (userData.careerGoal) {
          pdf.text(`Career Goal: ${userData.careerGoal}`, 40, yPos);
          yPos += 20;
        }
        
        // Add separator line
        pdf.setDrawColor(200, 200, 200);
        pdf.line(40, yPos, 555, yPos);
        yPos += 20;
        
        // Add report image below user data
        pdf.addImage(imgData, 'PNG', 40, yPos, imgWidth - 80, imgHeight * 0.8);
      } else {
        // Add report image without user data
        pdf.addImage(imgData, 'PNG', 40, 80, imgWidth - 80, imgHeight * 0.8);
      }
      
      // Add LeapSkill stamp/footer
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      const pageHeight = pdf.internal.pageSize.height;
      pdf.text('© LeapSkill - AI-Powered Career Guidance', 40, pageHeight - 30);
      pdf.text('www.leapskill.com', 40, pageHeight - 20);
      
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button 
      onClick={generatePDF}
      disabled={isGenerating}
      variant="outline"
      className="mt-4 flex items-center gap-2"
    >
      <Download className="h-4 w-4" />
      {isGenerating ? 'Generating PDF...' : 'Download Report'}
    </Button>
  );
}