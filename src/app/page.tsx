import { partnerships } from '@/lib/partnership';

import {
    FooterAdditionalCard,
    FooterAdditionalCardDescription,
    FooterAdditionalCardSubTitle,
    FooterAdditionalCardTitle,
} from '@/components/footer-additional-card';
import { FooterCard } from '@/components/footer-card';
import { HeroCard } from '@/components/hero-card';
import { HyperhireRGBLogo } from '@/components/hyperhire-logo';
import { MobileNavbar, Navbar } from '@/components/navbar';
import { OfferBlock, OfferBlockDescription, OfferBlockTitle } from '@/components/offer-block';
import { SpeechBubble } from '@/components/speech-bubble';
import { TablerIcon } from '@/components/tabler-icon';

export default function Home() {
    return (
        <main>
            <div className="bg-gradient-to-br from-[#26C2B9] to-[#288BE7] pb-28">
                <div className="mx-auto max-w-7xl">
                    <MobileNavbar />
                    <Navbar />
                    <section id="hero" className="grid gap-9 px-2.5 lg:grid-cols-2 lg:gap-4">
                        <div id="hero-left-side" className="space-y-16">
                            <div className="space-y-4">
                                <SpeechBubble variant="default" arrowPosition="left">
                                    <span>풀타임, 파트타임</span>
                                </SpeechBubble>
                                <h1 className="text-4xl/[46.8px] font-black tracking-normal text-zinc-100 lg:text-5xl/[62.4px]">
                                    최고의 실력을 가진 <span className="block">외국인 인재를 찾고 계신가요?</span>
                                </h1>
                                <p className="text-lg/[27px] font-bold tracking-tight text-white/80 lg:text-2xl/[34px]">
                                    법률 및 인사관리 부담없이{' '}
                                    <span className="lg:block">1주일 이내에 원격으로 채용해보세요.</span>
                                </p>
                            </div>
                            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12">
                                <OfferBlock>
                                    <OfferBlockTitle>평균 월 120만원</OfferBlockTitle>
                                    <OfferBlockDescription>
                                        임금을 해당 국가를 기준으로 계산합니다.
                                    </OfferBlockDescription>
                                </OfferBlock>
                                <OfferBlock>
                                    <OfferBlockTitle>최대 3회 인력교체</OfferBlockTitle>
                                    <OfferBlockDescription>
                                        막상 채용해보니 맞지 않아도 걱정하지 마세요.
                                    </OfferBlockDescription>
                                </OfferBlock>
                                <OfferBlock>
                                    <OfferBlockTitle>평균 3일, 최대 10일</OfferBlockTitle>
                                    <OfferBlockDescription>
                                        급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
                                    </OfferBlockDescription>
                                </OfferBlock>
                            </div>
                        </div>
                        <div id="hero-right-side" className="flex flex-col items-center space-y-4">
                            <SpeechBubble variant="primary" arrowPosition="middle">
                                <div className="me-1 flex size-7 items-center justify-center rounded-full bg-[#BBF3D2]">
                                    <TablerIcon name="IconCurrencyDollar" className="stroke-[#00C696] stroke-2" />
                                </div>
                                <span>월 100만원</span>
                            </SpeechBubble>
                            <div>
                                <HeroCard />
                            </div>
                        </div>
                    </section>
                </div>
                <section id="partnership" className="mt-9 hidden items-center gap-[0.625rem] overflow-hidden lg:flex">
                    {partnerships.map((item) => (
                        <div
                            key={item.name}
                            className="flex w-80 min-w-80 items-center gap-6 rounded-xl bg-white/20 p-4">
                            <div className="flex size-14 items-center justify-center rounded-lg bg-white/40">
                                <TablerIcon name="IconBrandGithub" className="size-8 stroke-white stroke-2" />
                            </div>
                            <h5 className="text-2xl font-black text-white">{item.name}</h5>
                        </div>
                    ))}
                </section>
            </div>
            <footer className="bg-[#FBFBFB] px-2.5 py-20">
                <div className="mx-auto max-w-7xl space-y-16">
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
                                <FooterAdditionalCardDescription>
                                    Hyperhire India Private Limited
                                </FooterAdditionalCardDescription>
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
                                <FooterAdditionalCardTitle>
                                    서울특별시 강남대로 479, 지하 1층 238호
                                </FooterAdditionalCardTitle>
                                <FooterAdditionalCardDescription>
                                    D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
                                </FooterAdditionalCardDescription>
                            </div>
                        </FooterAdditionalCard>
                    </section>
                    <section id="footer-watermark" className="flex flex-wrap items-center gap-4">
                        <p className="text-[0.813rem]/[1.219rem] font-black text-[#5E626F]">&copy; 2023 Hyperhire</p>
                    </section>
                </div>
            </footer>
        </main>
    );
}
