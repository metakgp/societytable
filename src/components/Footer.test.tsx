import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
	it('renders without crashing', () => {
		render(<Footer />);
		const footerElement = screen.getByRole('contentinfo');
		expect(footerElement).toBeInTheDocument();
	});

	it('displays the correct footer text content', () => {
		render(<Footer />);
		
		const maintainedByText = screen.getByText(/Maintained with/);
		const createdByText = screen.getByText(/Created with/);
		const contributeText = screen.getByText(/contribute suggestions/);
		const addSocietyText = screen.getByText(/add a society/);
		
		expect(maintainedByText).toBeInTheDocument();
		expect(createdByText).toBeInTheDocument();
		expect(contributeText).toBeInTheDocument();
		expect(addSocietyText).toBeInTheDocument();
	});

	it('renders all footer links', () => {
		render(<Footer />);
		
		const metaKGPLink = screen.getByRole('link', { name: /metaKGP/i });
		const scholarsAvenueLink = screen.getByRole('link', { name: /The Scholars' Avenue/i });
		const githubLink = screen.getByRole('link', { name: /Github/i });
		const slackLink = screen.getByRole('link', { name: /Slack/i });
		const reportLink = screen.getByRole('link', { name: /here/i });
		
		expect(metaKGPLink).toBeInTheDocument();
		expect(metaKGPLink).toHaveAttribute('href', 'https://metakgp.org');
		
		expect(scholarsAvenueLink).toBeInTheDocument();
		expect(scholarsAvenueLink).toHaveAttribute('href', 'https://www.facebook.com/scholarsavenue/');
		
		expect(githubLink).toBeInTheDocument();
		expect(githubLink).toHaveAttribute('href', 'https://github.com/metakgp/societytable');
		
		expect(slackLink).toBeInTheDocument();
		expect(slackLink).toHaveAttribute('href', 'https://slack.metakgp.org');
		
		expect(reportLink).toBeInTheDocument();
		expect(reportLink).toHaveAttribute('href', 'https://github.com/metakgp/societytable/issues/new?template=new_soc.yml');
	});

	it('applies correct CSS classes', () => {
		render(<Footer />);

		const footerElement = screen.getByRole('contentinfo');
		expect(footerElement).toHaveClass('footer');

		const metaKGPLink = screen.getByRole('link', { name: /metaKGP/i });
		const scholarsAvenueLink = screen.getByRole('link', { name: /The Scholars' Avenue/i });
		const githubLink = screen.getByRole('link', { name: /Github/i });
		const slackLink = screen.getByRole('link', { name: /Slack/i });
		const reportLink = screen.getByRole('link', { name: /here/i });

		expect(metaKGPLink).toHaveClass('footer-highlight');
		expect(scholarsAvenueLink).toHaveClass('footer-highlight');
		expect(githubLink).toHaveClass('footer-highlight');
		expect(slackLink).toHaveClass('footer-highlight');
		expect(reportLink).toHaveClass('footer-highlight');
	});

	it('renders the special character formatting correctly', () => {
		render(<Footer />);
		
		const specialCharElement = screen.getByText('</>');
		expect(specialCharElement).toBeInTheDocument();
	});
});