'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FrameIcon, Linkedin, Instagram, Facebook, Youtube, Dribbble, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Company',
		links: [
			{ title: 'About Us', href: '#' },
			{ title: 'Services', href: '#' },
			{ title: 'Privacy Policy', href: '#' },
			{ title: 'Terms of Service', href: '#' },
		],
	},
	{
		label: 'Connect',
		links: [
			{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/zeeshan-k-11038759/', icon: Linkedin },
			{ title: 'Instagram', href: 'https://www.instagram.com/zsquaresoff/?hl=en', icon: Instagram },
			{ title: 'WhatsApp', href: 'https://wa.me/971505362517', icon: MessageCircle },
			{ title: 'Facebook', href: 'https://facebook.com', icon: Facebook },
			{ title: 'YouTube', href: 'https://youtube.com', icon: Youtube },
			{ title: 'Dribbble', href: 'https://dribbble.com/zsquaresoff', icon: Dribbble },
		],
	},
];

export function Footer() {
	return (
		<footer className="relative w-full flex flex-col items-center justify-center border-t border-white/5 bg-[#030303] px-6 py-16 lg:py-24 mt-20 overflow-hidden">
			{/* Cinematic Footer Glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_70%)] pointer-events-none" />
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

			<div className="grid w-full max-w-7xl gap-12 xl:grid-cols-3 xl:gap-8 relative z-10">
				<AnimatedContainer className="space-y-8 flex flex-col items-center text-center xl:items-start xl:text-left">
					{/* Contact Details */}
					<div className="space-y-6 pt-4 flex flex-col items-center xl:items-start">
						<div className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors duration-300 group">
							<Mail className="size-6 text-orange-500 group-hover:scale-110 transition-transform" />
							<a href="mailto:theideabrew@outlook.com" className="text-xl font-light">
								theideabrew@outlook.com
							</a>
						</div>
						<div className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors duration-300 group">
							<Phone className="size-6 text-orange-500 group-hover:scale-110 transition-transform" />
							<a href="https://wa.me/971505362517" target="_blank" rel="noopener noreferrer" className="text-xl font-light">
								+971 50 536 25 17 <span className="text-xs text-neutral-500 ml-2">(click to message on WhatsApp)</span>
							</a>
						</div>
						<div className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors duration-300 group">
							<MapPin className="size-6 text-orange-500 group-hover:scale-110 transition-transform" />
							<span className="text-xl font-light">Dubai, United Arab Emirates</span>
						</div>
					</div>

					<p className="text-neutral-600 mt-12 text-xs tracking-widest uppercase">
						© {new Date().getFullYear()} Idea Brew. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="grid grid-cols-1 sm:grid-cols-2 xl:col-span-2 text-center gap-y-12 sm:gap-8">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1} className="flex flex-col items-center text-center">
							<div className="flex flex-col items-center">
								<h3 className="text-xs text-white font-display font-semibold tracking-[0.2em] uppercase mb-6">{section.label}</h3>
								<ul className="text-neutral-400 space-y-4 text-sm font-light flex flex-col items-center">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-orange-400 inline-flex items-center transition-colors duration-300"
											>
												{link.icon && <link.icon className="me-2 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
	key?: string | number;
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
			viewport={{ once: true, margin: "-50px" }}
			transition={{ delay, duration: 1, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
