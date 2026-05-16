/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SplineSceneBasic } from "@/components/ui/demo";
import { Navbar } from "@/components/ui/navbar";
import DemoOne from "@/components/ui/feature-demo";
import { Footer } from "@/components/ui/footer-section";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] flex flex-col items-center relative overflow-x-hidden selection:bg-orange-500/30">
      <Navbar />
      <div className="w-full">
        <SplineSceneBasic />
      </div>
      <DemoOne />
      <Footer />
    </div>
  );
}
