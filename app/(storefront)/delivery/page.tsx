"use client"
import { motion } from "framer-motion"
import AnimatedCounter from "@/components/animated-counter"

const DeliveryPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <main>
      {/* Hero Section */}
      <section
      className="relative py-16 md:py-32 px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage: "url(/professional-shipping-logistics-warehouse-with-pac.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated gradient elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/3 rounded-full blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Delivering Excellence, Wherever You Are
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 mb-12 text-balance max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Fast, reliable, and secure shipping worldwide. We ensure your precision instruments arrive in perfect
            condition.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all"
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
          >
            <div className="text-4xl font-bold mb-3 text-white">
              <AnimatedCounter from={0} to={5} duration={2} />
              <span className="text-2xl">-</span>
              <AnimatedCounter from={0} to={2} duration={2} />
            </div>
            <p className="text-white/70 text-sm font-medium">Business days for domestic delivery</p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all"
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
          >
            <div className="text-4xl font-bold mb-3 text-white">
              <AnimatedCounter from={0} to={14} duration={2} />
              <span className="text-2xl">-</span>
              <AnimatedCounter from={0} to={7} duration={2} />
            </div>
            <p className="text-white/70 text-sm font-medium">Business days for international delivery</p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all"
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
          >
            <div className="text-4xl font-bold mb-3 text-white">
              <AnimatedCounter from={0} to={100} duration={2} />
              <span className="text-2xl">%</span>
            </div>
            <p className="text-white/70 text-sm font-medium">Medical-grade protective packaging</p>
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* Shipping Options Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Shipping Options</h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          </motion.div>

          {/* Domestic Shipping - Image Left */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-l-2xl overflow-hidden border border-accent/20 h-96 md:h-full min-h-96">
              <img src="/domestic-shipping-truck-delivery-pakistan.jpg" alt="Domestic shipping" className="w-full h-full object-cover" />
            </div>

            <motion.div
              className="bg-card rounded-r-2xl p-8 md:p-12 border border-l-0 border-accent/20 flex flex-col justify-center h-96 md:h-full min-h-96"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <motion.h3
                className="text-3xl font-bold text-foreground mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Domestic Shipping
              </motion.h3>
              <p className="text-foreground/70 mb-6">
                For deliveries within Pakistan, we rely on trusted courier partners to provide fast and reliable
                service.
              </p>
              <motion.ul
                className="space-y-3 text-foreground/70"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-lg">→</span>
                  <span>
                    <strong>Standard Delivery:</strong> 2–5 business days
                  </span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-lg">→</span>
                  <span>Metropolitan areas receive shipments sooner</span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-lg">→</span>
                  <span>Remote locations may require slightly longer</span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-lg">→</span>
                  <span>Email or SMS notifications upon dispatch</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* International Shipping - Image Right */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-card rounded-l-2xl p-8 md:p-12 border border-accent/20 flex flex-col justify-center h-96 md:h-full min-h-96 order-2 md:order-1"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <motion.h3
                className="text-3xl font-bold text-foreground mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                International Shipping
              </motion.h3>
              <p className="text-foreground/70 mb-6">
                We proudly ship worldwide, serving clients across Asia, Europe, the Middle East, North America, and
                beyond.
              </p>
              <motion.ul
                className="space-y-3 text-foreground/70"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-lg">→</span>
                  <span>
                    <strong>Standard Delivery:</strong> 7–14 business days
                  </span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-lg">→</span>
                  <span>
                    <strong>Express Delivery:</strong> 3–7 business days
                  </span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-lg">→</span>
                  <span>Partners: DHL, FedEx, and other global couriers</span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-lg">→</span>
                  <span>Timelines may vary due to customs or external factors</span>
                </motion.li>
              </motion.ul>
            </motion.div>

            <div className="rounded-r-2xl overflow-hidden border border-accent/20 h-96 md:h-full min-h-96 order-1 md:order-2">
              <img
                src="/international-shipping-airplane-cargo-global-logis.jpg"
                alt="International shipping"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shipping Charges Section - Image Left */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Shipping Charges</h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-l-2xl overflow-hidden border border-accent/20 h-96 md:h-full min-h-96">
              <img
                src="/calculator-pricing-cost-analysis-financial-plannin.jpg"
                alt="Shipping cost calculation"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              className="bg-card rounded-r-2xl p-8 md:p-12 border border-l-0 border-accent/20 flex flex-col justify-center h-96 md:h-full min-h-96 space-y-6"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">How We Calculate Costs</h3>
                <p className="text-foreground/70">
                  Shipping costs are calculated based on weight, dimensions, and destination, with the final price
                  displayed at checkout.
                </p>
              </motion.div>

              <motion.div
                className="border-t border-border/50 pt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">Special Offers</h3>
                <motion.ul
                  className="space-y-2 text-foreground/70"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                    <span className="text-accent font-bold text-lg">✨</span>
                    <span>Free shipping may be offered on selected products</span>
                  </motion.li>
                  <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                    <span className="text-accent font-bold text-lg">✨</span>
                    <span>Free shipping for orders above a certain value</span>
                  </motion.li>
                  <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                    <span className="text-accent font-bold text-lg">✨</span>
                    <span>Express international shipments incur additional fees</span>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Packaging & Safety - Image Right */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-card rounded-l-2xl p-8 md:p-12 border border-accent/20 flex flex-col justify-center h-96 md:h-full min-h-96 order-2 md:order-1"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Packaging & Safety</h2>
              <p className="text-foreground/70 mb-6">
                All instruments are packed using medical-grade protective materials, ensuring they arrive clean,
                sterile, and ready for professional use.
              </p>
              <motion.div
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span className="text-foreground/70">Medical-grade materials</span>
                </motion.div>
                <motion.div className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span className="text-foreground/70">Sterile and clean upon arrival</span>
                </motion.div>
                <motion.div className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span className="text-foreground/70">Professional-grade protection</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="rounded-r-2xl overflow-hidden border border-accent/20 h-96 md:h-full min-h-96 order-1 md:order-2">
              <img src="/medical-grade-protective-packaging-sterile-instrum.jpg" alt="Protective packaging" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tracking & Support - Image Left */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-l-2xl overflow-hidden border border-accent/20 h-96 md:h-full min-h-96">
              <img src="/real-time-tracking-gps-location-monitoring-custome.jpg" alt="Real-time tracking" className="w-full h-full object-cover" />
            </div>

            <motion.div
              className="bg-card rounded-r-2xl p-8 md:p-12 border border-l-0 border-accent/20 flex flex-col justify-center h-96 md:h-full min-h-96"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Tracking & Support</h2>
              <p className="text-foreground/70 mb-6">
                Once your order is shipped, you will receive a tracking number via email or SMS to monitor delivery
                through the courier's website.
              </p>
              <motion.div
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-xl">📍</span>
                  <span className="text-foreground/70">Real-time tracking updates</span>
                </motion.div>
                <motion.div className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-xl">💬</span>
                  <span className="text-foreground/70">24/7 customer support available</span>
                </motion.div>
                <motion.div className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold text-xl">🚚</span>
                  <span className="text-foreground/70">Express delivery inquiries welcome</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Customs & Duties - Image Right */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-card rounded-l-2xl p-8 md:p-12 border border-accent/20 flex flex-col justify-center h-96 md:h-full min-h-96 order-2 md:order-1"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Customs, Duties & Taxes</h2>
              <p className="text-foreground/70 mb-6">
                International recipients are responsible for any customs duties, import taxes, or local fees.
              </p>
              <motion.ul
                className="space-y-3 text-foreground/70"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold">•</span>
                  <span>Not included in product prices or shipping costs</span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold">•</span>
                  <span>Check local customs regulations before ordering</span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold">•</span>
                  <span>Vary by destination country and product type</span>
                </motion.li>
              </motion.ul>
            </motion.div>

            <div className="rounded-r-2xl overflow-hidden border border-accent/20 h-96 md:h-full min-h-96 order-1 md:order-2">
              <img src="/customs-border-inspection-international-regulation.jpg" alt="Customs and duties" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accuracy of Shipping Information - Image Left */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-l-2xl overflow-hidden border border-accent/20 h-96 md:h-full min-h-96">
              <img src="/address-verification-accuracy-form-data-entry-prec.jpg" alt="Shipping accuracy" className="w-full h-full object-cover" />
            </div>

            <motion.div
              className="bg-card rounded-r-2xl p-8 md:p-12 border border-l-0 border-accent/20 flex flex-col justify-center h-96 md:h-full min-h-96"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Accuracy of Shipping Information</h2>
              <p className="text-foreground/70 mb-6">
                Customers must provide complete and accurate shipping details at checkout.
              </p>
              <motion.ul
                className="space-y-3 text-foreground/70"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li className="flex gap-3" variants={itemVariants}>
                  <span className="text-accent font-bold">⚠</span>
                  <span>We cannot be held responsible for incorrect addresses</span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants}>
                  <span className="text-accent font-bold">⚠</span>
                  <span>Contact support immediately if errors are found</span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants}>
                  <span className="text-accent font-bold">⚠</span>
                  <span>Changes cannot be guaranteed once with courier</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* After Delivery Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">After Delivery</h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          </motion.div>

          <motion.div
            className="bg-card rounded-2xl p-8 md:p-12 border border-border/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          >
            <div className="rounded-2xl overflow-hidden border border-accent/20 shadow-lg mb-8">
              <img
                src="/customer-satisfaction-product-inspection-quality-a.jpg"
                alt="After delivery support"
                className="w-full h-[400px]  object-cover"
              />
            </div>

            <p className="text-lg text-foreground/70 mb-8 text-balance">
              We encourage customers to inspect products immediately upon delivery. Any missing or damaged items should
              be reported within 48 hours.
            </p>

            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { num: 1, title: "Inspect Products", desc: "Check items immediately upon delivery" },
                { num: 2, title: "Report Issues", desc: "Contact us within 48 hours if needed" },
                { num: 3, title: "Get Support", desc: "Replacement or repair for defects" },
              ].map((step) => (
                <motion.div key={step.num} className="text-center" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                  <motion.div
                    className="text-4xl font-bold  mb-3 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto border border-accent/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.num}
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="border-t border-border/50 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Support Services</h3>
              <motion.ul
                className="space-y-3 text-foreground/70"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold">✓</span>
                  <span>Replacement or repair for manufacturing defects</span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold">✓</span>
                  <span>Replacement or repair for shipping damage</span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold">✓</span>
                  <span>Guidance on instrument care and maintenance</span>
                </motion.li>
                <motion.li className="flex gap-3" variants={itemVariants} whileHover={{ x: 5 }}>
                  <span className="text-accent font-bold">✓</span>
                  <span>Support for returns, exchanges, or additional orders</span>
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div
              className="mt-8 p-8 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl border border-accent/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <p className="text-foreground font-semibold text-center text-lg">
                At Exsurion Instruments, we continue to uphold our promise of{" "}
                <motion.span
                  className="text-accent"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Delivering Excellence, Wherever You Are
                </motion.span>{" "}
                with every shipment — ensuring reliability, precision, and care at every step.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default DeliveryPage
