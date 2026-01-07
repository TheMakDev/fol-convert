import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="section-container">
        {/* Scripture Quote */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <blockquote className="font-body text-2xl md:text-3xl italic leading-relaxed">
            "For God so loved the world that He gave His only begotten Son, 
            that whoever believes in Him should not perish but have everlasting life."
          </blockquote>
          <cite className="block mt-4 text-gold-light">— John 3:16</cite>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full" />

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-12">
          {/* About */}
          <div>
            <h4 className="font-body text-xl font-bold mb-4">FOL Converts Page</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A ministry dedicated to nurturing new believers and helping them 
              grow in their walk with Christ through the Redeemed Christian Church of God.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Find a Church', 'Messages', 'Audio', 'Devotional', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground/70 hover:text-gold-light transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-body text-xl font-bold mb-4">Stay Connected</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Join our community and never miss an update on your spiritual journey.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {['Facebook', 'Twitter', 'YouTube', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by FOL
          </p>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Redeemed Christian Church of God. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
