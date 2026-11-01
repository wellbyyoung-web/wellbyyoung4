import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenLinkSettings?: () => void;
}

export function Navbar({ onOpenLinkSettings }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '브랜드 소개', href: '#about' },
    { label: '바이탈로지', href: '#vitalogy' },
    { label: '프로그램', href: '#programs' },
    { label: '전문가 소개', href: '#expert' },
    { label: '상담 안내', href: '#process' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E3DED4]/60 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
            : 'bg-[#FAF8F5]/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single element Brand Wordmark */}
          <a
            href="#"
            className="font-serif-brand text-xl sm:text-2xl tracking-[0.18em] uppercase text-[#1B1E1C] font-semibold whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
          >
            WELL BY YOUNG
          </a>

          {/* Zone 2: 4-5 single-line clean text nav links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-medium text-[#59605A]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#1B1E1C] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#4E6351] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-[#FAF8F5] bg-[#2C302D] hover:bg-[#1B1E1C] active:bg-[#111312] transition-colors rounded-sm tracking-wider whitespace-nowrap shrink-0"
            >
              상담 신청
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-1 text-[#2C302D] hover:text-[#1B1E1C] focus:outline-none"
              aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#1B1E1C]/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-[#FAF8F5] p-6 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#E3DED4]">
                <div className="font-serif-brand tracking-[0.15em] text-lg text-[#1B1E1C] font-semibold">
                  WELL BY YOUNG
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#59605A] hover:text-[#1B1E1C]"
                  aria-label="닫기"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-[11px] tracking-widest uppercase text-[#767E77] pt-4 pb-2 font-serif-brand">
                Personal Health Designer
              </div>

              <nav className="flex flex-col space-y-4 pt-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm font-medium text-[#2C302D] hover:text-[#4E6351] py-1 border-b border-[#EFECE5]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E3DED4] space-y-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full block text-center py-2.5 text-xs font-medium text-white bg-[#2C302D] rounded-sm tracking-wider"
              >
                상담 신청하기
              </a>
              <div className="flex items-center justify-between text-[11px] text-[#767E77] pt-2">
                <span>ON YOU 솔루션</span>
                <span>Personal Health Designer</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
