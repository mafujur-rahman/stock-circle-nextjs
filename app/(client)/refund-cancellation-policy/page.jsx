import {
    HiOutlineDocumentText,
    HiOutlineShieldCheck,
    HiOutlineExclamationCircle,
    HiOutlineArrowPath,
    HiOutlineClock,
    HiOutlineCreditCard,
    HiOutlineBan,
    HiOutlineBanknotes,
} from "react-icons/hi2";
import { MdContactMail } from "react-icons/md";

export default function RefundCancellationPolicy() {
    return (
        <div className="mt-[15vh]">
            <div className="px-5 md:px-12 lg:px-16 xl:px-0 max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gray-100">
                        <HiOutlineShieldCheck className="text-3xl text-gray-800" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Refund & Cancellation Policy
                    </h1>
                </div>
                <p>
                    StockCircle follows a transparent refund and cancellation process.
                </p>



                {/* Cancellation Period */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineClock className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Cancellation Period</h2>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Course cancellation requests are accepted within 7 days from the date of purchase.</li>
                        <li>Requests must be submitted by contacting the StockCircle support team through official communication channels.</li>
                    </ul>
                </section>

                {/* Refund Terms */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineArrowPath className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Refund Terms</h2>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Refunds are applicable even if the student has attended or accessed live sessions during the 7-day period.</li>
                        <li>Approved refunds will be processed within 7 days from the date of cancellation confirmation.</li>
                        <li>Refunds will be credited to the original payment method used at the time of purchase.</li>
                    </ul>
                </section>

                {/* Non-Refundable Cases */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineBanknotes className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Non-Refundable Cases</h2>
                    </div>
                    <p>
                        Refunds will not be provided if:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>The cancellation request is made after 7 days from the purchase date</li>
                        <li>There is evidence of misuse, sharing, or violation of the Terms and Conditions</li>
                    </ul>
                </section>

                {/* Payment Processing */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineCreditCard className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Payment Processing</h2>
                    </div>
                    <p>
                        Actual credit timelines may vary depending on the payment gateway or banking institution.
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
                        For any questions regarding cancellations or refunds, please contact the StockCircle support team through official communication channels.
                    </p>
                </section>

            </div>
        </div>
    );
}