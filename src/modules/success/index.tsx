"use client";

import { Payment, PAYMENT } from "@/lib/constant/options";
import SuccessItems from "./item";
import Message from "./message";
import OrderDetail from "./order-detail";
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const OrderSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    const success =
      typeof window !== "undefined" ? localStorage.getItem("success") : null;
    if (!success) {
      router.replace("/");
    }
  }, [router]);

  const downloadInvoice = async () => {
    console.log("downoad invoice called");
    const element = document.querySelector(".order-success-content");
    if (element && element instanceof HTMLElement) {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 190;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      while (heightLeft > 0) {
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;
        if (heightLeft > 0) pdf.addPage();
      }

      pdf.save("invoice.pdf");
    }
  };
  const [payment, setPayment] = useState<Payment>({
    id: "",
    name: "",
    logo: "",
  });

  useEffect(() => {
    const paymentId = localStorage.getItem("paymentID");
    if (paymentId) {
      console.log("pymentId:", paymentId);
      const filteredPayment = PAYMENT.find(
        (payment) => payment.id === JSON.parse(paymentId)
      );
      console.log("filteredPayment:", filteredPayment);
      if (filteredPayment) setPayment(filteredPayment);
    }
  }, []);
  return (
    <section className="w-full flex flex-col items-center lg:min-h-72 order-success-content">
      <div className="w-full max-w-[1300px] lg:mt-16 md:mt-16 mt-4">
        <div className="w-full grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 gap-4">
          <div className="lg:col-span-3 md:col-span-3 col-span-1 min-h-32 flex flex-col gap-4">
            <div className="w-full min-h-32 flex flex-col gap-4">
              <Message />
              <OrderDetail paymentMethod={payment} />
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 col-span-1">
            <SuccessItems downloadInvoice={downloadInvoice} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default dynamic(() => Promise.resolve(OrderSuccess), { ssr: false });
