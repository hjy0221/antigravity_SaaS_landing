import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <span className="font-extrabold text-2xl tracking-tight text-gray-900">
                                WriteFlow
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
                            AI 기술로 인류의 창의력을 증폭시키고 더 나은 콘텐츠 생태계를 만듭니다.
                        </p>
                        <div className="flex items-center gap-4 text-gray-400">
                            <Globe className="w-5 h-5 hover:text-gray-600 cursor-pointer" />
                            <div className="w-5 h-5 bg-gray-300 rounded-full hover:bg-gray-400 cursor-pointer"></div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-6 tracking-wide text-sm">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">AI Editor</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Templates</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Team Collab</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-6 tracking-wide text-sm">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">API Docs</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Guides</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-6 tracking-wide text-sm">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">Privacy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© 2026 WriteFlow AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
