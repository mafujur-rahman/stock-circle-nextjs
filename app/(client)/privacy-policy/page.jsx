import { HiOutlineDatabase } from "react-icons/hi";
import {
    HiOutlineShieldCheck,
    HiOutlineDocumentText,
    HiOutlineUser,
    HiOutlineLockClosed,
    HiOutlineArrowPath,
    HiOutlineBellAlert,
} from "react-icons/hi2";
import { MdGavel, MdContactMail } from "react-icons/md";

export default function PrivacyPolicy() {
    return (
        <div className="mt-[15vh]">
            <div className="px-5 md:px-12 lg:px-16 xl:px-0 max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gray-100">
                        <HiOutlineShieldCheck className="text-3xl text-gray-800" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Privacy Policy
                    </h1>

                </div>
                <p>
                    StockCircle respects your privacy and is committed to protecting the personal information shared by users on this website.
                </p>



                {/* Information We Collect */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineUser className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Information We Collect</h2>
                    </div>
                    <p>
                        We may collect the following information:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Name, email address, and contact number</li>
                        <li>Billing and payment information (processed securely through third-party payment gateways)</li>
                        <li>Course enrollment and attendance details</li>
                        <li>Communication records with our support team</li>
                    </ul>
                    <p className="font-medium text-gray-900">
                        We do not store card details, bank account numbers, or payment credentials.
                    </p>
                </section>

                {/* Use of Information */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineDatabase className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Use of Information</h2>
                    </div>
                    <p>
                        Collected information is used for:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Enrolling users in live educational sessions</li>
                        <li>Processing payments and refunds</li>
                        <li>Communicating session details, updates, and support information</li>
                        <li>Internal analysis to improve course quality and user experience</li>
                        <li>Compliance with legal and regulatory requirements</li>
                    </ul>
                </section>

                {/* Data Security */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineLockClosed className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Data Security</h2>
                    </div>
                    <p>
                        We follow reasonable security practices to protect personal information from unauthorized access, misuse, or disclosure.
                    </p>
                </section>

                {/* Information Sharing */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <MdGavel className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Information Sharing</h2>
                    </div>
                    <p>
                        Personal data is not sold or shared for marketing purposes. Information may be shared only with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Payment gateway and banking partners</li>
                        <li>Technology and communication service providers</li>
                        <li>Legal or regulatory authorities when required by law</li>
                    </ul>
                </section>

                {/* Cookies */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineDocumentText className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Cookies</h2>
                    </div>
                    <p>
                        The website may use cookies to enhance browsing experience and analyze site traffic. Users may control cookie settings through their browser.
                    </p>
                </section>

                {/* User Rights */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineBellAlert className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">User Rights</h2>
                    </div>
                    <p>
                        Users may request access, correction, or deletion of their personal information by contacting the StockCircle support team.
                    </p>
                </section>

                {/* Changes to This Policy */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineArrowPath className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Changes to This Policy</h2>
                    </div>
                    <p>
                        StockCircle reserves the right to update this Privacy Policy at any time. Continued use of the website implies acceptance of the updated policy.
                    </p>
                </section>

                {/* Contact */}
                <section className="section_topSpace space-y-4 border-t pt-8">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <MdContactMail className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Contact Us</h2>
                    </div>
                    <p>
                        For any privacy-related concerns or to exercise your rights, please contact our support team.
                    </p>
                </section>

            </div>
        </div>
    );
}