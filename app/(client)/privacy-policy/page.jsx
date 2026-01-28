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
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 rounded-xl bg-gray-100">
                        <HiOutlineShieldCheck className="text-3xl text-gray-800" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Privacy Policy
                    </h1>
                </div>

                {/* Introduction */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineDocumentText className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Introduction</h2>
                    </div>
                    <p>
                        This Privacy Policy describes how <strong>stockcircle.in</strong>, <strong>StockCircle</strong> and its affiliates
                        (collectively "StockCircle", we, our, us) collect, use, share, protect or otherwise process your information/personal data
                        through our website (hereinafter referred to as Platform).
                    </p>
                    <p>
                        Please note that you may be able to browse certain sections of the Platform without registering with us.
                        We do not offer any product/service under this Platform outside India and your personal data will primarily be stored
                        and processed in India. By visiting this Platform, providing your information or availing any product/service offered
                        on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use
                        and the applicable service/product terms and conditions, and agree to be governed by the laws of India including
                        but not limited to the laws applicable to data protection and privacy. If you do not agree, please do not use or access our Platform.
                    </p>
                </section>

                {/* Collection */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineUser className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Collection of Information</h2>
                    </div>
                    <p>
                        We collect your personal data when you use our Platform, services, or otherwise interact with us during the course of our relationship,
                        and related information provided from time to time. Some of the information that we may collect includes but is not limited to personal data/information
                        provided to us during sign-up/registering or using our Platform such as name, date of birth, address, telephone/mobile number, email ID and/or
                        any such information shared as proof of identity or address.
                    </p>
                    <p>
                        Some sensitive personal data may be collected with your consent, such as your bank account or credit/debit card or other payment instrument information
                        or biometric information (such as facial features or physiological information) to enable certain features when opted for, all in accordance with applicable law(s).
                    </p>
                    <p>
                        You always have the option to not provide information by choosing not to use a particular service or feature on the Platform. We may track your behaviour,
                        preferences, and other information that you choose to provide on our Platform. This information is compiled and analysed on an aggregated basis.
                    </p>
                    <p>
                        We will also collect information related to your transactions on the Platform and third-party business partner platforms. When such a third-party business partner collects
                        your personal data directly from you, you will be governed by their privacy policies. We shall not be responsible for their privacy practices, and we request you to read their
                        privacy policies prior to disclosing any information.
                    </p>
                    <p className="font-medium text-gray-900">
                        If you receive an email or call claiming to be StockCircle asking for debit/credit card PIN, net-banking, or mobile banking passwords, never provide such information.
                        Report it immediately to an appropriate law enforcement agency.
                    </p>
                </section>

                {/* Usage */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineDatabase className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Usage of Information</h2>
                    </div>
                    <p>
                        We use personal data to provide services you request. To the extent we use your personal data to market to you, we will provide you the ability to opt-out.
                        We use your personal data to assist sellers and business partners in handling and fulfilling orders; enhancing customer experience; resolving disputes; troubleshooting problems;
                        informing you about online/offline offers, products, services, and updates; customizing your experience; detecting and protecting against errors, fraud, and other criminal activity;
                        enforcing our terms; conducting marketing research, analysis, and surveys; and as otherwise described at the time of collection.
                    </p>
                    <p>
                        You understand that access to these products/services may be affected if permission is not provided.
                    </p>
                </section>

                {/* Sharing */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <MdGavel className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Sharing of Information</h2>
                    </div>
                    <p>
                        We may share your personal data internally within our group entities, other corporate entities, and affiliates to provide you access to their services and products.
                        These entities and affiliates may market to you unless you explicitly opt-out.
                    </p>
                    <p>
                        We may disclose personal data to third parties such as sellers, business partners, third-party service providers (including logistics partners, prepaid payment instrument issuers,
                        third-party reward programs, and other payment methods opted by you). Disclosures may be required to provide services, comply with legal obligations, enforce user agreements,
                        facilitate marketing/advertising, and prevent/detect fraudulent or illegal activities.
                    </p>
                    <p>
                        We may disclose personal/sensitive data to government agencies or authorized law enforcement if required by law or in good faith to respond to subpoenas, court orders, or legal processes.
                        We may also disclose data to law enforcement, rights owners, or others in good faith if necessary to enforce Terms, respond to third-party claims, or protect rights, property, or safety.
                    </p>
                </section>

                {/* Security */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineLockClosed className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Security Precautions</h2>
                    </div>
                    <p>
                        To protect your personal data from unauthorized access, disclosure, loss, or misuse, we adopt reasonable security practices and procedures.
                        We adhere to security guidelines and offer secure servers. However, transmission over the internet cannot be guaranteed fully secure.
                        Users accept the inherent risks of using the Platform and are responsible for protecting login/password records.
                    </p>
                </section>

                {/* Data Deletion & Retention */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineArrowPath className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Data Deletion & Retention</h2>
                    </div>
                    <p>
                        You may delete your account via profile settings, which will remove all account information. You may also contact us for assistance.
                        Pending grievances, claims, shipments, or other services may delay deletion.
                    </p>
                    <p>
                        We retain personal data only as long as necessary or required by law. Data may also be retained to prevent fraud, future abuse, or for legitimate purposes.
                        Data may be kept in anonymized form for research and analytics.
                    </p>
                </section>

                {/* Your Rights */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineBellAlert className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Your Rights</h2>
                    </div>
                    <p>
                        You may access, rectify, and update your personal data through Platform functionalities.
                    </p>
                </section>

                {/* Consent */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineUser className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Consent</h2>
                    </div>
                    <p>
                        By using our Platform or providing information, you consent to collection, use, storage, disclosure, and processing of your information per this Privacy Policy.
                        If you provide data about others, you confirm authority to do so and permit use according to this Policy.
                    </p>
                    <p>
                        You consent to contact via SMS, calls, emails, or messaging apps for purposes described in this Policy. You may withdraw consent by contacting the Grievance Officer,
                        mentioning “Withdrawal of consent for processing personal data”. Withdrawal will not be retrospective, and services may be restricted if consent is withdrawn.
                    </p>
                </section>

                {/* Changes */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineDocumentText className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Changes to Privacy Policy</h2>
                    </div>
                    <p>
                        Please check our Privacy Policy periodically. We may update it to reflect changes in our practices and may notify you of significant changes as required by applicable laws.
                    </p>
                </section>

                {/* Grievance Officer */}
                <section className="section_topSpace space-y-4 border-t pt-8">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <MdContactMail className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Grievance Officer</h2>
                    </div>
                    <p>Insert Name of the Officer:</p>
                    <p>Designation:</p>
                    <p>Company Name & Address:</p>
                </section>

            </div>
        </div>
    );
}
