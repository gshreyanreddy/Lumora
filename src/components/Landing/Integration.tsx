import React from "react";

/**
 * IntegrationsLight.tsx
 * Light-mode "One-Click Sync" integrations section using Tailwind CSS.
 */

const INTEGRATIONS = [
  { id: "hubspot", src: "/Hubspot logo.png", alt: "HubSpot", title: "HubSpot" },
  { id: "salesforce", src: "/sales.png", alt: "Salesforce", title: "Salesforce" },
  { id: "Outlook", src: "/Outlook logo.png", alt: "Outlook", title: "Outlook" },
  { id: "Gmail", src: "/Gmail.webp", alt: "Gmail", title: "Gmail" },
  { id: "Pipedrive", src: "/Pipedrive.png", alt: "Pipedrive", title: "Pipedrive" },
  { id: "Google", src: "/Google logo.png", alt: "Google", title: "Google" },
];

const IntegrationBadge: React.FC<{ src: string; alt: string; title?: string }> = ({ src, alt, title }) => (
  <div className="relative flex items-center justify-center w-20 h-20 rounded-xl bg-white border border-gray-200 shadow-sm">
    <span className="absolute inset-0 rounded-xl pointer-events-none" aria-hidden />
    <img
      src={src}
      alt={alt}
      title={title}
      loading="lazy"
      decoding="async"
      className="w-10 h-10 object-contain"
    />
  </div>
);

const Integration: React.FC = () => {
  return (
    <section className="bg-black py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative mx-auto w-fit">
          {/* Decorative radial vignette (light) */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 30%, rgba(14,165,233,0.06), transparent 30%)",
              zIndex: 0,
            }}
          />

          {/* Icon rows */}
          <div className="relative z-10 space-y-3">
            <div className="mx-auto flex w-fit justify-center gap-3">
              <IntegrationBadge {...INTEGRATIONS[0]} />
              <IntegrationBadge {...INTEGRATIONS[1]} />
            </div>

            <div className="mx-auto flex w-fit justify-center gap-3">
              <IntegrationBadge {...INTEGRATIONS[2]} />
              {/* center feature badge (brand) — slightly larger and with soft ring */}
              <div className="relative flex items-center justify-center w-24 h-24 rounded-xl bg-white border border-gray-200 shadow-md">
                <div className="absolute inset-0 rounded-xl ring-2 ring-white/60 pointer-events-none" />
                <img
                  src="/lumora logo.png" // replace with your product logo
                  alt="Lumora"
                  width={64}
                  height={64}
                  loading="lazy"
                  className="w-12 h-12 object-cover rounded-full p-1 bg-white"
                />
              </div>
              <IntegrationBadge {...INTEGRATIONS[3]} />
            </div>

            <div className="mx-auto flex w-fit justify-center gap-3">
              <IntegrationBadge {...INTEGRATIONS[4]} />
              <IntegrationBadge {...INTEGRATIONS[5]} />
            </div>
          </div>
        </div>

        {/* Heading + Blurb */}
        <div className="mx-auto mt-6 max-w-lg space-y-4 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl text-white">
            One-Click sync with your sales tools
          </h2>
          <p className="text-slate-300 font-medium">
            Instantly export high-intent prospects and signals into your CRM.
            Connect AI-scored companies and real-time signals directly to Salesforce, HubSpot, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integration;
