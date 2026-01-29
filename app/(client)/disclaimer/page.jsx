import {
    HiOutlineDocumentText,
    HiOutlineShieldCheck,
    HiOutlineExclamationCircle,
    HiOutlineLightBulb,
    HiOutlineScale,
    HiOutlineBan,
    HiOutlineBanknotes,
} from "react-icons/hi2";
import { MdContactMail, MdSchool } from "react-icons/md";

export default function Disclaimer() {
    return (
        <div className="mt-[15vh]">
            <div className="px-5 md:px-12 lg:px-16 xl:px-0 max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gray-100">
                        <HiOutlineShieldCheck className="text-3xl text-gray-800" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Disclaimer
                    </h1>
                </div>
                <p>
                    The content provided on this website and through StockCircle's courses, live sessions, and educational materials is strictly for learning and educational purposes only.
                </p>



                {/* Nature of Platform */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <MdSchool className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Nature of Platform</h2>
                    </div>
                    <p>
                        StockCircle is an education and coaching platform focused on teaching concepts related to finance and financial markets. We cover finance in a broad and academic manner to help students understand frameworks, tools, and methodologies.
                    </p>
                </section>

                {/* What We Do Not Provide */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineBanknotes className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">What We Do Not Provide</h2>
                    </div>
                    <p className="font-medium">We do not:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Provide investment tips or stock-specific recommendations</li>
                        <li>Offer buy, sell, or hold calls</li>
                        <li>Provide portfolio management services</li>
                        <li>Offer personalized or individualized financial advice</li>
                    </ul>
                </section>

                {/* No Investment Advice */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineExclamationCircle className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">No Investment Advice</h2>
                    </div>
                    <p>
                        Nothing on this website, in live sessions, or in any course material should be interpreted as investment advice, financial advice, or a recommendation of any kind.
                    </p>
                </section>

                {/* User Responsibility */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineLightBulb className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">User Responsibility</h2>
                    </div>
                    <p>
                        Any financial decision taken by a user after attending our sessions is made at their own discretion and responsibility. StockCircle shall not be held liable for any outcomes, losses, or decisions arising from the use of educational content.
                    </p>
                </section>

                {/* Recommendation */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineScale className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Professional Consultation</h2>
                    </div>
                    <p>
                        Users are encouraged to consult with a qualified financial professional before making any financial or investment decisions.
                    </p>
                </section>

                {/* Contact Information */}
                <section className="section_topSpace space-y-4 border-t pt-8">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <MdContactMail className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Contact Information</h2>
                    </div>
                    <p>
                        For any questions regarding this disclaimer or our educational services, please contact the StockCircle support team.
                    </p>
                </section>

            </div>
        </div>
    );
}