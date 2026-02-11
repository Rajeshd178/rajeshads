import AdCard from "./AdCard";
import SectionHeader from "./SectionHeader";

// Print ad images
import caratlane from "@/assets/ads/caratlane.jpg";
import amul from "@/assets/ads/amul.jpg";
import josalukkas from "@/assets/ads/josalukkas.jpg";
import skechers from "@/assets/ads/skechers.jpg";
import maruti from "@/assets/ads/maruti.jpg";

// TV ad images
import airtel from "@/assets/ads/airtel.jpg";
import surfexcel from "@/assets/ads/surfexcel.jpg";
import fevicol from "@/assets/ads/fevicol.jpg";
import lic from "@/assets/ads/lic.jpg";
import tatatea from "@/assets/ads/tatatea.jpg";

// Social media ad images
import netflix from "@/assets/ads/netflix.jpg";
import cred from "@/assets/ads/cred.jpg";
import nykaa from "@/assets/ads/nykaa.jpg";
import mamaearth from "@/assets/ads/mamaearth.jpg";
import boat from "@/assets/ads/boat.jpg";

// Outdoor ad images
import capitalmind from "@/assets/ads/capitalmind.jpg";
import johnniewalker from "@/assets/ads/johnniewalker.jpg";
import abaran from "@/assets/ads/abaran.jpg";
import tanishq from "@/assets/ads/tanishq.jpg";
import godrej from "@/assets/ads/godrej.jpg";

const printAds = [
  {
    brand: "CaratLane",
    title: "Diamond Jewellery Offer Ad",
    image: caratlane,
    source: "Newspaper: The Times of India, 6th February 2026, Page 1",
    targetAudience: "This advertisement primarily targets urban middle- to upper-middle-class couples, especially young professionals and newly engaged or married individuals. It also appeals to people looking to purchase diamond jewellery for occasions like proposals, anniversaries, or Valentine's season.",
    message: "The main message of the ad is that owning natural diamond jewellery is now more affordable and accessible. By highlighting a flat 30% discount and low starting prices, the brand reduces the fear of high cost usually associated with diamonds.",
    visualElements: "The ad uses a romantic couple placed at the centre, which immediately creates an emotional connection. Soft lighting and warm tones give the ad a premium yet intimate feel. Purple and gold colours dominate the layout, reinforcing luxury and trust. Clean typography ensures the offer details are easy to notice.",
    cta: "The call-to-action encourages customers to visit the store or explore the collection, subtly supported by offers like free try-at-home and video calls, which reduce hesitation.",
    relevance: "Print works well here because jewellery buyers often spend time observing details, offers, and visuals carefully. Newspapers like TOI reach a mature, financially independent audience, making it an ideal medium.",
    celebrity: "There is no celebrity endorsement. The brand instead relies on emotional storytelling and product appeal, making the ad feel more personal and relatable.",
  },
  {
    brand: "Amul",
    title: '"Bharat ki Taxi" App Ad',
    image: amul,
    source: "Newspaper: The Times of India, 6th February 2026, Page 2",
    targetAudience: "This ad targets daily commuters, cab users, and digitally active Indians, including students, office-goers, and families who rely on transportation services.",
    message: 'The ad communicates that Amul is expanding beyond dairy into digital services, positioning its app as an inclusive, national solution for everyone. The phrase "App sab ke liye" reinforces accessibility and trust.',
    visualElements: "The iconic Amul Girl illustration is used, instantly grabbing attention and invoking nostalgia. The cartoon-style visuals combined with Indian transport modes (auto, bike, car) give the ad a patriotic and friendly tone.",
    cta: "The implied CTA is to download and use the Amul app, suggested through the smartphone visual and simple messaging.",
    relevance: "Newspaper readers often include working adults and families, who are likely users of transport apps. Print also suits Amul's traditional yet modern brand image.",
    celebrity: "No celebrity is used. The Amul Girl itself acts as a brand ambassador, which is already widely trusted and recognised.",
  },
  {
    brand: "Jos Alukkas",
    title: "Hearts Collection Ad",
    image: josalukkas,
    source: "Newspaper: The Times of India, 6th February 2026, Page 3",
    targetAudience: "This ad targets women buyers, couples, and gift purchasers, particularly those shopping for Valentine's Day, weddings, or meaningful gifting occasions.",
    message: "The ad focuses on celebrating love, commitment, and timeless relationships through diamond jewellery. Discount offers further encourage immediate purchase.",
    visualElements: "Soft beige and blush tones dominate the background, giving a calm and elegant feel. The jewellery pieces are neatly showcased alongside a poised female model, highlighting grace and sophistication. Serif typography adds a traditional luxury touch.",
    cta: "The CTA encourages readers to visit the store or shop online, reinforced by limited-period offers and exchange benefits.",
    relevance: "Jewellery buyers often trust print advertisements in reputed newspapers more than digital ads. Print also allows customers to carefully read offers and compare designs.",
    celebrity: "No celebrity endorsement is present. The brand uses a model to represent elegance, keeping the focus on the jewellery rather than fame.",
  },
  {
    brand: "Skechers",
    title: "Mohun Bagan Partnership Ad",
    image: skechers,
    source: "Newspaper: The Times of India, 6th February 2026, Page 4",
    targetAudience: "This advertisement targets sports enthusiasts, football fans, and young adults who value performance footwear and active lifestyles.",
    message: "The message highlights that Skechers footwear delivers comfort and performance, reinforced by its association with a professional football club.",
    visualElements: "The ad uses action shots of football players in motion, creating energy and intensity. Dark backgrounds with bold red and green elements reflect strength and team spirit. The typography is strong and bold, matching the sports theme.",
    cta: "The CTA is indirect, encouraging viewers to associate the brand with professional-level performance, leading to consideration and purchase.",
    relevance: "Print ads in newspapers reach sports-following audiences, especially those who read sports pages. The large visual format enhances impact.",
    celebrity: "Instead of individual celebrities, the ad uses team endorsement (Mohun Bagan Super Giant), which builds credibility among football fans.",
  },
  {
    brand: "Maruti Suzuki",
    title: "Nexa Loyalty Upgrade Ad",
    image: maruti,
    source: "Newspaper: The Times of India, 6th February 2026, Page 5",
    targetAudience: "This ad targets existing Maruti Suzuki car owners, especially middle-aged professionals and families considering an upgrade to a premium vehicle.",
    message: "The message conveys that brand loyalty is valued and rewarded, encouraging current customers to upgrade within the Maruti ecosystem through exclusive benefits.",
    visualElements: 'The ad uses a monochrome premium aesthetic, showing a confident man in a luxurious setting, reinforcing exclusivity. Minimal text and clean design give it a sophisticated Nexa showroom feel.',
    cta: '"Scan to connect to a showroom" and website links push readers towards immediate action.',
    relevance: "Print advertising works well for automobiles because buyers often make high-involvement decisions and trust established newspapers like TOI.",
    celebrity: "No celebrity endorsement is used. The ad focuses on lifestyle aspiration, making the reader imagine themselves in that position.",
  },
];

const tvAds = [
  {
    brand: "Airtel",
    title: '"Har Friend Zaroori Hai Yaar"',
    image: airtel,
    source: "Channel: Star Plus · Date Seen: 09-02-2026 · Time: 7:45 PM",
    targetAudience: "This advertisement primarily targets young adults, students, and urban families who rely heavily on mobile connectivity for communication, entertainment, and everyday activities. It especially appeals to youth who value friendships, emotional connections, and constant internet access.",
    message: "The core message of the advertisement is that Airtel understands the importance of relationships and connection. By portraying the internet as a reliable friend, Airtel positions itself as a supportive and dependable companion in moments of confusion, loneliness, and need.",
    visualElements: "The ad uses warm, relatable visuals featuring young people in everyday situations. Natural lighting, casual clothing, and expressive facial emotions make the scenes feel realistic and emotionally engaging. The red Airtel branding appears subtly but consistently, ensuring strong brand recall without overpowering the story.",
    cta: "The call-to-action encourages viewers to choose Airtel for reliable network and internet services, often implied through taglines rather than direct selling, making the decision feel natural and trust-based.",
    relevance: "Television is an ideal medium for this campaign because emotional storytelling works best with moving visuals and sound. TV allows Airtel to connect with a mass audience and build emotional bonds that go beyond technical features like speed or coverage.",
    celebrity: "No celebrity endorsement is used. Instead, the ad focuses on real-life situations and relatable characters, which makes the message more authentic and allows viewers to see themselves in the story.",
  },
  {
    brand: "Surf Excel",
    title: '"Daag Achhe Hain"',
    image: surfexcel,
    source: "Channel: Colors TV · Date Seen: 09-02-2026 · Time: 8:30 PM",
    targetAudience: "This ad primarily targets families with children, especially mothers and parents who value emotional growth and freedom for kids alongside cleanliness.",
    message: "The message beautifully conveys that stains are a sign of learning, fun, and values, and should not be feared. Surf Excel positions itself as a detergent that supports children's experiences.",
    visualElements: "Bright, warm colours dominate the ad, showing kids playing freely and getting dirty. The visuals contrast playful mess with emotional warmth, making the story memorable. The Surf Excel pack stands out clearly at the centre.",
    cta: "Subtle CTA encouraging parents to choose Surf Excel for worry-free washing, trusting the product to handle tough stains.",
    relevance: "Television is ideal because emotional storytelling and visuals create a strong impact. The narrative format connects deeply with family audiences.",
    celebrity: "No celebrity endorsement. Real-life situations and children's innocence serve as the emotional anchor.",
  },
  {
    brand: "Fevicol",
    title: "Strong Bond TV Ad",
    image: fevicol,
    source: "Channel: Sony Entertainment Television · Date Seen: 09-02-2026 · Time: 6:55 PM",
    targetAudience: "This ad targets households, carpenters, furniture makers, and everyday consumers who value durability and strength in products.",
    message: "The message is simple yet powerful: Fevicol creates bonds that never break, no matter how extreme the situation.",
    visualElements: "The ad uses exaggerated humour, showing an overloaded vehicle held together because of Fevicol. Earthy tones, rural visuals, and dramatic composition add authenticity and memorability.",
    cta: "The CTA is indirect, reinforcing brand recall and trust, ensuring Fevicol comes to mind whenever strength is required.",
    relevance: "Television amplifies Fevicol's visual humour and exaggeration, making the message unforgettable across language and literacy barriers.",
    celebrity: "No celebrity is used. The brand relies on concept-driven creativity, which has become its signature style.",
  },
  {
    brand: "LIC",
    title: '"Zindagi Ke Saath Bhi, Zindagi Ke Baad Bhi"',
    image: lic,
    source: "Channel: Zee TV · Date Seen: 09-02-2026 · Time: 9:10 PM",
    targetAudience: "This ad targets working professionals, parents, and middle-aged individuals who are concerned about long-term financial security for their families.",
    message: "The message highlights that LIC stands by families during life and even after, emphasizing trust, protection, and reliability.",
    visualElements: "Calm visuals like protective hands, family silhouettes, and a growing plant symbolize security and future growth. Blue and yellow colours reflect trust and stability.",
    cta: "The CTA encourages viewers to invest in LIC policies, either by contacting agents or visiting LIC offices.",
    relevance: "Television suits insurance advertising because trust is built through repeated exposure and emotional reassurance, which TV delivers effectively.",
    celebrity: "No celebrity endorsement is present. LIC relies on its legacy and emotional credibility instead of star power.",
  },
  {
    brand: "Tata Tea",
    title: '"Jaago Re" Campaign',
    image: tatatea,
    source: "Channel: Star Sports 1 · Date Seen: 09-02-2026 · Time: 5:40 PM",
    targetAudience: "This ad targets socially aware citizens, families, and young adults, especially those concerned about social and environmental issues.",
    message: "The message urges viewers to wake up and take responsibility—whether it is voting, protecting the environment, or making conscious choices.",
    visualElements: "Children holding placards create a strong emotional contrast, symbolising innocence and urgency. Green and earthy tones reflect sustainability, while product packs subtly maintain brand presence.",
    cta: "The CTA is ideological rather than commercial, encouraging viewers to think, act responsibly, and engage with social change.",
    relevance: "Television allows Tata Tea to blend social messaging with brand purpose, reaching a mass audience with emotional storytelling.",
    celebrity: "No celebrity endorsement is used. The message itself is the hero, making it feel sincere and impactful.",
  },
];

const socialAds = [
  {
    brand: "Netflix India",
    title: "Meme-led Content Promotion",
    image: netflix,
    source: "Platform: Instagram · Handle: @netflix_in · Date Seen: 08-02-2026 · Time: 6:15 PM",
    targetAudience: "This ad targets young adults, college students, and binge-watchers, especially people who are active on Instagram, Twitter, and meme pages. It strongly connects with Gen Z and millennials who consume pop culture daily.",
    message: "The message is simple and clever: Netflix understands your emotions as a viewer. By using humour and relatable situations, the brand positions itself as fun, self-aware, and close to its audience.",
    visualElements: "The ad uses a collage of meme-style visuals from popular Netflix shows. Bold captions, screenshots from series, and the red-black Netflix branding instantly catch attention while scrolling.",
    cta: "The CTA is indirect but effective — it encourages users to watch, share, and engage with Netflix content by triggering relatability.",
    relevance: "Social media is the perfect medium because memes are meant to be shared. This format thrives on Instagram and Twitter, where humour drives organic reach.",
    celebrity: "Actors from Netflix series appear, but not as endorsers. The characters and scenes themselves act as hooks, which feels more authentic.",
  },
  {
    brand: "CRED",
    title: "Celebrity-led Social Campaign",
    image: cred,
    source: "Platform: Instagram & YouTube · Handle: @cred_club · Date Seen: 07-02-2026 · Time: 9:20 PM",
    targetAudience: "This ad targets urban professionals, credit card users, and digitally savvy individuals who are financially literate and active on platforms like Instagram and YouTube.",
    message: "The message is that CRED is exclusive, rewarding, and cool. The ad uses humour and star power to make financial responsibility feel aspirational.",
    visualElements: "Bright outdoor visuals, a confident celebrity pose, and the bold black CRED logo create a high-impact frame. The contrast between casual fun and premium branding works well for social feeds.",
    cta: "The CTA subtly encourages users to download the CRED app and pay bills, without sounding like a typical finance ad.",
    relevance: "Social media allows CRED to build a brand personality, not just promote features. Short-form videos and reels help the ad go viral.",
    celebrity: "Yes, a popular Indian celebrity is featured, adding recall value and helping the brand cut through clutter.",
  },
  {
    brand: "Nykaa",
    title: "Beauty & Lifestyle Ad",
    image: nykaa,
    source: "Platform: Instagram · Handle: @mynykaa · Date Seen: 06-02-2026 · Time: 5:40 PM",
    targetAudience: "This ad targets young women, beauty enthusiasts, and online shoppers, especially those following influencers and fashion content on Instagram.",
    message: "The message is that Nykaa is a one-stop destination for everything you love in beauty and self-care. It promotes indulgence and self-expression.",
    visualElements: "Soft pastel colours, neatly arranged products, and a glamorous model create an aspirational yet approachable look. The typography is elegant and feminine.",
    cta: "The CTA encourages users to shop online via the Nykaa app or website, often supported by offers or exclusivity.",
    relevance: "Instagram is ideal because beauty products rely heavily on visual appeal and influencer culture, which social media supports perfectly.",
    celebrity: "Yes, a well-known actress is featured, adding trust and aspiration to the brand.",
  },
  {
    brand: "Mamaearth",
    title: "Rice Dewy Bright Face Wash",
    image: mamaearth,
    source: "Platform: Instagram · Handle: @mamaearth.in · Date Seen: 05-02-2026 · Time: 8:05 PM",
    targetAudience: "This ad targets young adults, skincare beginners, and health-conscious consumers, especially women looking for safe, natural products.",
    message: "The message focuses on natural ingredients and visible results, positioning the product as gentle, effective, and suitable for daily use.",
    visualElements: "Warm tones, glowing skin visuals, and ingredient highlights like rice water and niacinamide create a clean and trustworthy aesthetic. Product packaging is clearly visible.",
    cta: 'The CTA motivates users to try the product for glowing skin, often supported by claims like "India\'s No.1".',
    relevance: "Social media is ideal because skincare decisions are often influenced by visual proof, reviews, and trends seen online.",
    celebrity: "Yes, a popular female celebrity is featured, enhancing credibility and aspirational appeal.",
  },
  {
    brand: "boAt",
    title: "Fitness & Motivation Ad",
    image: boat,
    source: "Platform: Instagram Reels & YouTube Shorts · Handle: @boat.nirvana · Date Seen: 04-02-2026 · Time: 7:10 PM",
    targetAudience: "This ad targets fitness enthusiasts, young men and women, and music lovers, especially Gen Z users active on Instagram Reels and YouTube Shorts.",
    message: "The message highlights that success starts with mindset and discipline, with boAt products acting as a companion in the fitness journey.",
    visualElements: "High-contrast lighting, intense workout visuals, and bold typography create a motivational feel. Red and black tones add power and energy.",
    cta: "The CTA encourages users to choose boAt for performance-driven lifestyles, linking fitness with audio motivation.",
    relevance: "Short motivational videos perform extremely well on social media, making this format perfect for Reels and Shorts.",
    celebrity: "The ad may feature an athlete or fitness influencer, reinforcing performance and dedication.",
  },
];

const outdoorAds = [
  {
    brand: "Capitalmind",
    title: '"Win at Life" Billboard',
    image: capitalmind,
    source: "Outdoor Billboard",
    targetAudience: "This billboard targets urban professionals, salaried employees, entrepreneurs, and investors who regularly commute through busy city roads. These are people thinking about long-term financial growth and stability.",
    message: 'The message motivates viewers by connecting investment success with life success. The line "Not yet. Why not? Win at Life" subtly pushes the audience to reflect on their financial planning.',
    visualElements: "A lone trekker standing on a mountain peak symbolises achievement and perseverance. The dark blue background conveys seriousness and trust, while minimal text ensures readability from a distance.",
    cta: "The CTA is subtle and informative, directing viewers to visit the website to learn more about mutual fund investments.",
    relevance: "Outdoor advertising works well for financial brands because daily repetition builds credibility and brand recall among commuters.",
    celebrity: "No celebrity endorsement is used. The brand relies on aspirational imagery and messaging.",
  },
  {
    brand: "Johnnie Walker",
    title: '"Keep Walking" Outdoor Campaign',
    image: johnniewalker,
    source: "Outdoor Billboard",
    targetAudience: "This ad targets urban, premium consumers, including young professionals and aspirational drinkers who associate brands with lifestyle and progress.",
    message: 'The iconic message "Keep Walking" reinforces the idea of continuous progress and ambition, aligning personal growth with the brand philosophy.',
    visualElements: "The confident female figure walking forward, combined with soft blue and beige tones, creates a calm yet powerful visual. The design feels premium and uncluttered.",
    cta: "There is no direct CTA. The aim is brand positioning and recall, not immediate purchase.",
    relevance: "Large-format billboards enhance luxury perception and ensure strong visual impact in high-traffic areas.",
    celebrity: "The model is not a celebrity. The brand focuses on symbolism and attitude rather than star power.",
  },
  {
    brand: "Abaran",
    title: "Bridal Collection Billboard",
    image: abaran,
    source: "Outdoor Billboard · Location: Bangalore",
    targetAudience: "This billboard targets brides-to-be, families, and wedding planners, especially in Bangalore, where weddings are high-investment occasions.",
    message: "The message highlights that memories and moments last forever, just like the jewellery worn during them. It emotionally connects jewellery with life's milestones.",
    visualElements: "A traditionally dressed bridal couple is used to evoke cultural richness. Soft lavender and neutral tones add elegance, while the jewellery is subtly highlighted.",
    cta: "The CTA directs viewers to visit nearby stores in Rajajinagar, M.G. Road, and J.P. Nagar.",
    relevance: "Outdoor hoardings are ideal for wedding jewellery as they offer high visibility and prestige during peak wedding seasons.",
    celebrity: "No celebrity endorsement is present. The emotional wedding narrative itself is sufficient.",
  },
  {
    brand: "Tanishq",
    title: "Festival of Diamonds Billboard",
    image: tanishq,
    source: "Outdoor Billboard",
    targetAudience: "This ad targets urban women, working professionals, and festive shoppers who purchase jewellery during celebrations and special occasions.",
    message: "The message promotes the Festival of Diamonds, encouraging customers to celebrate festivals with elegant diamond jewellery.",
    visualElements: "A smiling female model wearing contemporary jewellery instantly draws attention. The blue background gives a premium feel, while the jewellery stands out clearly.",
    cta: "The CTA is implied — visit Tanishq stores during the festival period to explore the collection.",
    relevance: "Outdoor advertising is effective during festivals because repeated exposure drives store visits.",
    celebrity: "A popular actress is featured, adding aspirational value and trust to the brand.",
  },
  {
    brand: "Godrej",
    title: "AI Tech Washing Machine Billboard",
    image: godrej,
    source: "Outdoor Billboard",
    targetAudience: "This ad targets urban households, middle-class families, and homemakers who value fabric care, especially traditional Indian handloom clothing.",
    message: "The message reassures consumers that modern technology can safely care for delicate, traditional fabrics, blending innovation with cultural sensitivity.",
    visualElements: "The innovative visual of a saree emerging from a washing machine immediately grabs attention. Earthy colours and bilingual text make the ad inclusive and relatable.",
    cta: "The CTA encourages viewers to trust Godrej washing machines for delicate clothing care, leading to purchase consideration.",
    relevance: "Outdoor hoardings allow creative, oversized visuals that stop people mid-commute and spark curiosity.",
    celebrity: "No celebrity endorsement is used. The concept and visual creativity act as the main attraction.",
  },
];

interface AdSectionProps {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  ads: typeof printAds;
}

const AdSection = ({ id, emoji, title, subtitle, ads }: AdSectionProps) => (
  <section id={id} className="py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-4 md:px-8">
      <SectionHeader emoji={emoji} title={title} subtitle={subtitle} />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ads.map((ad, i) => (
          <AdCard key={ad.brand} index={i} {...ad} />
        ))}
      </div>
    </div>
  </section>
);

export { printAds, tvAds, socialAds, outdoorAds };
export default AdSection;
