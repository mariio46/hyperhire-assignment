import { Container } from '@/components/container';
import {
  FooterAdditionalCard,
  FooterAdditionalCardDescription,
  FooterAdditionalCardSubTitle,
  FooterAdditionalCardTitle,
} from '@/components/footer-additional-card';
import { FooterCard } from '@/components/footer-card';
import { HyperhireRGBLogo } from '@/components/hyperhire-logo';

const SectionFooter = () => {
  return (
    <footer className="px-2.5 py-20">
      <Container className="space-y-16">
        <section id="footer-content" className="grid gap-4 lg:grid-cols-3">
          <div className="col-span-1 space-y-5">
            <div className="space-y-4">
              <HyperhireRGBLogo />
              <h2 className="w-[15.438rem] text-sm font-black text-[#343741]">
                우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
              </h2>
            </div>
            <div className="space-y-2">
              <FooterAdditionalCardDescription>010-0000-0000</FooterAdditionalCardDescription>
              <FooterAdditionalCardDescription>aaaaa@naver.com</FooterAdditionalCardDescription>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
              <FooterCard icon="IconCode" text="해외 개발자 원격 채용" />
              <FooterCard icon="IconUserFilled" text="외국인 원격 채용 (비개발)" />
              <FooterCard icon="IconAlphabetKorean" text="한국어 가능 외국인 채용" />
              <FooterCard icon="IconSettingsFilled" text="해외 개발자 활용 서비스" />
            </div>
          </div>
        </section>
        <section id="footer-additional-content" className="flex flex-wrap items-center gap-4">
          <FooterAdditionalCard>
            <FooterAdditionalCardSubTitle>상호명</FooterAdditionalCardSubTitle>
            <div className="space-y-1.5">
              <FooterAdditionalCardTitle>하이퍼하이어</FooterAdditionalCardTitle>
              <FooterAdditionalCardDescription>Hyperhire India Private Limited</FooterAdditionalCardDescription>
            </div>
          </FooterAdditionalCard>
          <FooterAdditionalCard>
            <FooterAdditionalCardSubTitle>대표 CEO</FooterAdditionalCardSubTitle>
            <div className="space-y-1.5">
              <FooterAdditionalCardTitle>김주현</FooterAdditionalCardTitle>
              <FooterAdditionalCardDescription>Juhyun Kim</FooterAdditionalCardDescription>
            </div>
          </FooterAdditionalCard>
          <FooterAdditionalCard>
            <FooterAdditionalCardSubTitle>사업자등록번호 CIN</FooterAdditionalCardSubTitle>
            <div className="space-y-1.5">
              <FooterAdditionalCardTitle>427-86-01187</FooterAdditionalCardTitle>
              <FooterAdditionalCardDescription>U74110DL2016PTC290812</FooterAdditionalCardDescription>
            </div>
          </FooterAdditionalCard>
          <FooterAdditionalCard>
            <FooterAdditionalCardSubTitle>주소 ADDRESS</FooterAdditionalCardSubTitle>
            <div className="space-y-1.5">
              <FooterAdditionalCardTitle>서울특별시 강남대로 479, 지하 1층 238호</FooterAdditionalCardTitle>
              <FooterAdditionalCardDescription>
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
              </FooterAdditionalCardDescription>
            </div>
          </FooterAdditionalCard>
        </section>
        <section id="footer-watermark" className="flex flex-wrap items-center gap-4">
          <p className="text-[0.813rem]/[1.219rem] font-black text-[#5E626F]">&copy; 2023 Hyperhire</p>
        </section>
      </Container>
    </footer>
  );
};

export { SectionFooter };
