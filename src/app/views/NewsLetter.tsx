import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function NewsLetter() {
  return (
    <div className=" mt-28 bg-slate-200">
      <div className="flex ml-28 p-12 lg:ml-96 items-center space-x-2">
        <h2 className="text-7xl font-serif">Subscribe our Newsletter</h2>
      </div>
      <div className="flex ml-36 w-full lg:ml-[600px] max-w-sm lg:items-center space-x-1 lg:mt-8 pb-10">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
}
