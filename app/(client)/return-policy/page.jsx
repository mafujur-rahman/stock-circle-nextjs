import {
    HiOutlineDocumentText,
    HiOutlineShieldCheck,
    HiOutlineExclamationCircle,
    HiOutlineArrowPath,
} from "react-icons/hi2";
import { MdContactMail } from "react-icons/md";

export default function ReturnPolicy() {
    return (
        <div className="mt-[15vh]">
            <div className="px-5 md:px-12 lg:px-16 xl:px-0 max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 rounded-xl bg-gray-100">
                        <HiOutlineShieldCheck className="text-3xl text-gray-800" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Return Policy
                    </h1>
                </div>

                {/* Overview */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineDocumentText className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Overview</h2>
                    </div>
                    <p>
                        We offer refund or exchange within the first 10 days from the date of your purchase.
                        After 10 days, returns, exchanges, or refunds will not be provided.
                    </p>
                </section>

                {/* Eligibility for Return / Exchange */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineExclamationCircle className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Eligibility for Return / Exchange</h2>
                    </div>
                    <p>
                        To be eligible for a return or exchange, the following conditions must be met:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>The purchased item should be unused and in the same condition as received.</li>
                        <li>The item must have its original packaging.</li>
                        <li>If the item was purchased on sale, it may not be eligible for return or exchange.</li>
                        <li>Items will be replaced (based on an exchange request) only if they are defective or damaged.</li>
                    </ul>
                </section>

                {/* Exempted Items */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineArrowPath className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Exempted Items</h2>
                    </div>
                    <p>
                        Certain categories of products may be exempted from returns or refunds. Such categories will be clearly identified to you at the time of purchase.
                    </p>
                </section>

                {/* Process for Returns / Exchanges */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineDocumentText className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Process for Returns / Exchanges</h2>
                    </div>
                    <p>
                        Once your returned product is received and inspected by us, we will notify you via email about receipt of the returned/exchanged product.
                        If your request passes our quality check, your return or exchange will be processed in accordance with our policies.
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
                        For any questions or concerns regarding returns or exchanges, please contact our customer service team using the information provided on this website.
                    </p>
                </section>

            </div>
        </div>
    );
}
