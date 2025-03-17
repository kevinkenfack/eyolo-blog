import SplashBanner from "@/components/splash/Banner";
import Features from "@/components/splash/Features";
import HomePages from "@/components/splash/HomePages";
import InnerPages from "@/components/splash/InnerPages";
import PickFeatures from "@/components/splash/PickFeatures";
import SplashFooter from "@/components/splash/SplashFooter";

const Splash = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <SplashBanner />
      <PickFeatures />
      <HomePages />
      <Features />
      <InnerPages />
      <SplashFooter />
    </main>
  );
};

export default Splash;
