/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'hanken': ['Hanken Grotesk', 'sans-serif'],
			  },
		},
		screens: {
			'phone': {'min': '300px', 'max': '640px'},
			sm:{'min': '640px', 'max': '768px'},
			md:{'min': '768px', 'max': '1280px'},
			mdx:{'min':'922px','max':'1280px'} ,
			xl:"1280px",
			xxl:"1536px",
			zxl: "1919px",
			smd: "680px",
			xs:"320xp",		
			ssmm:  {'min': '640px', 'max': '1224px'},
		  },
		colors:{
			bgColor: '#FAF8F5',
			grayText: '#636363',
			darkText: '#202020',
			whiteText: '#FAF8F5',
			opacityText:"#FFF",
			beigeDash: '#E8E3DF',
			creamArrow: '#FAF8F5',
			beigeCard: '#E8E3DF',
			footer:'#202020',
			footerWhitetext: '#FFF',
			footerLogo: '#D9D9D9',



		},
		
	},
	plugins: [],
}
