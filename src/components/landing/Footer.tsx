
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white/10 dark:bg-black/20 text-white py-12 border-t border-white/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <img
                            src="/lovable-uploads/1aed3b55-d42c-4af1-a335-cd532f67b405.png"
                            alt="FinBuddy Logo"
                            className="h-12 w-auto mb-4 dark:hidden"
                        />
                        <img
                            src="/lovable-uploads/80a6dd97-bb46-4c78-b7e7-6bf1ddfabc25.png"
                            alt="FinBuddy Logo"
                            className="h-12 w-auto mb-4 hidden dark:block"
                        />
                        <p className="text-muted-foreground text-lg">
                            FinBuddy - Your AI-powered financial assistant for smarter money management.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Supabase</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-card-foreground text-lg">Product</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                            <li><Link to="/chat" className="hover:text-primary transition-colors">AI Chat</Link></li>
                            <li><a href="#goals" className="hover:text-primary transition-colors">Goals</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-card-foreground text-lg">Company</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-card-foreground text-lg">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/20 mt-8 pt-8 text-center text-muted-foreground">
                    <p>&copy; 2024 FinBuddy. All rights reserved. Built with ♥️ by Bolt</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
