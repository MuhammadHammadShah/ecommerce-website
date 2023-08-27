import Image from "next/image";
import logo from "/public/Logo.webp";
import { LucideTwitter } from "lucide-react";
import { LucideFacebook } from "lucide-react";
import { LucideLinkedin } from "lucide-react";
export default function Footer() {
  return (
    <div className="max-2xl:">
      <div>
        <div className="grid lg:grid-cols-4 ml-16 lg:ml-16 lg:justify-evenly mt-32">
          <div>
            <Image src={logo} alt="logo" width={200} height={100} />
            <div className="w-80">
              <p className="text-lg max-[100px] leading-7  mt-8">
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
            </div>
            <div className="flex gap-x-4 mt-8 mb-8 pointer">
              <LucideTwitter />
              <LucideFacebook />
              <LucideLinkedin />
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-extrabold  text-slate-500">Company</h2>
            <h3>About</h3>
            <h3>Terms of Use</h3>
            <h3>Privacy Policy</h3>
            <h3>How it Works</h3>
            <h3>Contact Us</h3>
          </div>

          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-extrabold  text-slate-500">Support</h2>
            <h3>Support Carrer</h3>
            <h3>24h Service</h3>
            <h3>Quick Chat</h3>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-extrabold  text-slate-500">Contact</h2>
            <h3>Whatsapp</h3>
            <h3>24h Support</h3>
            <h3>Quick Chat</h3>
          </div>
        </div>
        <div>
          <hr /> {/* Horizontal line here */}
          <div className="grid grid-cols-3 ml-16 justify-evenly mt-6 mb-6">
            <p>Copyright © 2022 Dine Market</p>
            <p>
              Design by.{" "}
              <span className="text-lg font-extrabold">B313 Design Studio</span>
            </p>
            <p>
              Code by.{" "}
              <span className="text-lg font-extrabold">
                HammadShah on github
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
