import { Container } from '@/components/container';
import { HeroCard } from '@/components/hero-card';
import { MotionDiv } from '@/components/motion';
import { MobileNavbar, Navbar } from '@/components/navbar';
import { OfferBlock, OfferBlockDescription, OfferBlockTitle } from '@/components/offer-block';
import { PartnertshipCarousel } from '@/components/partnertship-carousel';
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
                            <MotionDiv
                                initial={{ opacity: 0, scale: 1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5, ease: 'easeIn' }}>
                                <SpeechBubble variant="default" arrowPosition="left">
                                    <span>풀타임, 파트타임</span>
                                </SpeechBubble>
                            </MotionDiv>
                            <MotionDiv
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}>
                                <h1 className="text-4xl/[46.8px] font-black tracking-normal text-zinc-100 lg:text-5xl/[62.4px]">
                                    최고의 실력을 가진 <span className="block">외국인 인재를 찾고 계신가요?</span>
                                </h1>
                            </MotionDiv>
                            <MotionDiv
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}>
                                <p className="text-lg/[27px] font-bold tracking-tight text-white/80 lg:text-2xl/[34px]">
                                    법률 및 인사관리 부담없이{' '}
                                    <span className="lg:block">1주일 이내에 원격으로 채용해보세요.</span>
                                </p>
                            </MotionDiv>
                        </div>
                        <MotionDiv
                            initial={{ opacity: 0, scale: 1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
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
                        </MotionDiv>
                    </div>
                    <div id="hero-right-side" className="flex flex-col items-center space-y-4">
                        <MotionDiv
                            initial={{ opacity: 0, scale: 1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
                            <SpeechBubble variant="primary" arrowPosition="middle">
                                <div className="me-1 flex size-7 items-center justify-center rounded-full bg-[#BBF3D2]">
                                    <TablerIcon name="IconCurrencyDollar" className="stroke-[#00C696] stroke-2" />
                                </div>
                                <span>월 100만원</span>
                            </SpeechBubble>
                        </MotionDiv>
                        <MotionDiv
                            initial={{ opacity: 0, scale: 1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
                            <HeroCard />
                        </MotionDiv>
                    </div>
                </section>
            </Container>
            <MotionDiv
                initial={{ opacity: 0, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                <PartnertshipCarousel />
            </MotionDiv>
        </div>
    );
};

export { SectionHero };
