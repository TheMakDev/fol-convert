import { Button } from '@/components/ui/button';
import { Award, Download, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CertificateProps {
  score: number;
  userName: string;
}

const Certificate = ({ score, userName }: CertificateProps) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Certificate Display */}
      <div
        id="certificate"
        className="bg-cream border-8 border-double border-gold rounded-lg p-8 md:p-12 mx-auto max-w-3xl relative overflow-hidden print:border-gold print:shadow-none"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, rgba(180, 142, 63, 0.05) 0%, transparent 50%),
                            radial-gradient(circle at 90% 80%, rgba(180, 142, 63, 0.05) 0%, transparent 50%)`
        }}
      >
        {/* Decorative Corners */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-gold" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-gold" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-gold" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-gold" />

        <div className="text-center space-y-6 relative z-10">
          {/* Header */}
          <div className="space-y-2">
            <Award className="w-16 h-16 mx-auto text-gold" />
            <p className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
              Certificate of Completion
            </p>
          </div>

          {/* Title */}
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary">
            Foundations of Faith
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground">
            This is to certify that
          </p>

          <div className="py-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground border-b-2 border-gold inline-block px-8 pb-2">
              {userName}
            </h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-md mx-auto">
            has successfully completed the <strong className="text-foreground">Foundations of Faith</strong> course 
            for new believers, demonstrating understanding of Christian fundamentals with a score of <strong className="text-primary">{score}%</strong>.
          </p>

          <div className="pt-8 flex justify-between items-end max-w-md mx-auto">
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Date of Completion</p>
              <p className="font-medium text-foreground">{currentDate}</p>
            </div>
            <div className="text-right">
              <p className="font-heading text-xl italic text-gold">FOL Ministry</p>
              <p className="text-sm text-muted-foreground">Redeemed Christian Church of God</p>
            </div>
          </div>

          <div className="pt-6 border-t border-gold/30">
            <p className="text-sm italic text-muted-foreground">
              "Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new."
            </p>
            <p className="text-xs text-gold mt-1">— 2 Corinthians 5:17</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
        <Button variant="gold" size="lg" onClick={handlePrint}>
          <Download className="w-5 h-5 mr-2" />
          Print / Save as PDF
        </Button>
        <Link to="/">
          <Button variant="outline" size="lg">
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Button>
        </Link>
      </div>

      {/* Print Instructions */}
      <p className="text-center text-sm text-muted-foreground print:hidden">
        Tip: Use "Save as PDF" in the print dialog to download your certificate.
      </p>
    </div>
  );
};

export default Certificate;
