import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenLinkSettings: () => void;
}

export function Footer({
  onOpenPrivacyModal,
  onOpenLinkSettings,
}: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E3DED4] pt-16 pb-12 text-xs text-[#59605A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Footer Split */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-[#E3DED4]">
          {/* Brand Column */}
          <div className="space-y-2">
            <div className="font-serif-brand text-2xl tracking-[0.2em] uppercase text-[#1B1E1C] font-semibold">
              WELL BY YOUNG
            </div>
            <div className="text-xs tracking-widest uppercase font-serif-brand text-[#627A65] font-medium">
              Personal Health Designer
            </div>
            <p className="text-xs text-[#767E77] pt-2 font-light max-w-sm leading-relaxed">
              몸의 균형을 이해하고, 나에게 맞는 건강한 일상을 디자인합니다.
            </p>
          </div>

          {/* Nav Mirror Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-2.5">
              <div className="font-medium text-[#1B1E1C] uppercase tracking-wider text-[11px] font-serif-brand">
                Navigation
              </div>
              <ul className="space-y-1.5 font-light">
                <li>
                  <button
                    onClick={() => scrollTo('#about')}
                    className="hover:text-[#1B1E1C] transition-colors"
                  >
                    브랜드 소개
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('#vitalogy')}
                    className="hover:text-[#1B1E1C] transition-colors"
                  >
                    바이탈로지 (VITALOGY)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('#programs')}
                    className="hover:text-[#1B1E1C] transition-colors"
                  >
                    온유 프로그램
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('#expert')}
                    className="hover:text-[#1B1E1C] transition-colors"
                  >
                    전문가 소개
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="font-medium text-[#1B1E1C] uppercase tracking-wider text-[11px] font-serif-brand">
                Programs
              </div>
              <ul className="space-y-1.5 font-light">
                <li>
                  <button
                    onClick={() => scrollTo('#programs')}
                    className="hover:text-[#1B1E1C] transition-colors"
                  >
                    온솔루션 (ON SOLUTION)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('#programs')}
                    className="hover:text-[#1B1E1C] transition-colors"
                  >
                    유솔루션 (YOU SOLUTION)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('#process')}
                    className="hover:text-[#1B1E1C] transition-colors"
                  >
                    상담 절차 안내
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="font-medium text-[#1B1E1C] uppercase tracking-wider text-[11px] font-serif-brand">
                Customer & Legal
              </div>
              <ul className="space-y-1.5 font-light">
                <li>
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="hover:text-[#1B1E1C] transition-colors"
                  >
                    상담 문의
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenPrivacyModal}
                    className="hover:text-[#1B1E1C] transition-colors underline"
                  >
                    개인정보처리방침
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenLinkSettings}
                    className="hover:text-[#1B1E1C] transition-colors"
                  >
                    채널 링크 설정
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Business Notices */}
        <div className="py-8 space-y-3 font-light text-[#767E77] leading-relaxed border-b border-[#E3DED4]/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="font-medium text-[#59605A]">상호명:</span> 웰바이영 (WELL BY YOUNG)
              <span className="mx-2">·</span>
              <span className="font-medium text-[#59605A]">대표자:</span> 박혜영
              <span className="mx-2">·</span>
              <span className="font-medium text-[#59605A]">사업자등록번호:</span> 등록 준비 중 (사업자 정보 등록 예정)
            </div>
            <div>
              <span className="font-medium text-[#59605A]">사업장 주소:</span> 추후 공지 예정
              <span className="mx-2">·</span>
              <span className="font-medium text-[#59605A]">고객문의:</span>{' '}
              <a href="mailto:wellbyyoung@gmail.com" className="hover:text-[#1B1E1C] underline font-medium text-[#4E6351]">
                wellbyyoung@gmail.com
              </a>
            </div>
          </div>

          <div className="p-3 bg-[#F7F5F0] rounded border border-[#E3DED4]/70 text-[11px] text-[#767E77] leading-relaxed">
            <strong className="text-[#59605A] font-medium block">웰바이영 서비스 유의사항</strong>
            웰바이영의 모든 프로그램(온솔루션, 유솔루션)은 의료기관의 질병 진단, 치료, 예방 또는 의학적 처방을 대신하지 않습니다. 본 서비스는 개인의 식습관, 운동, 수면, 휴식 등 일상 생활습관을 스스로 바로잡도록 돕는 웰니스 케어 코칭 및 영양 설계 디자인 서비스입니다.
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#767E77]">
          <div>
            © {new Date().getFullYear()} WELL BY YOUNG. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#1B1E1C] transition-colors"
            aria-label="맨 위로 이동"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
