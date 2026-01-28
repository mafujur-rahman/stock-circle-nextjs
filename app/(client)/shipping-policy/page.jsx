import {
    HiOutlineDocumentText,
    HiOutlineShieldCheck,
    HiOutlineArrowPath,
} from "react-icons/hi2";
import { MdContactMail } from "react-icons/md";

export default function ShippingPolicy() {
    return (
        <div className="mt-[15vh]">
            <div className="px-5 md:px-12 lg:px-16 xl:px-0 max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 rounded-xl bg-gray-100">
                        <HiOutlineShieldCheck className="text-3xl text-gray-800" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Shipping Policy
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
                        Orders are shipped through registered domestic courier companies and/or speed post only.
                    </p>
                    <p>
                        Shipments are dispatched within 1 day from the date of order or payment, or as per the delivery date agreed at the time of order confirmation, subject to courier or postal norms.
                    </p>
                </section>

                {/* Delivery & Responsibility */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineArrowPath className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Delivery & Responsibility</h2>
                    </div>
                    <p>
                        The Platform Owner shall not be liable for any delay in delivery caused by the courier company or postal authority.
                    </p>
                    <p>
                        Delivery of all orders will be made to the address provided by the buyer at the time of purchase. Delivery of services will be confirmed via your registered email ID.
                    </p>
                </section>

                {/* Shipping Costs */}
                <section className="section_topSpace space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100">
                            <HiOutlineDocumentText className="text-xl" />
                        </span>
                        <h2 className="text-xl font-semibold">Shipping Costs</h2>
                    </div>
                    <p>
                        If any shipping costs are levied by the seller or Platform Owner, they are non-refundable.
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
                        For any questions or concerns regarding shipping, please contact our customer service team using the information provided on this website.
                    </p>
                </section>

            </div>
        </div>
    );
}
