"use client"

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';
import { Award, BookOpen, ChefHat, Fish, Grape, HelpCircle, Mail, Sparkles, Wine } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="radialGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Specials", id: "specials" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sakura Lounge"
          button={{ text: "Reserve Table", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Where Sushi Meets Craft Cocktails"
          description="Experience the perfect fusion of traditional Japanese sushi artistry and innovative mixology in our elegant dining space"
          tag="Premium Dining"
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/gd2f4a9011d6e07ecf5ed98991d8989527cfdf9b76df4983e2354293e7b1a65040a3cf6f142403ae6c3ea6c5bb8028270078eacd69d8db1ec98d0f198572c6191_1280.jpg",
              imageAlt: "Premium sushi platter"
            },
            {
              imageSrc: "https://pixabay.com/get/g001d62cba06cd6fae1fbe1534666a2a6ff81c050725a0b8dfdd14daefa087073b7ec1aa2bf606ca397ec28739da08499b7225055ac311da60c115b86c5642daa_1280.jpg",
              imageAlt: "Colorful craft cocktails"
            },
            {
              imageSrc: "https://pixabay.com/get/gc6fb886d24e887b7903abfd189a8aaf94c46ccd87f2fe02e8e2a3c2fe0945d510554f6f26688e09c9f0d69becdb76bfe7e7b77a8fdc43081a35f5ecc08d152d4_1280.jpg",
              imageAlt: "Sushi chef at work"
            },
            {
              imageSrc: "https://pixabay.com/get/gb0d10bb5f28e32efe231d1a7268edd459e5d7e94731b1003f22e1ab909025706bcec5a71a1bac3c5afe4232d46f2dee1775fc45c6d44d185c317c6c2876b30f7_1280.jpg",
              imageAlt: "Sake cocktail presentation"
            }
          ]}
          buttons={[
            { text: "Make Reservation", href: "contact" },
            { text: "View Menu", href: "menu" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Sakura Lounge"
          description={[
            "We are passionate about creating an unforgettable dining experience where traditional Japanese sushi craftsmanship meets innovative cocktail culture.",
            "Our master chefs use only the finest, freshest ingredients while our skilled mixologists craft unique cocktails that perfectly complement each dish."
          ]}
          buttons={[{ text: "Our Story", href: "about" }]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="What Makes Us Special"
          description="Discover the elements that create our unique dining experience"
          tag="Excellence"
          tagIcon={Award}
          features={[
            { title: "Fresh Daily Ingredients", icon: Fish },
            { title: "Master Sushi Chefs", icon: ChefHat },
            { title: "Craft Cocktails", icon: Wine },
            { title: "Elegant Atmosphere", icon: Sparkles },
            { title: "Premium Sake Selection", icon: Grape }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          showIconBoxBackground={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about dining with us"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "Do you take reservations?",
              content: "Yes, we highly recommend making reservations, especially for dinner service and weekends. You can book online through our website or call us directly."
            },
            {
              id: "2",
              title: "Do you have vegetarian and vegan options?",
              content: "Absolutely! We offer a variety of vegetarian sushi rolls, salads, and appetizers. We also have several vegan options including vegetable rolls and plant-based cocktails."
            },
            {
              id: "3",
              title: "What are your hours of operation?",
              content: "We're open Tuesday through Sunday. Lunch: 11:30 AM - 2:30 PM, Dinner: 5:00 PM - 10:00 PM. We're closed on Mondays."
            },
            {
              id: "4",
              title: "Do you offer happy hour specials?",
              content: "Yes! Our happy hour runs Tuesday through Friday from 5:00-7:00 PM featuring discounted cocktails, sake, and select appetizers."
            },
            {
              id: "5",
              title: "Can you accommodate food allergies?",
              content: "We take food allergies very seriously. Please inform your server of any allergies or dietary restrictions and our kitchen will prepare your meal accordingly."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest from Sakura Lounge"
          description="Stay updated with our latest menu items, events, and culinary insights"
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Menu",
              title: "Spring Seasonal Menu Launch",
              excerpt: "Discover our new spring sushi creations featuring fresh seasonal ingredients and innovative flavor combinations",
              imageSrc: "https://pixabay.com/get/g2b3e969f28d25c8059a2db3281d2e123324aa571792a13f33a470005b0052cb8a70bcce7cd4000fff166ca7fdb05a4a222ae24a6e96c51382e0d198fd4cc1f85_1280.jpg",
              imageAlt: "Spring seasonal sushi menu",
              authorName: "Chef Yuki Tanaka",
              authorAvatar: "https://pixabay.com/get/g1d6a5fe5ae1d17ea499e2754879810fe0b6866a169fdee13b04204b09f07fe1ebe42ced46ea8c3016dcf549cc97e2d71c97e0c9fcef865f83b0d6b6a67229acb_1280.jpg",
              date: "Mar 15, 2025"
            },
            {
              id: "2",
              category: "Cocktails",
              title: "Perfect Sushi & Cocktail Pairings",
              excerpt: "Learn how to pair our signature cocktails with different types of sushi for the ultimate dining experience",
              imageSrc: "https://pixabay.com/get/g24a1002c17a9ae7b8c74538430daa274fac550ab2775099a73060e256469c30d939cc7e6bf6784a179bead7335a6fc4066208d07c87bdae4d8984f072e278b82_1280.jpg",
              imageAlt: "Sushi and cocktail pairing",
              authorName: "Alex Rodriguez",
              authorAvatar: "https://pixabay.com/get/g3b4794369affb32d3fd0c5c27f19b2b45227e9e035d21c2bb16766f8141b9470ded800991e5dc49d7cfa3224f87ae6fd532a460325ebaf9494d87664a3129c2a_1280.jpg",
              date: "Mar 10, 2025"
            },
            {
              id: "3",
              category: "Story",
              title: "Meet Our Head Chef",
              excerpt: "Get to know Chef Yuki's journey from Tokyo to our kitchen and his philosophy on modern sushi making",
              imageSrc: "https://pixabay.com/get/g0ab38e233f378cf434528c2c6b2f95668a9129da99c08e183a60edd931e09cf01a971b0403cb6f6fbea6f78b77c89d702c2b8a3bbca9d3a53675a13745d0ff8d_1280.jpg",
              imageAlt: "Chef Yuki in the kitchen",
              authorName: "Sara Kim",
              authorAvatar: "https://pixabay.com/get/g4d12a917ade8ea82a655ebda4e0b1642d46feebc9f5741eff57605f621e30f8c6a1b1207ad461d70db7d7ba39b28c8b7839f06d98483b8feac75903b2e0fef17_1280.jpg",
              date: "Mar 5, 2025"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Connected with Sakura Lounge"
          description="Subscribe to receive updates on new menu items, special events, and exclusive offers"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive marketing emails from Sakura Lounge. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Sakura Lounge"
          columns={[
            {
              items: [
                { label: "Menu", href: "menu" },
                { label: "Reservations", href: "contact" },
                { label: "Private Events", href: "events" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Chefs", href: "team" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Location", href: "location" },
                { label: "Hours", href: "hours" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}