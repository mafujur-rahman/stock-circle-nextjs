import {
    HiOutlineDocumentText,
    HiOutlineShieldCheck,
    HiOutlineUser,
    HiOutlineLockClosed,
    HiOutlineArrowPath,
    HiOutlineExclamationCircle,
    HiOutlineLightBulb,
    HiOutlineScale,
    HiOutlineXCircle,
} from "react-icons/hi2";
import { MdGavel, MdContactMail, MdSchool } from "react-icons/md";

export default function TermsConditions() {
    return (
        <div className="mt-[15vh]">
            <div className="px-5 md:px-12 lg:px-16 xl:px-0 max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gray-100">
                        <HiOutlineShieldCheck className="text-3xl text-gray-800" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Terms & Conditions
                    </h1>
                </div>
                <p>
                    By accessing this website or purchasing any course from StockCircle, you agree to the following terms and conditions.
                </p>



                {/* Nature of Services */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <MdSchool className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Nature of Services</h2>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>StockCircle provides live educational sessions related to finance.</li>
                        <li>All content is strictly for educational and informational purposes only.</li>
                        <li>StockCircle does not provide investment advice, trading tips, portfolio management, or personalized financial recommendations.</li>
                    </ul>
                </section>

                {/* User Responsibility */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineUser className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">User Responsibility</h2>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Any financial decisions taken by users based on course learnings are solely at their own discretion.</li>
                        <li>StockCircle is not responsible for outcomes arising from individual decisions or actions.</li>
                    </ul>
                </section>

                {/* No Assurances */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineExclamationCircle className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">No Assurances</h2>
                    </div>
                    <p>
                        StockCircle does not offer any assurance, guarantee, or promise of financial results or performance.
                    </p>
                </section>

                {/* Intellectual Property */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineLightBulb className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Intellectual Property</h2>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>All content, including session recordings, study material, and website content, is the exclusive property of StockCircle.</li>
                        <li>Unauthorized copying, sharing, or redistribution is strictly prohibited.</li>
                    </ul>
                </section>

                {/* Access and Usage */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineLockClosed className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Access and Usage</h2>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Course access is provided to one registered user only.</li>
                        <li>Sharing login credentials or session content is not permitted.</li>
                    </ul>
                </section>

                {/* Limitation of Liability */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineScale className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Limitation of Liability</h2>
                    </div>
                    <p>
                        StockCircle shall not be liable for any direct or indirect loss arising from participation in courses or reliance on educational content.
                    </p>
                </section>

                {/* Termination */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineXCircle className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Termination</h2>
                    </div>
                    <p>
                        StockCircle reserves the right to suspend or terminate user access in case of violation of these terms.
                    </p>
                </section>

                {/* Governing Law */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <MdGavel className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Governing Law</h2>
                    </div>
                    <p>
                        These terms and policies shall be governed by and interpreted in accordance with the laws of India.
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
                        For any questions regarding these terms, please contact the StockCircle support team.
                    </p>
                </section>

            </div>
        </div>
    );
}