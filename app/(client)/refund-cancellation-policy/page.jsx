import {
    HiOutlineDocumentText,
    HiOutlineShieldCheck,
    HiOutlineExclamationCircle,
    HiOutlineArrowPath,
} from "react-icons/hi2";
import { MdContactMail } from "react-icons/md";

export default function RefundCancellationPolicy() {
    return (
        <div className="mt-[15vh]">
            <div className="px-5 md:px-12 lg:px-16 xl:px-0 max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 rounded-xl bg-gray-100">
                        <HiOutlineShieldCheck className="text-3xl text-gray-800" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Refund & Cancellation Policy
                    </h1>
                </div>

                {/* Intro */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineDocumentText className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Overview</h2>
                    </div>
                    <p>
                        This Refund and Cancellation Policy outlines how you can cancel or seek a refund for a product or service purchased through the Platform.
                    </p>
                </section>

                {/* Cancellations */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineExclamationCircle className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Cancellations</h2>
                    </div>
                    <p>
                        Cancellations will only be considered if the request is made within 10 days of placing the order.
                    </p>
                    <p>
                        Cancellation requests may not be entertained if the orders have already been communicated to the sellers/merchants listed on the Platform, or if the product is out for delivery. In such cases, you may choose to reject the product at the doorstep.
                    </p>
                    <p>
                        StockCircle does not accept cancellation requests for perishable items like flowers, eatables, etc. However, refunds or replacements may be provided if the product delivered is of poor quality.
                    </p>
                </section>

                {/* Damaged or Defective Items */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineArrowPath className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Damaged or Defective Items</h2>
                    </div>
                    <p>
                        If you receive damaged or defective items, please report to our customer service team within 10 days of receipt. The request will be entertained after verification by the seller/merchant listed on the Platform.
                    </p>
                </section>

                {/* Product Not as Expected */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineExclamationCircle className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Product Not as Expected</h2>
                    </div>
                    <p>
                        If the product received is not as shown on the Platform or does not meet your expectations, you must notify our customer service team within 10 days of receiving the product. The team will review your complaint and take an appropriate decision.
                    </p>
                </section>

                {/* Warranty Products */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineDocumentText className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Products with Warranty</h2>
                    </div>
                    <p>
                        For products that come with a manufacturer’s warranty, please refer the issue directly to the manufacturer for resolution.
                    </p>
                </section>

                {/* Refund Processing */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineArrowPath className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Refund Processing</h2>
                    </div>
                    <p>
                        Any refunds approved by StockCircle will be processed within 3 days to your original payment method.
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
                        For any questions or concerns regarding cancellations, refunds, or product issues, please contact our customer service using the information provided on this website.
                    </p>
                </section>

            </div>
        </div>
    );
}
