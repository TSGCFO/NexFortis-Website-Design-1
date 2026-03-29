interface GooglePartnerBadgeProps {
  showDisclaimer?: boolean;
  variant?: "default" | "footer";
}

export function GooglePartnerBadge({ showDisclaimer = false, variant = "default" }: GooglePartnerBadgeProps) {
  const isFooter = variant === "footer";

  return (
    <div className={`flex flex-col items-center ${isFooter ? "gap-2" : "gap-3"}`}>
      <div
        className={`flex items-center justify-center min-h-[100px] ${
          isFooter ? "p-[25px]" : "p-[35px]"
        }`}
      >
        {/*
          =====================================================================
          GOOGLE PARTNER BADGE — OFFICIAL HTML SNIPPET
          =====================================================================
          Replace the placeholder <div> below with the official Google Partner
          badge HTML snippet from your Google Ads Partner dashboard:
            1. Log in to ads.google.com
            2. Go to Tools & Settings → Partner program
            3. Copy the official badge HTML snippet
            4. Paste it here, replacing the entire placeholder <div>

          DO NOT resize, recolor, or alter the official badge in any way.
          The wrapper enforces Google's compliance rules:
            - Minimum rendered height: 100px
            - Clear space on all sides: ≥ half the badge height
          Do not add extra CSS to the snippet itself.
          =====================================================================
        */}
        <div
          className={`border-2 border-dashed rounded-lg flex items-center justify-center text-center ${
            isFooter
              ? "border-primary-foreground/30 text-primary-foreground/50 w-[120px] h-[50px] text-[10px]"
              : "border-muted-foreground/30 text-muted-foreground w-[160px] h-[70px] text-xs"
          }`}
          role="img"
          aria-label="Google Partner Badge — placeholder"
        >
          Google Partner Badge
          <br />
          <span className={isFooter ? "text-[8px]" : "text-[10px]"}>Insert official snippet</span>
        </div>
      </div>
      {showDisclaimer && (
        <p className="text-xs text-muted-foreground italic max-w-xs text-center">
          SEO services are not verified or endorsed by Google.
        </p>
      )}
    </div>
  );
}
