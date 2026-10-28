// SINGLE SOURCE OF TRUTH for business details and services.
// Everything marked review:true came from the public GlossGenius page
// (scraped 2026-10-25) and is NOT yet owner-approved. Do not publish until reviewed.
window.SALON = {
  name: "Looking Glass Salon",
  tagline: "Hair color, cuts and smoothing treatments",
  // One booking URL for every "Book" button. Always the site's own booking page; never point Book buttons at GlossGenius.
  bookingUrl: "book.html",
  // Her old GlossGenius site, linked from the footer "Old website" button for reference only.
  oldSiteUrl: "https://brandieryan.glossgenius.com/",
  existingSiteUrl: "https://brandieryan.glossgenius.com/portfolio",
  // null = unknown. Pages show a "to be confirmed" note instead of a fake value.
  location: { city: "Sterling, VA", address: null, parking: null, review: true },
  phone: null,
  email: null,
  hours: null,
  social: { instagram: null, facebook: null },
  // bio left empty on purpose: Brandie is writing it herself.
  owner: { name: "Brandie Ryan", role: "Owner and stylist", bio: null },
  policies: { cancellation: null },
  domain: null
};

// price: display string ("$100+" = starts at). null = hide.
// duration: minutes, null = hide. depositNote: text from the public page.
window.SERVICES = [
  { cat: "Consultation & Cuts", items: [
    {"name":"Consultation","price":"$0","duration":15,"desc":"For new guests who want to discuss service options to best suit their hair needs."},
    {"name":"Women's Haircut & Blow Dry/Style","price":"$100+","duration":60},
    {"name":"Men's Haircut","price":"$70+","duration":45},
    {"name":"Children's Cut (10 & under)","price":"$60+","duration":45},
    {"name":"Shampoo & Blow Dry/Style","price":"$70+","duration":45,"desc":"A pampering shampoo and blow dry/style service."}
  ]},
  { cat: "Color", items: [
    {"name":"Color Retouch & Style","price":"$230+","duration":135,"desc":"Color gloss included unless specified. With a cut: $260+, 150 min."},
    {"name":"All-Over Color & Style","price":"$240+","duration":150,"desc":"With a cut: $300+, 180 min."},
    {"name":"Gloss/Toner","price":"$70+","duration":45}
  ]},
  { cat: "Highlights & Balayage", items: [
    {"name":"Partial Highlight + Style","price":"$250","duration":165,"desc":"Gloss included unless specified. With a cut: $300+, 165 min."},
    {"name":"Full Highlight & Style","price":"$280+","duration":165,"desc":"Gloss included unless specified. With a cut: $340, 210 min."},
    {"name":"Face Frame Highlight & Style","price":"$190+","duration":135,"desc":"Gloss included unless specified. With a cut: $260, 150 min."},
    {"name":"Balayage + Style","price":"$370+","duration":195,"desc":"Gloss included unless specified. With a cut: $400, 210 min."}
  ]},
  { cat: "Smoothing Treatments", items: [
    {"name":"Cezanne Keratin Express Treatment","price":"$220+","duration":120,"desc":"Formaldehyde-free keratin smoothing. Quicker service, results last about 3 months."},
    {"name":"Cezanne Keratin Smoothing Treatment","price":"$400+","duration":180,"desc":"Formaldehyde-free keratin smoothing. Longer-lasting, results last about 5 months."},
    {"name":"Blonde Keratin Treatment","price":"$200+","duration":120,"desc":"Made for blondes: smooths and tones without added warmth. The Express version starts at $200 and takes about 2 hours. The Ultimate Blonde version starts at $400, takes about 3 hours and lasts about 5 months."}
  ]},
  { cat: "Extensions", items: [
    {"name":"Tape Extension Installation","price":"$435+","duration":90,"desc":"$75.00 deposit required for new clients. First time installation of tape in hair extensions. Cost starts at $120 per 10 piece bundle, depending on length of hair, available in 14”, 20” and 24”. Installation is $175. Additional charge for custom color work. Average head is between 2-3 bundles depending on the desired look."},
    {"name":"Tape Extension Move Up","price":"$250+","duration":150,"desc":"$175.00 deposit required. Hair tape in extensions is removed, washed, and reinstalled. Hair can last up to a year with 6-8 week maintenance and proper care."},
    {"name":"Sew-In Micro Weft Installation","price":"$500+","duration":180,"desc":"Hair not included. Starting price; varies by number of rows."}
  ]}
];

// Add-ons only appear in the booking Extras step, not on the Services page.
window.ADDONS = [
  {"name":"Add On Full Highlights","price":"$220+","duration":60,"desc":"Add full highlights to your color service."},
  {"name":"Add On Face Frame Highlights","price":"$90+","duration":30,"desc":"A little brightness around your face."},
  {"name":"Add On Partial Highlights","price":"$150+","duration":45,"desc":"Add a partial highlight onto a color retouch service."},
  {"name":"Add On Color Retouch","price":"$100+","duration":45,"desc":"A root touch-up added to another color service."},
  {"name":"Extra Product Charge","price":"$30","duration":10},
  {"name":"Conditioning Treatment","price":"$20","duration":10},
  {"name":"Malibu Treatment","price":"$20","duration":10}
];

// Not shown on the site (kept so nothing is lost): the less-requested services, plus the '+ cut' versions now folded into their cards.
window.MORE_SERVICES = [
  {"name":"Bang Trim","price":"$20","duration":15,"desc":"A precise bang trim to keep your style on point.","cat":"Consultation & Cuts"},
  {"name":"Perm + Cut/Style","price":"$230+","duration":145,"cat":"Color"},
  {"name":"Sew-In Micro Weft Removal","price":"$75","duration":30,"desc":"Removal only. Does not include putting wefts back in.","cat":"Extensions"},
  {"name":"Sew-In Weft Move Up","price":"$200+","duration":120,"desc":"Sew-in removal and reinstall.","cat":"Extensions"},
  {"name":"Extension Removal","price":"$75","duration":45,"cat":"Extensions"},
  {"name":"Replace Hair Extensions","price":"$250","duration":150,"cat":"Extensions"},
  {"name":"Color Retouch + Cut/Style","price":"$260+","duration":150,"desc":"Gloss included unless specified.","cat":"Color"},
  {"name":"All-Over Color + Cut/Style","price":"$300+","duration":180,"cat":"Color"},
  {"name":"Partial Highlight + Cut/Style","price":"$300+","duration":165,"desc":"Gloss included unless specified.","cat":"Highlights & Balayage"},
  {"name":"Full Highlight + Cut/Style","price":"$340","duration":210,"desc":"Gloss included unless specified.","cat":"Highlights & Balayage"},
  {"name":"Face Frame Highlight + Cut/Style","price":"$260","duration":150,"desc":"Gloss included unless specified.","cat":"Highlights & Balayage"},
  {"name":"Balayage + Cut/Style","price":"$400","duration":210,"desc":"Gloss included unless specified.","cat":"Highlights & Balayage"},
  {"name":"Express Blonde Keratin Treatment","price":"$200+","duration":120,"desc":"Quick keratin treatment made for blondes, smooths and tones without added warmth.","cat":"Smoothing Treatments"},
  {"name":"Cezanne Ultimate Blonde Treatment","price":"$400+","duration":180,"desc":"Lasts about 5 months. Blue-violet pigment to remove brassy shades while smoothing damaged hair.","cat":"Smoothing Treatments"},
  {"name":"Tape Extension Removal / Reinstall","price":"$250+","duration":150,"desc":"$175.00 deposit required. Hair tape in extensions is removed, washed, and reinstalled. Hair can last up to a year with 6-8 week maintenance and proper care.","cat":"Extensions"}
];

// Gallery: photos live in assets/gallery/. For each one set src, alt (what the photo shows,
// for screen readers), caption (optional) and tags. A null src shows a "Photo coming soon" tile.
// Optional pos sets which part of the photo shows in the square tile (default center). Tags become the filter chips. Photos below are from the owner's GlossGenius portfolio, used with her permission.
window.GALLERY = [
  { src: "assets/gallery/ryan-02.jpg", thumb: "assets/gallery/ryan-02-t.jpg", alt: "Smiling client with a silver-white chin-length bob and bangs, with side and back views", caption: "", tags: ["Blonde", "Bobs"] },
  { src: "assets/gallery/ryan-06.jpg", thumb: "assets/gallery/ryan-06-t.jpg", alt: "Two back views of long layered hair in dark violet and purple tones", caption: "", tags: ["Vivid color"] },
  { src: "assets/gallery/ryan-07.jpg", thumb: "assets/gallery/ryan-07-t.jpg", alt: "Hair held up to show a hidden panel of pink, orange and purple color under dark hair", caption: "", tags: ["Vivid color"], pos: "50% 35%" },
  { src: "assets/gallery/ryan-09.jpg", thumb: "assets/gallery/ryan-09-t.jpg", alt: "Back view of a wavy bob with dark roots and caramel highlights", caption: "", tags: ["Brunette", "Highlights", "Bobs"], pos: "50% 40%" },
  { src: "assets/gallery/ryan-10.jpg", thumb: "assets/gallery/ryan-10-t.jpg", alt: "Side view of a smooth, rounded copper-blonde bob on a young client", caption: "", tags: ["Bobs", "Kids"], pos: "50% 35%" },
  { src: "assets/gallery/ryan-18.jpg", thumb: "assets/gallery/ryan-18-t.jpg", alt: "Back view of long, bright blonde hair with a soft root blend, outdoors on a deck", caption: "", tags: ["Blonde", "Highlights"], pos: "50% 30%" },
  { src: "assets/gallery/ryan-19.jpg", thumb: "assets/gallery/ryan-19-t.jpg", alt: "Close up of wavy hair with dark roots melting into bright blonde ends", caption: "", tags: ["Blonde", "Highlights"] },
  { src: "assets/gallery/ryan-23.jpg", thumb: "assets/gallery/ryan-23-t.jpg", alt: "Four views of shoulder-length blonde hair in soft ash and honey tones", caption: "", tags: ["Blonde", "Bobs"] },
  { src: "assets/gallery/ryan-24.jpg", thumb: "assets/gallery/ryan-24-t.jpg", alt: "Two views: dark hair with bold blonde stripes, and long copper-auburn waves", caption: "", tags: ["Red", "Highlights"] },
  { src: "assets/gallery/ryan-26.jpg", thumb: "assets/gallery/ryan-26-t.jpg", alt: "Two back views of long straight dark brown hair, the second smoother and glossier", caption: "", tags: ["Brunette"] },
  { src: "assets/gallery/ryan-28.jpg", thumb: "assets/gallery/ryan-28-t.jpg", alt: "Five views of long hair going from dull orange to bright, vivid copper", caption: "", tags: ["Red", "Before & After"] },
  { src: "assets/gallery/ryan-32.jpg", thumb: "assets/gallery/ryan-32-t.jpg", alt: "Long, smooth blonde hair with a deep side part", caption: "", tags: ["Blonde"], pos: "50% 30%" },
  { src: "assets/gallery/ryan-40.jpg", thumb: "assets/gallery/ryan-40-t.jpg", alt: "Soft, layered blonde hair with face-framing pieces", caption: "", tags: ["Blonde"], pos: "50% 30%" },
  { src: "assets/gallery/ryan-42.jpg", thumb: "assets/gallery/ryan-42-t.jpg", alt: "Back view of a textured blonde bob with bright highlights", caption: "", tags: ["Blonde", "Highlights", "Bobs"], pos: "50% 30%" },
  { src: "assets/gallery/ryan-45.jpg", thumb: "assets/gallery/ryan-45-t.jpg", alt: "Side view of layered dark brown hair with warm, lighter ends", caption: "", tags: ["Brunette"], pos: "50% 30%" },
  { src: "assets/gallery/ryan-52.jpg", thumb: "assets/gallery/ryan-52-t.jpg", alt: "Back view of long, smooth ash-brown hair after tape-in extensions", caption: "", tags: ["Extensions", "Brunette"], pos: "50% 30%" },
];
