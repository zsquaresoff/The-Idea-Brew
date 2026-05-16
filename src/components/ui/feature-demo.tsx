'use client';
import React from 'react';
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
	{
		title: 'Brand Identity',
		icon: Zap,
		description: 'Crafting unique visual languages that resonate with target audiences and define brand presence.',
	},
	{
		title: '3D Experiences',
		icon: Cpu,
		description: 'Building immersive three-dimensional worlds that push the boundaries of web interaction.',
	},
	{
		title: 'UI/UX Design',
		icon: Fingerprint,
		description: 'Designing intuitive and aesthetically pleasing interfaces that prioritize the user journey.',
	},
	{
		title: 'Motion Graphics',
		icon: Pencil,
		description: 'Bringing static designs to life through fluid animations and cinematic transitions.',
	},
	{
		title: 'Full-Stack Dev',
		icon: Settings2,
		description: 'Developing robust and scalable technical solutions that power modern digital experiences.',
	},
	{
		title: 'Digital Strategy',
		icon: Sparkles,
		description: 'Defining the roadmap for digital success through research, analysis, and creative vision.',
	},
];

export default function DemoOne() {
	return (
		<section className="py-24 md:py-40 w-full relative">
			{/* Background Glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
			
			<div className="mx-auto w-full max-w-6xl space-y-16 px-6 relative z-10">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tight pb-2">
						Curated Work. Distinctive Design.
					</h2>
					<p className="text-neutral-400 mt-6 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
						A showcase of digital craftsmanship, where technology meets artistry to create something truly extraordinary.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{features.map((feature, i) => (
						<div key={i} className="rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden backdrop-blur-sm hover:border-orange-500/20 transition-colors duration-500">
							<FeatureCard feature={feature} className="h-full" />
						</div>
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(10px)', y: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ delay, duration: 1, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
