import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import footerlogo from "@/public/footer-logo.png";
import downloadOnIos from "@/public/download_ios.png";
import ggplay from "@/public/ggplay.png";

export function Footer() {
  return (
    <footer className="w-full bg-[#f1f1f1] py-8">
      <div className="max-w-layout px-4 lg:px-8">
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src={footerlogo}
              alt="Sunworld - The World of Wow"
              width={125}
              height={45}
              style={{ maxHeight: "40px" }}
            />
          </div>

          {/* All information */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <p className="text-sm">©2024 Sun World. All Rights Reserved</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                <Link href="/about" className="text-sm font-bold underline">
                  About Sun World
                </Link>
                <Link href="/faqs" className="text-sm font-bold underline">
                  FAQs
                </Link>
                <Link href="/terms" className="text-sm font-bold underline">
                  Terms and Privacy
                </Link>
                <Link href="/sitemap" className="text-sm font-bold underline">
                  Site Map
                </Link>
                <Link href="/contact" className="text-sm font-bold underline">
                  Contact Us
                </Link>
              </div>
            </div>

            <p className="text-sm">
              This is the version of our website addressed to speakers of
              English in the United States. If you are a resident of another
              country or region, please select the appropriate version of Sun
              World for your country or region in the drop-down menu.
            </p>

            <div className="space-y-4">
              <p className="text-sm">
                Thông tin đăng ký doanh nghiệp: Giấy chứng nhận đăng ký doanh
                nghiệp mã số 0401805040 ngày 14/12/2016 (đăng ký lần đầu). Đăng
                ký các lần thay đổi theo từng thời điểm
              </p>
              <p className="text-sm">
                Nơi cấp: Sở Kế hoạch và Đầu tư Thành phố Đà Nẵng
              </p>
              <p className="text-sm">
                Lĩnh vực hoạt động: Hoạt động của các công viên vui chơi và công
                viên theo chủ đề; Dịch vụ lưu trú và du lịch; Dịch vụ ăn uống,
                ẩm thực
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[#666666]" />
                <div>
                  <p className="text-sm font-medium">
                    <b>Văn phòng Sun World Hà Nội:</b> Tầng 2, toà nhà Ancora,
                    03 Lương Yên, Hai Bà Trưng, TP. Hà Nội, Việt Nam
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[#666666]" />
                <div>
                  <p className="text-sm font-medium">
                    <b>Văn phòng Sun World Đà Nẵng:</b> Tầng L1M Khách sạn
                    Novotel Đà Nẵng, 36-38 Bạch Đằng, Thạch Thang, Hải Châu, Đà
                    Nẵng
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm font-medium mb-4">Get Sun Paradise App</p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <Link href="#" className="transition-opacity hover:opacity-80">
                  <Image
                    src={downloadOnIos}
                    alt="Download on the App Store"
                    width={157}
                  />
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-80">
                  <Image src={ggplay} alt="Get it on Google Play" width={157} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
