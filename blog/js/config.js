$(function() {

	CMS.init({

		// Name of your site or location of logo file ,relative to root directory (img/logo.png)
		siteName: 'Lost Art of Rambling',

		// Tagline for your site
		siteTagline: 'Nothing to see here ...',

		// Email address
		siteEmail: 'your_email@example.com',

		// Name
		siteAuthor: 'Your Name',

		// Navigation items
		siteNavItems: [
			{ name: 'Github', href: 'https://github.com/tnussbaum', newWindow: false},
			{ name: 'About'}
		],

		// Posts folder name
		postsFolder: 'blog/posts',

		// Homepage posts snippet length
		postSnippetLength: 120,

		// Pages folder name
		pagesFolder: 'blog/pages',

		// Site fade speed
		fadeSpeed: 300,

		// Site footer text
		footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',

		// Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
		// to Github
		mode: 'Github',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (gh-pages)
		githubUserSettings: {
			username: 'tnussbaum',
			repo: 'tnussbaum.github.io'
		}

	});

	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false
	});

});
