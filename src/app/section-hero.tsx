import { partnerships } from '@/lib/partnership';

import { Container } from '@/components/container';
import { HeroCard } from '@/components/hero-card';
import { MobileNavbar, Navbar } from '@/components/navbar';
import { OfferBlock, OfferBlockDescription, OfferBlockTitle } from '@/components/offer-block';
import { SpeechBubble } from '@/components/speech-bubble';
import { TablerIcon } from '@/components/tabler-icon';

const SectionHero = () => {
    return (
        <div className="bg-gradient-to-br from-[#26C2B9] to-[#288BE7] pb-28">
            <Container>
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
                                <OfferBlockDescription>임금을 해당 국가를 기준으로 계산합니다.</OfferBlockDescription>
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
            </Container>
            <section id="partnership" className="mt-9 hidden items-center gap-[0.625rem] overflow-hidden lg:flex">
                {partnerships.map((item) => (
                    <div key={item.name} className="flex w-80 min-w-80 items-center gap-6 rounded-xl bg-white/20 p-4">
                        <div className="flex size-14 items-center justify-center rounded-lg bg-white/40">
                            <TablerIcon name="IconBrandGithub" className="size-8 stroke-white stroke-2" />
                        </div>
                        <h5 className="text-2xl font-black text-white">{item.name}</h5>
                    </div>
                ))}
            </section>
        </div>
    );
};

export { SectionHero };
